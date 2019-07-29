import React, { Component } from "react";
import { Row, Col } from "antd";
import "./SCSS/productImage.scss";
import { ContextConsumer } from "../../Context";
class ProductImage extends Component {

  render() {
    const {productImages}=this.props;

    return (
        <ContextConsumer>
                {(value)=>{
                    console.log(value);
                    return (
                            <Row style={{ position: "sticky", top: 0 }} >
                    <Col lg={4} md={4} sm={24} xs={24} className="image-tiles">
                    {productImages.map(image => {
                        return (
                        <div className="tile" key={image.id}>

                            <div
                                onMouseOver={() => value.handleImageHover(image)}
                                style={{ height: 80, width: 50, background: image.img}}
                            />
                            <br />

                        </div>
                        );
                    })}
                    </Col>
                    <Col offset={1} xs={19} sm={19} md={19} lg={19} className="selected-image">
                        {
                            (value.currentImage!=null)?(<div
                        style={{ height: 400, background: value.currentImage.img }}
                    />):(<div
                        style={{ height: 400, background: productImages[0].img }}
                    />)
                        }
                    </Col>

                </Row>
                    )
                }}

        </ContextConsumer>

    );
  }
}

export default ProductImage;
