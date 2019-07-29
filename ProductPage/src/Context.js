import React, { Component } from 'react';

const myContext = React.createContext();

class ContextProvider extends Component {
    constructor(props){
        super(props);
        this.state = {
            productImages:[
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
            ],
            selectedColor: null,
            selectedSize: null,
            currentImage:null
         }
    }

     handleColorClick = color => {
        const images = []
        images.push(color);
        this.setState({ selectedColor: color,productImages:images,currentImage:images[0] });
        console.log(color);
    };

     handleSizeClick = size => {
        this.setState({ selectedSize: size });
        console.log(size);
    };

     handleImageHover = image => {
        this.setState({ currentImage: image });
    };

    render() {
        return (
            <myContext.Provider value={{
                ...this.state,
                handleSizeClick:this.handleSizeClick,
                handleColorClick:this.handleColorClick,
                handleImageHover:this.handleImageHover
            }}>
                {this.props.children}
            </myContext.Provider>
         );
    }
}

const ContextConsumer = myContext.Consumer;

export {ContextConsumer,ContextProvider}