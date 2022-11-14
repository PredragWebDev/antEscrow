import React, { useState } from "react";

import ColorPicker_ from "material-ui-color-picker";

const ColorPicker = () => {
   const [color, setColor] = useState("");

   return (
      <ColorPicker_
         name="color"
         defaultValue="Color"
         value={color}
         onChange={(color) => setColor(color)}
      />
   );
};

export default ColorPicker;
