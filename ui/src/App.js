import LandingPage from "./components/LandingPage.jsx"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { Loginpage } from "./components/authpage/LoginPage.js";
import { Createuser } from "./components/authpage/Createuserpage.js";
import { AddBlog } from "./components/addBlog.js";

function App() {
  return (
    <div className="App">  
      <BrowserRouter>
          <div>
            <Routes className=""> 
              <Route path="/" element={<LandingPage/>} />
              <Route path="/login" element={<Loginpage/>} /> 
              <Route path="/singup" element={<Createuser/>} />
              <Route path="/blogcreat" element={<AddBlog/>} />
            </Routes>
          </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
