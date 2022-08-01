import { useEffect, useState } from "react";
import ResizeText from "./ResizeText";
import TextComponent from "./TextComponent";

function App() {
  const [hide, setHide] = useState("true");
  const [resizeText, setResizetext] = useState("");

  const handleClick = () => {
    setHide(!hide);
  };

  const handleWindowResize = () => {
    const resolution = window.innerWidth;
    const isMobile = resolution <= 480;
    const isTablet = resolution >= 480 && resolution <= 720;

    // console.log(resolution);
    if (isMobile) {
      setResizetext("Mobile view");
    } else if (isTablet) {
      setResizetext("Tablet view");
    } else {
      setResizetext("Desktop view");
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize)
  }, []);

  return (
    <div className="App">
      <button onClick={handleClick}>
        {hide ? "Click me to hide text" : "Click me to show text"}
      </button>

      {hide && <TextComponent />}

      <hr />

      <ResizeText resizeText={resizeText}/>
    </div>
  );
}

export default App;
