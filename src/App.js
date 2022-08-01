import { useEffect, useState } from "react";
import ResizeText from "./ResizeText";
import TextComponent from "./TextComponent";
import axios from 'axios'

function App() {
  const [hide, setHide] = useState("true");
  const [resizeText, setResizetext] = useState("");
  const [data, setData] = useState('No data')

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

  const getData = async() => {
    const data = await axios.get('https://dummy.restapiexample.com/api/v1/employees')
    setData(data.data.data)
    console.log(data.data.data)
    setchartData = `data = {
      datasets = ${data.data.data}
    }`
  }

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

      <hr/>

      <button onClick={getData}>Make api request</button>
      <p>{JSON.stringify(data, null, 4)}</p>


    </div>
  );
}

export default App;
