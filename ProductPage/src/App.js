import React from "react";

import CustomerReview from "./components/review-section/customerReview";
import Suggestions from "./components/suggestions-section/suggestions";
import ProductDetails from "./components/product-details/productDetails";
import ProductImage from "./components/product-image/productImage";
import OrderSection from "./components/order-section/orderSection";
import Coupon from "./components/coupon/coupon";
import { Breadcrumb ,Row, Col,Button,Icon } from 'antd';
import "./components/order-section/SCSS/orderSection.scss";
import { ContextConsumer } from "./Context";
let productDetails = {
  description:
    "This is a heat proof material made with the best material.Product Descp..Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.This is a heat proof material made with the best material.Product Descp..",
  specification: {
    material: "Nylon",
    length: 5
  },
  returnPolicy: "Return & Refund policy"
};

let customerReviews = [
  {
    id: 1,
    name: "Ankur",
    title: "Good product",
    rating: 4,
    description:
      " Sed pretium confefgrtgg sgregregreg. Pellentesque non rutrum erat.",
    liked: false
  },
  {
    id: 2,
    name: "Shivani",
    title: "Okay Okay product",
    rating: 2,
    description:
      "Lorem ipsum nisi. Nulla non blandit magna. Sed urna ipsum, he turpis id neque feugiat varius. Pellentesque non rutrum erat.",
    liked: false
  },
  {
    id: 3,
    name: "Abhishoy",
    title: "Excellent Service",
    rating: 3,
    description: "The prowas done very quickly. thanks vc",
    liked: false
  }
];

let details = {
  product: {
    title: "Men's wear",
    price: 250,
    description:
      "This is a heat proof material made with the best material.Product Descp..Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.This is a heat proof material made with the best material.Product Descp..",
    colors: [
      {
        id: 1,
        hex: "#879",
        img:"#879"
      },
      {
        id: 2,
        hex: "#987",
        img:"#987"
      },
      {
        id: 3,
        hex: "#567",
        img:"#567"
      }
    ],
    sizes: [
      {
        id: 1,
        tag: "S",
        price:"200"
      },
      {
        id: 2,
        tag: "M",
        price:"312"
      },
      {
        id: 3,
        tag: "L",
        price:"400"
      }
    ]
  }
};

/*let productImages=[
  {
    id: 1,
    img: "#111",
    title: "front-view"
  },
  {
    id: 2,
    img: "#921",
    title: "back-view"
  },
  {
    id: 3,
    img: "#333",
    title: "side-view"
  },
  {
    id: 4,
    img: "#834",
    title: "up-view"
  }
];*/

function App() {
  return (
    <ContextConsumer>
        {
        (value)=>{
    console.log(value);
    return(
        <>
    <div className="App container">
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">Application Center</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">Application List</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>An Application</Breadcrumb.Item>
      </Breadcrumb>

      <br />
      <Row type="flex" justify="center">
        <Col class="product-image" md={10} sm={24}  xs={24} order={1}>
          <ProductImage productImages={value.productImages} />
        </Col>
        <Col offset={1} md={13} sm={24} xs={24} order={2}>
          <Row type="flex" justify="center">
            <Col md={16} sm={24}  order={1}>
              <OrderSection
                details={details}
                customerReviews={customerReviews}
              />
            </Col>
            <Col offset={1} md={7}  sm={24} xs={24} order={3} >
              <Coupon />
            </Col>
          </Row>
          <Row justify={"center"}>
            <ProductDetails productDetails={productDetails} />
          </Row>
          </Col>
        </Row>

      <section>
        <CustomerReview allReviews={customerReviews}/>
      </section>
      <section>
        <Suggestions />
      </section>

      <style>
        {`
          .product-image{
            style={{ position: "sticky", top: 0 }}
          }
         `
        }
      </style>
    </div>
    <Row className="order-buttons-mobile" style={{position: "sticky", bottom: 0, background: "rgb(10,10,10,0.6)",padding: "2vw 0vw 1vw 0vw"}}>
              <Col offset={1} span={10}>
                <Button style={{width: "100%"}} type="danger">
                  Order
                </Button>
              </Col>
              <Col span={10} offset={1}>
                <Button style={{width: "100%"}} type="danger">Add to Cart</Button>
              </Col>

            </Row>
    </>)
        }
        }
</ContextConsumer>
  );

}

export default App;
