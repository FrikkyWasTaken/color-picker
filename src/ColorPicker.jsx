import React, { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#FFFFFF");

  function handleColorChange(event) {
    setColor(event.target.value);
  }

  return (
    <div className="font-arial fixed flex flex-col items-center bottom-8 left-8 right-8 bg-slate-300 rounded-xl">
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
