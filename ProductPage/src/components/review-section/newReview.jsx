import React, { Component } from "react";
import { Modal, Button, Input } from 'antd';
import { Rate } from 'antd';
import "./review.css";
const {TextArea}= Input;
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

class NewReview extends Component {
  constructor() {
    super();
   

    this.state = {
      rating: 0,
      show: false
    };
  }

  

  setModal2Visible=(modal2Visible)=> {
    this.setState({ modal2Visible });
  }


  handleChange = rating => {
    this.setState({ rating });
  };

  state = {
    rating: 0
  };
  render() {
    const { rating } = this.state;
   

    return (
      <>
      <div>
       
        <Button  style={{float:"right"}} type="primary" onClick={() => this.setModal2Visible(true)}>
         Rate Now
        </Button>
        <Modal
          
          centered
          visible={this.state.modal2Visible}
          onOk={() => this.setModal2Visible(false)}
          onCancel={() => this.setModal2Visible(false)}
        >
        
        <strong>Rate: </strong><span>
        <Rate tooltips={desc} onChange={this.handleChange} rating={rating} />
        {rating ? <span className="ant-rate-text">{desc[rating - 1]}</span> : ''}
        </span>
        <hr/>
        <div>
        
        <div style={{ margin: '24px 0' }} />
        <TextArea
          placeholder="Description"
          autosize={{ minRows: 4, maxRows: 10 }}
        />
      </div>
      <Input placeholder="Review Title" />
        </Modal>
      </div>
      </>
    );
  }
}

export default NewReview;
