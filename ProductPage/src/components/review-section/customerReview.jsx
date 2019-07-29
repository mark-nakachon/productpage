import React, { Component } from "react";
import NewReview from "./newReview";
import AllReviews from "./allReviews";
import { Row, Col } from "antd";
import "antd/dist/antd.css";

class CustomerReviews extends Component {
 
  render() {
    const {allReviews}=this.props;
    return (
      <div className="container">
        <br />
        <Row>
          <Col lg={4} md={4} sm={16} xs={16}><strong><span style={{float:"left"}}>Customer Reviews</span></strong></Col>
          
          <Col lg={4} md={6} sm={8} xs={8}> <NewReview/></Col>
           
         
        </Row>
        <hr/>
        <br />
        <div lg={12} md={12} sm={24} xs={24}>
          <AllReviews customerReviews={allReviews} />
        </div>
      </div>
    );
  }
}

export default CustomerReviews;
