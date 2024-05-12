function ColorPicker({
  textColor,
  setTextColor,
  bgColor,
  setBgColor,
  buttonColor,
  setButtonColor,
  buttonTextColor,
  setButtonTextColor,
  bgButtonTextColor,
  setBgButtonTextColor,
  textButtonTextColor,
  setTextButtonTextColor,
}) {
  function handleTextColorChange(event) {
    invertColor(event.target.value, setTextButtonTextColor);
    setTextColor(event.target.value);
  }
  function handleBgColorChange(event) {
    invertColor(event.target.value, setBgButtonTextColor);
    setBgColor(event.target.value);
  }
  function handleButtonColorChange(event) {
    invertColor(event.target.value, setButtonTextColor);
    setButtonColor(event.target.value);
  }

  function invertColor(hex, func) {
    if (hex.indexOf("#") === 0) {
      hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
      throw new Error("Invalid HEX color.");
    }
    let r = parseInt(hex.slice(0, 2), 16),
      g = parseInt(hex.slice(2, 4), 16),
      b = parseInt(hex.slice(4, 6), 16);
    let inverted =
      r * 0.299 + g * 0.587 + b * 0.114 > 186 ? "#000000" : "#FFFFFF";
    console.log(inverted);
    func(inverted);
  }

  return (
    <div className="font-arial fixed flex items-center justify-start bottom-8 left-8 right-8 bg-white border-black border-solid border shadow-slate-400 rounded-xl">
      <label
        className="font-Poppins my-9 ml-8 py-3 px-5 rounded-xl text-white bg-blend-difference"
        style={{ backgroundColor: textColor, color: buttonTextColor }}
      >
        Text Color
        <input
          className="w-10 h-10 rounded-full hidden"
          type="color"
          id="buttons"
          value={textColor}
          onChange={handleTextColorChange}
        />
      </label>
      <label
        className="font-Poppins my-9 ml-8 py-3 px-5 rounded-xl text-white bg-blend-difference"
        style={{ backgroundColor: bgColor, color: bgButtonTextColor }}
      >
        Background Color
        <input
          className="w-10 h-10 rounded-full hidden"
          type="color"
          id="buttons"
          value={bgColor}
          onChange={handleBgColorChange}
        />
      </label>
      <label
        className="font-Poppins my-9 ml-8 py-3 px-5 rounded-xl text-white bg-blend-difference"
        style={{ backgroundColor: buttonColor, color: textButtonTextColor }}
      >
        Button Color
        <input
          className="w-10 h-10 rounded-full hidden"
          type="color"
          id="buttons"
          value={buttonColor}
          onChange={handleButtonColorChange}
        />
      </label>
    </div>
  );
}
export default ColorPicker;
