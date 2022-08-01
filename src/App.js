import { useState } from "react";
import TextComponent from "./TextComponent";

function App() {
  const [hide, setHide] = useState("true");

  const handleClick = () => {
    setHide(!hide);
  };

  return (
    <div className="App">
      {hide && <TextComponent/>}
        {/* <div>Hello</div> */}
      
      <button onClick={handleClick}>{hide ? 'Click me to hide text' : 'Click me to show text'}</button>
    </div>
  );
}

export default App;
