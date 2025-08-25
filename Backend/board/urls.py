# # from django.contrib import admin
# # from django.urls import path
# # from board import views  # your app where you handle notices

# # urlpatterns = [
# #     path('admin/', admin.site.urls),
# #     path('notices/', views.notice_list, name='notice_list'),
# # ]

# from django.contrib import admin
# from django.urls import path
# from board import views

# urlpatterns = [
#     path('admin/', admin.site.urls),
    
#     # HTML page
#     path('notices/', views.notice_list, name='notice_list'),

#     # API endpoints
#     path('api/notices/', views.get_notices, name='get_notices'),
#     path('api/notices/create/', views.create_notice, name='create_notice'),
# ]

from django.urls import path
from . import views

urlpatterns = [
    # Web page (if needed for frontend HTML views)
    path('notices/', views.notice_list, name='notice_list'),

    # API endpoints
    path('notices-list/', views.get_notices, name='get_notices'),
    path('notices-create/', views.create_notice, name='create_notice'),
]