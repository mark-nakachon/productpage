import React, { Component } from "react";
import { InputNumber } from "antd";

import InputDate from "../header-calendar/inputDate";

import ColorPicker from "../../common/colorPicker";
import SizePicker from "../../common/sizePicker";
// import OrderForm from "../common/orderForm";
import { Icon, Row, Col, Button } from "antd";
import "./SCSS/orderSection.scss";
import {ContextConsumer} from '../../Context';
let rentInfo;

class ProductOrder extends Component {
  state = {
    selectedColor: null,
    selectedSize: null,
    show: false,
    pincode: null,
    quantity: null
  };

  handleColorClick = color => {
    this.setState({ selectedColor: color });
    console.log(color);
  };

  handleRentInfo = info => {
    // this.setState({rentInfo});
    rentInfo = info;
    console.log(rentInfo);
  };
  handlePincodeChange = pincode => {
    // console.log(pincode);

    this.setState({ pincode });
    console.log(this.state.pincode);
  };

  handleQtyChange = qty => {
    this.setState({ quantity: qty });
  };
  handleSizeClick = size => {
    this.setState({ selectedSize: size });
    console.log(size);
  };

  handleSubmit=(e)=>{
    e.preventDefault();
    const {selectedColor,selectedSize,quantity,pincode}=this.state;

    //use a good validator here before submitting the form
    if(rentInfo&&quantity!==0&&selectedColor&&selectedSize)
    {
      console.log("succesfully submitted");
      console.log(selectedColor,selectedSize,quantity,pincode,rentInfo);
    }
    else{
      alert("You haven't selected");
      console.log()
    }
  }

  render() {
    return(
    <ContextConsumer>
    {
        (value)=>{
            const { selectedSize } = value;
            const { customerReviews } = this.props;
            const { product } = this.props.details;

            let avgRating = 0;
            customerReviews.forEach(review => {
            avgRating += review.rating;
            });

            avgRating = avgRating / customerReviews.length;

             return (
                <div className="container">
                    <div className="top">
                    <h3>{product.title}</h3>
                    <p className="product-description">{product.description.slice(0, 200)}...</p>
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
                     {value.selectedSize!==null ? (
                         <h5>{'Rs  ' + value.selectedSize.price + '/Day'}</h5>
                     ):(<h5>{'Rs  ' + product.price + '/Day'}</h5>)
                     }
                    <p>Deposit 500$ in advance </p>
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

                            style={{ width: "100%" }}
                            onChange={this.handlePincodeChange}
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
                            onSizeClick={value.handleSizeClick}
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
                            selectedColor={value.selectedColor}
                            onColorClick={value.handleColorClick}
                            />
                        </Col>
                        <Col span={2}>Qty: </Col>
                        <Col span={6}>
                            <InputNumber
                            min={1}
                            max={15}
                            defaultValue={0}
                            onChange={this.handleQtyChange}
                            />
                        </Col>
                        </Row>
                        <hr />

                        <Row>
                        <Col span={24}>
                            <Row style={{ marginBottom: 3 }}>Delivery And Return</Row>
                            <Row>
                            <InputDate handleRentInfo={this.handleRentInfo} />
                            </Row>
                        </Col>
                        </Row>
                        <br />
                        <Row className="order-buttons-desktop">
                        <Col span={10}>
                            <Button style={{ width: "100%" }} type="danger" onClick={this.handleSubmit}>
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
    </ContextConsumer>
    )

  }
}

export default ProductOrder;
