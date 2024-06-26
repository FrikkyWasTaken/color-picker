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
    <div className="fixed flex justify-center w-full h-16 bottom-3 left-0">
      <div className="font-arial flex items-center justify-center bg-white border-black border-solid border shadow-slate-400 rounded-xl px-4">
        <label
          className="font-Poppins py-3 px-5 rounded-xl shadow-slate-300 shadow-lg"
          style={{ backgroundColor: textColor, color: textButtonTextColor }}
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
          className="font-Poppins ml-8 py-3 px-5 rounded-xl shadow-slate-300 shadow-lg"
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
          className="font-Poppins ml-8 py-3 px-5 rounded-xl shadow-slate-300 shadow-lg"
          style={{ backgroundColor: buttonColor, color: buttonTextColor }}
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
    </div>
  );
}
export default ColorPicker;
