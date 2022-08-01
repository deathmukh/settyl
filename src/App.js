import { useState } from "react";
import TextComponent from "./TextComponent";

function App() {
  const [hide, setHide] = useState("true");

  const handleClick = () => {
    setHide(!hide);
  };

  return (
    <div className="App">
      <button onClick={handleClick}>
        {hide ? "Click me to hide text" : "Click me to show text"}
      </button>

      {hide && <TextComponent />}
    </div>
  );
}

export default App;
