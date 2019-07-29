import React, { Component } from "react";
import { InputNumber } from "antd";
import { DatePicker } from "antd";
import moment from "moment";

import ColorPicker from "../common/colorPicker";
import SizePicker from "../common/sizePicker";
// import OrderForm from "../common/orderForm";
import { Icon, Row, Col, Button } from "antd";
const dateFormat = "YYYY/MM/DD";
const monthFormat = "YYYY/MM";

const { MonthPicker, RangePicker } = DatePicker;
class ProductOrder extends Component {
  state = {
    selectedColor: null,
    selectedSize: null,
  };

  handleColorClick = color => {
    this.setState({ selectedColor: color });
    console.log(color);
  };

  handleSizeClick = size => {
    this.setState({ selectedSize: size });
    console.log(size);
  };
  render() {
    const {selectedSize}=this.state;
    const {customerReviews } = this.props;
    const {product}=this.props.details;

    let avgRating = 0;
    customerReviews.forEach(review => {
      avgRating += review.rating;
    });

    avgRating = avgRating / customerReviews.length;

    return (
      <div className="container">
        <div className="top">
          <h3>{product.title}</h3>
          <p>{product.description.slice(0, 200)}...</p>
          <i
            style={{ color: "gold", display: "inline" }}
            className="fa fa-star"
            aria-hidden="true"
          />
          <p style={{ display: "inline" }}>
            {avgRating} ({customerReviews.length} Reviews)
          </p>
        </div>
        <br />
        <div className="mid">
          <h5>${product.price}/ Day</h5>
          <p>Deposit 500$ in advance</p>
        </div>
        <br />
        <div>
          <div>
            <Row>
              <Col span={2}>
                <i
                  className="fa fa-map-marker fa-2x"
                  style={{ paddingBottom: "10px" }}
                />
              </Col>
              <Col span={8}>
                <InputNumber
                  min={1}
                  max={999999}
                  defaultValue={3}
                  style={{ width: "100%" }}
                />
              </Col>
              <Col span={12} offset={1}>
                <h6>Enter Pincode to estimate delivery charge</h6>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col span={4}>Size: </Col>
              <Col span={20}>
                <SizePicker
                  sizes={product.sizes}
                  onSizeClick={this.handleSizeClick}
                  selectedSize={selectedSize}
                />
              </Col>
            </Row>
            <br />
            <Row>
              <Col span={4}>Color: </Col>
              <Col span={8}>
                {" "}
                <ColorPicker
                  colors={product.colors}
                  selectedColor={this.state.selectedColor}
                  onColorClick={this.handleColorClick}
                />
              </Col>
              <Col span={2}>Qty: </Col>
              <Col span={6}>
                <InputNumber min={1} max={15} defaultValue={1} />
              </Col>
            </Row>
            <hr />

            <Row>
              <Col span={14}>
                <Row style={{ marginBottom: 3 }}>Delivery And Return</Row>
                <Row>
                  <RangePicker
                    defaultValue={[
                      moment("2015/01/01", dateFormat),
                      moment("2015/01/01", dateFormat)
                    ]}
                    format={dateFormat}
                  />
                </Row>
              </Col>

              <Col span={9} offset={1}>
                <Row style={{ marginBottom: 3 }}>Duration:</Row>
                <Row>
                  <InputNumber min={1} max={15} defaultValue={1} />
                </Row>
              </Col>
            </Row>
            <br />
            <Row>
              <Col span={10}>
                <Button style={{ width: "100%" }} type="danger">
                  Order
                </Button>
              </Col>
              <Col span={10} offset={1}>
                <Button type="danger">Add to Cart</Button>
              </Col>
              <Col span={2} offset={1}>
                <Icon type="heart" theme="filled" />
              </Col>
            </Row>
            <hr />
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default ProductOrder;
