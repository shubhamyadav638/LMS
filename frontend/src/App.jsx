import Dashboard from "./components/pages/Dashboard";
import HeroSection from "./components/pages/HeroSection";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/pages/Signup";
import Signin from "./components/pages/Signin";
import Addcards from "./components/pages/Addcards";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import UpdateCard from "./components/pages/UpdateCard";
import AdminUsers from "./components/pages/AdminUsers";
import UpdateAdmin from "./components/pages/UpdateAdmin";
import Ecomdashboard from "./ecom/Ecomdashboard";
import Cart from "./ecom/Cart";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/addCourse" element={<Addcards />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/update/:id" element={<UpdateCard />} />
          <Route path="/admin" element={<AdminUsers />} />
          <Route path="/updateAdmin/:id" element={<UpdateAdmin />} />
          <Route path="/ecom" element={<Ecomdashboard />} />
          <Route path="/cart" element={<Cart />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
