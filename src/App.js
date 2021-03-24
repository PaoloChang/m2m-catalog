import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "./style";
import Slider from "./components/Slider";
import SliderData from "./data/SliderData";

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Navbar />
        <Slider slides={SliderData} />
      </Router>
    </>
  );
}

export default App;
