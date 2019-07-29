import React, { Component } from "react";
import NewReview from "./newReview";
import AllReviews from "./allReviews";
import { Icon, Row, Col } from "antd";
import "antd/dist/antd.css";

class CustomerReviews extends Component {
 
  render() {
    const {allReviews}=this.props;
    return (
      <div className="container">
        <br />
        <Row>
          <Col span={4}><strong>Customer Reviews</strong></Col>
          
          <Col span={4} offset={16}> <NewReview /></Col>
           
         
        </Row>
        <hr/>
        <br />
        <div span={12}>
          <AllReviews customerReviews={allReviews} />
        </div>
      </div>
    );
  }
}

export default CustomerReviews;
