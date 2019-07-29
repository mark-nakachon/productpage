import React, { Component } from "react";
import { Icon, Row, Col } from "antd";
import "antd/dist/antd.css";

class AllReviews extends Component {
 

  displayReview = review => {
   

    return (
      <div key={review.id}>
        <Row>
          <Col span={4}>
            <strong>{review.name}</strong>

            <Row>
              <label>{review.rating}</label>
              <Icon type="star" style={{ color: "gold" }} theme="filled" />
            </Row>
          </Col>
          <Col span={17}>
            <h5>{review.title}</h5>
            {review.description}
          </Col>

          <Col span={3}>
            <Icon type="like" style={{margin: '5%'}} theme="filled"/>
            <Icon type="dislike"style={{margin: '5%'}} theme="filled"/>
          </Col>
        </Row>
        <hr/>
        

      </div>
    );
  };

  render() {
    const { customerReviews } = this.props;
    return (
      <div>
        {customerReviews.map(review => {
          return this.displayReview(review);
        })}
      </div>
    );
  }
}

export default AllReviews;
