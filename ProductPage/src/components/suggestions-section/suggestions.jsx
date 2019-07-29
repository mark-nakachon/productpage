import React, { Component } from "react";
import InfiniteCarousel from "react-leaf-carousel";

class Suggestions extends Component {
  state = {
    products: [
      {
        id: 1,
        title: "shopping Bag",
        price: 300,
        img:
          "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg"
      },
      {
        id: 2,
        title: "school Bag",
        price: 200,
        img:
          "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg"
      },
      {
        id: 3,
        title: "carry Bag",
        price: 400,
        img:
          "http://assets.myntassets.com/assets/images/7578935/2018/10/23/d7b740bc-e00e-4bec-97aa-65016f8ff2e71540289479612-Harpa-Women-Dresses-2331540289479465-1.jpg"
      },
      {
        id: 4,
        title: "book Bag",
        price: 340,
        img:
          "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg"
      },
      {
        id: 4,
        title: "book Bag",
        price: 340,
        img:
          "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg"
      },
      {
        id: 4,
        title: "book Bag",
        price: 340,
        img:
          "#"
      },
      {
        id: 4,
        title: "book Bag",
        price: 340,
        img:
          "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg"
      }
    ]
  };


  handleProductClick=(product)=>{
    console.log(product);
    alert('You clicked : '+product.title);
  }
  render() {
    return (
      <>
        <h4>You May Also Like: </h4>
        <br />
        <InfiniteCarousel
          breakpoints={[
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            }
          ]}
          dots={false}
          showSides={true}
          sidesOpacity={0.5}
          sideSize={0.1}
          slidesToScroll={1}
          slidesToShow={5}
          scrollOnDevice={true}
          slidesSpacing={20}
        >
          {this.state.products.map(product => {
            return (
              <div key={product.id} onClick={()=>this.handleProductClick(product)}>
                <div style={{ height: 200, background: "#333" }} />
                <p><strong>{product.title}</strong></p>
                <p>{product.price}</p>
              </div>
            );
          })}
        </InfiniteCarousel>
      </>
    );
  }
}

export default Suggestions;
