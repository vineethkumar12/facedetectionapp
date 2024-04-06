import "./App.css";

import "tachyons";
import { Rank } from "./components/Rank/Rank";
import "./App.css";
import { React, useState } from "react";
import Particle from "./components/Particle.jsx";
//import Clarifai from 'clarifai'

import { Signin } from "./components/Signin/Signin";
import { Navigation } from "./components/Navigation/Navigation";
import { Register } from "./components/Register/Register";

function App() {
  const [input, setinput] = useState("");

  const [route, setroute] = useState("signin");
  const [isSignedin, setisSignedin] = useState(false);
  const [user, setuser] = useState({
    id: "",
    password: "",
    email: "",
    name: "",
    entries: 0,
    joined: "",
  });

  const userdata = (result) => {
    setuser({
      id: result.id,
      password: result.password,
      email: result.email,
      name: result.name,
      entries: result.entries,
      joined: result.joined,
    });
  };

  onchange = (e) => {
    e.preventDefault();
    setinput(e.target.value);
  };

  const change = (route1) => {
    if (route1 === "home") setisSignedin(true);
    else if (route1 === "signin") {
      setisSignedin(false);
    }
    setroute(route1);
  };

  return (
    <div className="App">
      <Particle />
      <Navigation change={change} isSignedin={isSignedin} />
      {route === "home" ? (
        <div>
          <Rank name={user.name} entries={user.entries} />
        </div>
      ) : route === "signin" ? (
        <Signin change={change} userdata={userdata} />
      ) : (
        <Register change={change} userdata={userdata} />
      )}
    </div>
  );
}

export default App;
