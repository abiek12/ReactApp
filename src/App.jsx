import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Help from "./pages/Help";
import Download from "./pages/Download";
import Premium from "./pages/Premium";
import SignUp from "./pages/SignUp";



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Help" element={<Help/>}/>
        <Route path="/Download" element={<Download/>}/>
        <Route path="/Premium" element={<Premium/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
      </Routes>
    </>
  );
}

export default App;
