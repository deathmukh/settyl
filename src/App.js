import { useEffect, useState } from "react";
import ResizeText from "./ResizeText";
import TextComponent from "./TextComponent";
import axios from "axios";
import { Line, LineChart, XAxis, YAxis } from "recharts";

function App() {
  const [hide, setHide] = useState("true");
  const [resizeText, setResizetext] = useState("");
  const [apidata, setApiData] = useState("No data");

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

  const getData = async () => {
    const data = await axios.get(
      "https://dummy.restapiexample.com/api/v1/employees"
    );
    setApiData(data.data.data);
  };

  const handleBackendRequest = async () => {
    const data = await axios.post("http://localhost:8000/save-mongo", apidata);
    console.log(data.status);
  };

  useEffect(() => {
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
  }, []);

  return (
    <div className="App">
      <button onClick={handleClick}>
        {hide ? "Click me to hide text" : "Click me to show text"}
      </button>

      {hide && <TextComponent />}

      <hr />

      <ResizeText resizeText={resizeText} />

      <hr />

      <button onClick={getData}>Make api request</button>
      {/* <p>{JSON.stringify(apidata, null, 4)}</p> */}

      {apidata !== "No data" && (

        <div>
          <p>Data Fetch Successful</p>

        <LineChart width={1080} height={400} data={apidata}>
          <XAxis dataKey="id" />
          <YAxis dataKey="employee_salary" />
          <Line type="monotone" dataKey="employee_salary" stroke="#8884d8" />
        </LineChart>

        </div>
      )}

      <button onClick={handleBackendRequest}>Save to Mongo</button>
    </div>
  );
}

export default App;
