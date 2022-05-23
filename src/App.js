import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Mission from "./pages/mission/Mission";
import Career from "./pages/career/Career";
import Contact from "./pages/contact/Contact";
import People from "./pages/people/People";
import ErrorPage from "./pages/error/ErrorPage";
import Kop from "./components/Kop";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/mission" element={<Mission />}>
          <Route path=":pikaid" element={<Kop />} />
        </Route>
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/people" element={<People />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
