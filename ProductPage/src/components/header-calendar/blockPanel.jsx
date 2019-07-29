import React from "react";
import {Button } from "antd";
import "antd/dist/antd.css";

const TimePanel = props => {
  const { blocks, handleBlockClick, selectedBlock } = props;

  const selected = {
    backgroundColor: "#009900",
    color: "white"
  };
  const notSelected = {
    margin: 5,
    color: '#009900'
  };

  

  return blocks.map((block, i) => {
    if (block < 12)
      return (
        <Button
          key={i}
          style={block === selectedBlock ? selected : notSelected}
          type="danger"
          onClick={() => handleBlockClick(block)}
        >
          {block} AM
        </Button>
      );
    else if (block >= 12)
      return (
        <Button
          key={i}
          style={block === selectedBlock ? selected : notSelected}
          type="danger"
          onClick={() => handleBlockClick(block)}
        >
          {block - 12} PM
        </Button>
      );
      
  });
};

export default TimePanel;
