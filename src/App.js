import React from "react";
import Navbar from "./Components/Navbara/navbar";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import { useState } from "react";
import "./App.css";
import Mainpage from "./Components/mainpage/Mainpage";
import Single from "./Components/singledata/Single";
const App = () => {
  const [changebg, setchangebg] = useState(false);

  const changebackg = () => setchangebg(!changebg);
  return (
    <div className={changebg ? "app" : "appbg"}>
      <Navbar dark={changebg} changebackg={changebackg} />

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element=<Mainpage/> />
          <Route path="/country/:id" element=<Single/> />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
