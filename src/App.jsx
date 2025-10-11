import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import LoginPopup from "./components/LoginPopup/LoginPopup";

// Import all your page components
import Notice from "./pages/Notice/Notice";
import Grievance from "./pages/Grievance/Grievance";
import Links from "./pages/Links/Links";
import Syllabus from "./pages/Syllabus/Syllabus";
import Library from "./pages/Library/Library";
import Admission from "./pages/Admission/Admission";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/grievance" element={<Grievance />} />
        <Route path="/links" element={<Links />} />
        <Route path="/syllabus" element={<Syllabus />} />
        <Route path="/library" element={<Library />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginPopup />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;