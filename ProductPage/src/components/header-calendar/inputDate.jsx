import React, { Component } from "react";
import EndDate from "./endDate";
import StartDate from "./startDate";
import { Row, Col, Button, Input, Modal } from "antd";
import "antd/dist/antd.css";
import "./SRCC/inputDate.scss";
let duration = 0;

class InputDate extends Component {
  state = {
    startDate: null,
    endDate: null,
    startBlock: null,
    endBlock: null,
    showEndDate: false,
    showStartDate: false
    
  };

  toggleEndDate = () => {
    if (this.state.startDate === null) {
      alert("First Select Starting date");
      return;
    }
    this.setState({ showEndDate: !this.state.showEndDate });

    console.log("toggle end date", this.state.showEndDate);
  };

  toggleStartDate = () => {
    this.setState({ showStartDate: !this.state.showStartDate });
    console.log(this.state.showStartDate);
  };
  handleStartChange = day => {
    this.setState({ startDate: day });
    console.log("Start Date changed");
  };

  handleEndChange = day => {
    this.setState({ endDate: day });
  };

  handleStartBlock = block => {
    this.setState({ startBlock: block });
  };
  handleEndBlock = block => {
    this.setState({ endBlock: block });
  };
  handleReset=()=>{
    const state=this.state;
    state.startDate=null;
    state.endDate=null;
    state.startBlock=null;
    state.endBlock=null;
    state.showEndDate=false;
    state.showStartDate=false;
    duration=0;
    this.setState(state);
    
    

  }
  calculateDuration = () => {
    const { startDate, startBlock, endDate, endBlock } = this.state;
    let start = new Date(startDate);
    start.setUTCHours(startBlock);
    let end = new Date(endDate);
    end.setUTCHours(endBlock);
    duration = (end - start) / (60 * 60 * 1000);

    // console.log(duration);
    const rentInfo={startDate,endDate,startBlock,endBlock,duration:duration};
    // console.log(rentInfo);
    this.props.handleRentInfo(rentInfo);
  };
  
  setModal2Visible=(modal2Visible)=> {
    this.setState({ modal2Visible });
  }
  format = (day, block) => {
    let hour = "_ _   ";
    if (block !== null) {
      if (block > 12) hour = block - 12 + " PM ,";
      else hour = block + " AM ,";
    }

    if (day === null) return "By: " + hour + "_ _ / _ _ / _ _";
    else {
      return (
        "By: " +
        hour +
        day.getDate() +
        "/" +
        day.getMonth() +
        "/" +
        day.getYear()
      );
    }
  };

  render() {
    const { startBlock, startDate, endBlock, endDate } = this.state;
    // console.log("Start: ", startDate, startBlock);

    // console.log("End: ", endDate, endBlock);
    if (startBlock && startDate && endBlock && endDate) {
      // console.log("calculate duration");
      this.calculateDuration();
    }
    return (
      <>
      
      <Button type="primary" onClick={() => this.setModal2Visible(true)}>
        Select Start and End Dates
        </Button>
        <Modal
          
          centered
          visible={this.state.modal2Visible}
          onOk={() => this.setModal2Visible(false)}
          onCancel={() => this.setModal2Visible(false)}
          width="100%"
          
          
        >
        
        <Row  style={{background: "rgb(10,10,10,0,5"}}>
          <Row>
          <Col lg={5} md={10} sm={24}>
              <div className="display-date">
                <p>I Want My Stuff: </p>
                <Input
                className="input-date"
                  style={{ width: "70%" }}
                  placeholder="Select Starting Date"
                  value={this.format(startDate, startBlock)}
                  onClick={() => this.toggleStartDate()}
                />
              </div>
            </Col>
            

            <Col lg={5} md={10} sm={24}>
              <div className="display-date">
                <p>I Will return it By: </p>

                <Input
                className="input-date"
                  style={{ width: "70%" }}
                  placeholder="Select Ending Date"
                  value={this.format(endDate, endBlock)}
                  onClick={() => this.toggleEndDate()}
                />
              </div>
            </Col>
            <Col span={2}><Button  type="danger" onClick={()=>this.handleReset()}>Reset</Button></Col>
          </Row>

          <Row>
            <Col className="start-date-container" lg={10} md={12} sm={24}>
              <StartDate
                visible={this.state.showStartDate}
                handleStartChange={this.handleStartChange}
                toggleStartDate={this.toggleStartDate}
                toggleEndDate={this.toggleEndDate}
                selectedBlock={this.state.startBlock}
                handleStartBlock={this.handleStartBlock}
              />
            </Col>
            <Col
              className="end-date-container"
              lg={10}
              md={12}
              sm={24}
              style={
                this.state.showEndDate === false
                  ? {}
                  : {
                      border: "2px solid #d9d9d9",
                      padding: 5,
                      borderRadius: "5px 5px 5px"
                    }
              }
            >
              <EndDate
                visible={this.state.showEndDate}
                startDate={this.state.startDate}
                handleStartChange={this.handleStartChange}
                handleEndChange={this.handleEndChange}
                selectedBlock={this.state.endBlock}
                handleEndBlock={this.handleEndBlock}
                duration={duration}
              />
            </Col>
          </Row>
        </Row>
        <style>
          {`
            .ant-modal-body{
              padding: 0px;
            }
         `}
        </style>
        
        </Modal>
      </>
    );
  }
}

export default InputDate;
