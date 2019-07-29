import React, { Component } from "react";
import { Tabs } from 'antd';

const { TabPane } = Tabs;

const ProductDetails = (props) => {
const {description,specification,returnPolicy}=props.productDetails;

  return ( 
    <Tabs  type="card">
    <TabPane tab="Description" key="1">
      <p>{description}</p>
    </TabPane>
    <TabPane tab="Specification" key="2">
       Material: <p>{specification.material}</p>
       Length: <p>{specification.length}</p>
    </TabPane>
    <TabPane tab="Return & Refund" key="3">
      <p>{returnPolicy}</p>
    </TabPane>
  </Tabs>
   );
}
 
export default ProductDetails;

