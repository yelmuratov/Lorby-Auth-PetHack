import Register from "./components/register.js";
import { useSelector } from "react-redux";
import {Route,Routes} from "react-router-dom"
import Login from "./components/login.js";
import Succes from "./components/succes.js";

function App() {
  const state = useSelector(state => state);
  return (
    <div className="main">
      <div className="container flex items-center justify-center lg:flex-row md:flex-row flex-col">
        <div id="image_container">
          <img src="assets/Photo background.png"/>
        </div>  
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
