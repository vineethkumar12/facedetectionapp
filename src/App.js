import "./App.css";
import { Logo } from "./components/Logo/Logo";

import "tachyons";
import { ImageLinkForm } from "./components/ImageLinkForm/ImageLinkForm";
import { Rank } from "./components/Rank/Rank";
import "./App.css";
import { React, useState } from "react";
import Particle from "./components/Particle.jsx";
//import Clarifai from 'clarifai'

import { Face } from "./components/FaceRecognotion/Face";
import { Signin } from "./components/Signin/Signin";
import { Navigation } from "./components/Navigation/Navigation";
import { Register } from "./components/Register/Register";

function App() {
  const [imageurl, setimageurl] = useState("");
  const [input, setinput] = useState("");

  const [box, setbox] = useState({});
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
  console.log(user.id, user.name);

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

  const CalculateFaceLoaction = (data) => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("input-image");
    const width = Number(image.width);
    const height = Number(image.height);

    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };
  const displayFaceBox = (box1) => {
    setbox(box1);
  };

  const change = (route1) => {
    if (route1 === "home") setisSignedin(true);
    else if (route1 === "signin") {
      setisSignedin(false);
      setimageurl("");
    }
    setroute(route1);
  };

  const onSubmit = () => {
    if (input.length > 25) setimageurl(input);
    else alert("please place the image url in input");

    ////////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app and model IDs, and the URL
    // of the image we want as an input. Change these strings to run your own example.
    ////////////////////////////////////////////////////////////////////////////////////

    const USER_ID = "vineeth";
    // Your PAT (Personal Access Token) can be found in the portal under Authentification
    const PAT = "1e4bf989e24b4ac8997fec8fd7208c20";
    const APP_ID = "16d3452733db47af918e869db7c66837";
    const MODEL_ID = "face-detection";
    //const MODEL_VERSION_ID = '45fb9a671625463fa646c3523a3087d5';
    // Change this to whatever image URL you want to process
    //const IMAGE_URL = 'https://samples.clarifai.com/metro-north.jpg';

    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////

    const raw = JSON.stringify({
      inputs: [
        {
          data: {
            image: {
              url: input,
            },
          },
        },
      ],
    });

    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Key " + PAT,
      },
      body: raw,
    };

    // NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
    // https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
    // this will default to the latest version_id

    fetch(
      "https://api.clarifai.com/v2/users/" +
        USER_ID +
        "/apps/" +
        APP_ID +
        "/models/" +
        MODEL_ID +
        "/outputs",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        // if (result)
        //   fetch("https://vineethkumar12.github.io/facedetectionapp/image", {
        //     method: "put",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify({
        //       id: user.id,
        //     }),
        //   })
        //     .then((response) => response.json())
        //     .then((result) => {
        //       setuser(Object.assign(user, { entries: result.entries }));
        //     });
        displayFaceBox(CalculateFaceLoaction(result));
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="App">
      <Particle />
      <Navigation change={change} isSignedin={isSignedin} />
      {route === "home" ? (
        <div>
          <Logo />
          <Rank name={user.name} entries={user.entries} />
          <ImageLinkForm
            onchange={onchange}
            input1={input}
            onbuttonclick={onSubmit}
            setinput={setinput}
          />
          <Face box={box} image={imageurl} />
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
