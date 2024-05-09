import React, { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#FFFFFF");

  function handleColorChange(event) {
    setColor(event.target.value);
  }

  return (
    <div className="font-arial flex flex-col items-center">
      <h1 className="mt-12 mb-12 text-5xl">Color Picker</h1>
      <div
        className="w-80 h-80 flex justify-center items-center border-black border-4 mb-6 transition-all"
        style={{ backgroundColor: color }}
      >
        <p className="opacity-90 text-black">Selected Color: {color}</p>
      </div>
      <label className="text-2xl font-bold mb-3">Select a Color:</label>
      <input
        className="w-20 h-12 p-2 rounded-xl border-black border-4"
        type="color"
        value={color}
        onChange={handleColorChange}
      />
    </div>
  );
}
export default ColorPicker;
