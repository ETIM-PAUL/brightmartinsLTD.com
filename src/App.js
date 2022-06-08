import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Index from "./FrontPage";
import AboutUs from "./About-Us";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import Projects from "./Projects";
<div className="App">
  <TawkMessengerReact propertyId="property_id" widgetId="default" />
</div>;
function App() {
  return (
    <>
      <ToastContainer position="top-center" autoclose={3000} draggable />
      <Router>
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/contact-us" element={<AboutUs />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
