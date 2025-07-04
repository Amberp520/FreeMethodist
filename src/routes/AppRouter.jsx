import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Ministries from "../pages/Ministries";
import MisistryDetails from "../components/ministries/MisistryDetails";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/ministries" element={<Ministries />} />
          <Route path="/ministries/:title" element={<MisistryDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
