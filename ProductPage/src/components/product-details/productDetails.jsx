import React from "react";
import { Tabs } from 'antd';
import { Collapse } from 'antd';
import "./SCSS/productDetails.scss";
const Panel = Collapse.Panel;

const { TabPane } = Tabs;

const ProductDetails = (props) => {
const {description,specification,returnPolicy}=props.productDetails;

  return ( 
    <>
    <Tabs className="tabs" type="card">
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

  <Collapse className="tabs-mobile" >
    <Panel header="Description" key="1">
      <p>{description}</p>
    </Panel>
    <Panel header="Specification" key="2">
    Material: <p>{specification.material}</p>
       Length: <p>{specification.length}</p>
    </Panel>
    <Panel header="Return & Refund" key="3">
      <p>{returnPolicy}</p>
    </Panel>
  </Collapse>
  </>
   );
}
 
export default ProductDetails;

