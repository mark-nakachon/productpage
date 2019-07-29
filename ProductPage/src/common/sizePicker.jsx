import React from "react";
import { Button } from 'antd';
const SizePicker = props => {
  const { sizes, onSizeClick, selectedSize} = props;
  return sizes.map(size => {

    if(size===selectedSize)
    return(
      <Button key={size.id} onClick={()=>onSizeClick(size)} type="danger" style={{backgroundColor: '#ff4d4f', color: 'white'}}>{size.tag}</Button>
    )
    else
    return (
        
        <Button key={size.id} onClick={()=>onSizeClick(size)} type="danger"> {size.tag}</Button>
     
    );
  });
};

export default SizePicker;
