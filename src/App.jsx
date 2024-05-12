import React, { useState } from "react";
import ColorPicker from "./ColorPicker.jsx";
import LandingPage from "./LandingPage.jsx";

function App() {
  const [textColor, setTextColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#FFFFFF");
  const [buttonColor, setButtonColor] = useState("#2066DB");
  const [buttonTextColor, setButtonTextColor] = useState("#FFFFFF");
  const [bgButtonTextColor, setBgButtonTextColor] = useState("#000000");
  const [textButtonTextColor, setTextButtonTextColor] = useState("#FFFFFF");

  return (
    <div>
      <ColorPicker
        textColor={textColor}
        setTextColor={setTextColor}
        bgColor={bgColor}
        setBgColor={setBgColor}
        buttonColor={buttonColor}
        setButtonColor={setButtonColor}
        buttonTextColor={buttonTextColor}
        setButtonTextColor={setButtonTextColor}
        bgButtonTextColor={bgButtonTextColor}
        setBgButtonTextColor={setBgButtonTextColor}
        textButtonTextColor={textButtonTextColor}
        setTextButtonTextColor={setTextButtonTextColor}
      />
      <LandingPage
        textColor={textColor}
        bgColor={bgColor}
        buttonColor={buttonColor}
        buttonTextColor={buttonTextColor}
      />
    </div>
  );
}

export default App;
