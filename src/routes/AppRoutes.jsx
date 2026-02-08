import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import Bookings from "../pages/Bookings/Bookings";
import Gallery from "../pages/Gallery/Gallery";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/gallery" element={<Gallery />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
