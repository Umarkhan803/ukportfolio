import SideBar from "../components/SideBar";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <SideBar />
      </BrowserRouter>
    </>
  );
}

export default App;
