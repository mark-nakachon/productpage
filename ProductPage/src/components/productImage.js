import React, { Component } from "react";
import { Icon, Row, Col } from "antd";
import {ContextConsumer} from '.././Context';
class ProductImage extends Component {

  handleImageHover = image => {
    this.setState({ currentImage: image });
  };
  render() {
    return(
    <ContextConsumer>
        {
            (value)=>{
                const {productImages}=this.props;
                console.log(value);
                console.log('helllll')
                  return (
                        <Row style={{ position: "sticky", top: 0 }}>
                            <Col span={4}>
                            {productImages.map(image => {
                                return (
                                <div key={image.id}>
                                    <div>
                                    <div
                                        onMouseOver={() => valu.handleImageHover(image)}
                                        style={{ height: 80, width: 50, background: image.img }}
                                    />
                                    <br />
                                    </div>
                                </div>
                                );
                            })}
                            </Col>
                            <Col span={20}>
                            <div
                                style={{ height: 400, background: value.currentImage.img }}
                            />
                            </Col>
                        </Row>
            );
            }
        }
    </ContextConsumer>
    );
  }
}

export default ProductImage;
