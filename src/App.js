import { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "./style";
import Slider from "./components/Slider";
import SliderData from "./data/SliderData";
import MenuData from "./data/MenuData";
import Dropdown from "./components/Dropdown";
import Information from "./components/Information";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Router>
        <GlobalStyle />
        <Navbar menuData={MenuData} toggle={toggle} />
        <Dropdown menuData={MenuData} isOpen={isOpen} toggle={toggle} />
        <Slider slides={SliderData} />
      </Router>
    </>
  );
}

export default App;
