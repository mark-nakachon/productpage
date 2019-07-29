import React from "react";
import {Col} from 'antd';
const ColorPicker = props => {
  const { selectedColor,colors, onColorClick } = props;
 
  return colors.map(color => {
    if (color ===selectedColor)
      return (
        <Col
          onClick={() => onColorClick(color)}
          span={7}
          key={color.id}
          style={{ height: 30,  margin: "1%", background: color.hex, border: '3px solid black' }}
        />
      )
    else
      return (
        <Col
          onClick={() => onColorClick(color)}
         span={7}
          key={color.id}
          style={{ height: 30,  paddingleft: 0,  margin: "1%", background: color.hex }}
        />
      );
  });
};

export default ColorPicker;
