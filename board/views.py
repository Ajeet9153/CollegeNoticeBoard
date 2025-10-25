from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status, generics, permissions, mixins
from django.core.mail import send_mail
from utils.notification_utils import send_sms
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate

from .models import Notice, Feedback, NotificationPreference
from .serializers import (
    NoticeSerializer,
    FeedbackSerializer,
    RegisterSerializer,
    NotificationPreferenceSerializer
)


# ----------------- Notice APIs -----------------
@api_view(['GET'])
def get_notices(request):
    notices = Notice.objects.filter(is_active=True).order_by('-created_at')
    serializer = NoticeSerializer(notices, many=True, context={'request': request})
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_notice(request):
    serializer = NoticeSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)


# ----------------- Feedback APIs -----------------
@api_view(['GET', 'POST'])
def feedback_list_create(request):
    if request.method == 'GET':
        if not request.user.is_authenticated:
            return Response(
                {"detail": "Authentication required to view feedbacks."},
                status=status.HTTP_401_UNAUTHORIZED
            )
        feedbacks = Feedback.objects.all().order_by('-submitted_at')
        serializer = FeedbackSerializer(feedbacks, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = FeedbackSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# ----------------- Register API -----------------
@api_view(['POST'])
def register_user(request):
    serializer = RegisterSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(
            {"message": "User registered successfully"},
            status=status.HTTP_201_CREATED
        )
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# ----------------- Notice Detail API -----------------
@api_view(['GET'])
def get_notice_detail(request, id):
    try:
        notice = Notice.objects.get(pk=id, is_active=True)
    except Notice.DoesNotExist:
        return Response({"detail": "Notice not found."}, status=status.HTTP_404_NOT_FOUND)
    
    serializer = NoticeSerializer(notice, context={'request': request})
    return Response(serializer.data)


# ----------------- Notification Preference APIs -----------------
class NotificationPreferenceView(
    mixins.ListModelMixin,
    mixins.CreateModelMixin,
    mixins.UpdateModelMixin,
    generics.GenericAPIView
):
    serializer_class = NotificationPreferenceSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return NotificationPreference.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def patch(self, request, *args, **kwargs):
        return self.partial_update(request, *args, **kwargs)


# ----------------- Send Notice API -----------------
@api_view(['POST'])
@permission_classes([IsAdminUser])
def send_notice(request):
    """
    Send notice to users based on their notification preferences.
    """
    notice_id = request.data.get("notice_id")

    if not notice_id:
        return Response({"error": "notice_id is required"}, status=status.HTTP_400_BAD_REQUEST)

    try:
        notice = Notice.objects.get(id=notice_id, is_active=True)
    except Notice.DoesNotExist:
        return Response({"error": "Notice not found or inactive"}, status=status.HTTP_404_NOT_FOUND)

    preferences = NotificationPreference.objects.filter(category="ALL")
    sent_to = []

    for pref in preferences:
        user = pref.user

        if pref.via_email:
            send_mail(
                subject=notice.title,
                message=notice.message,
                from_email="sem3mini@gmail.com",  # Change to your email
                recipient_list=[user.email],
                fail_silently=True,
            )

        if pref.via_sms:
            # Assuming user.profile.phone_number exists
            if hasattr(user, 'profile') and getattr(user.profile, 'phone_number', None):
                send_sms(user.profile.phone_number, f"{notice.title}: {notice.message}")
            else:
                print(f"No phone number found for {user.username}")


        if pref.via_whatsapp:
            print(f"WhatsApp notification for {user.username}: {notice.title} (WhatsApp not configured)")

        sent_to.append(user.username)

    return Response({"success": "Notice sent to all users based on preferences", "sent_to": sent_to}, status=status.HTTP_200_OK)

@api_view(['POST'])
def login_user(request):
    email = request.data.get('email')
    password = request.data.get('password')

    # authenticate using username or email
    user = authenticate(username=email, password=password)
    if not user:
        try:
            from django.contrib.auth.models import User
            user_obj = User.objects.get(email=email)
            user = authenticate(username=user_obj.username, password=password)
        except User.DoesNotExist:
            return Response({'success': False, 'message': 'Invalid email or password'}, status=400)

    if user:
        refresh = RefreshToken.for_user(user)
        return Response({
            'success': True,
            'message': 'Login successful',
            'token': str(refresh.access_token)
        })
    else:
        return Response({'success': False, 'message': 'Invalid credentials'}, status=400)
    
    
