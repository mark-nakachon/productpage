import React from "react";
import DayPicker from "react-day-picker";
import { Row, Col, Button } from "antd";

import "antd/dist/antd.css";
import BlockPanel from "./blockPanel";

import "react-day-picker/lib/style.css";

const blocks = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

export default class StartDate extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    // this.handleStartChange = this.handleStartChange.bind(this);
    this.state = {
      selectedDay: null,
      startDate: this.props.startDate,
      endDate: null,
      showEndDate: false,
      showStartDate: false
    };
  }
  handleDayClick(day, { selected }) {
    this.setState({
      selectedDay: selected ? undefined : day
    });
    // console.log(day);
    this.props.handleStartChange(day);
  }

  handleBlockClick = block => {
    this.setState({ startBlock: block });
    // console.log(block);
    this.props.handleStartBlock(block);
  };

  render() {
    if (this.props.visible)
      return (
        <Row className="startDate">
          <Row>
            <Col className="input-date-picker"  lg={10} md={12} sm={24}>
              <DayPicker
                selectedDays={this.state.selectedDay}
                onDayClick={this.handleDayClick}
              />
            </Col>
            <Col  className="input-block" lg={12} md={12} sm={24}>
              <div
                /* style={{
                  marginLeft: 10,
                  paddingLeft: 10
                }} */
              >
                <BlockPanel
                  blocks={blocks.slice(0, 3)}
                  handleBlockClick={this.handleBlockClick}
                  selectedBlock={this.props.selectedBlock}
                />
                <hr />
                <BlockPanel
                  blocks={blocks.slice(3, 9)}
                  handleBlockClick={this.handleBlockClick}
                  selectedBlock={this.props.selectedBlock}
                />
                <hr />
                <BlockPanel
                  blocks={blocks.slice(9)}
                  handleBlockClick={this.handleBlockClick}
                  selectedBlock={this.props.selectedBlock}
                />
              </div>
            </Col>
          </Row>
          <Row style={{ borderTop: "1px solid #d9d9d9", marginTop: "5px" }}>
            {" "}
            <Col>
            <Button
            className="end-date-button"
              onClick={() => {
                this.props.toggleEndDate();
              }}
            >
              Okay So Now Let's choose Returning Time
            </Button>
            </Col>
            </Row>
          <style>
            {`
              .startDate{
                border: 2px solid #d9d9d9;
                padding: 5px;
                border-radius: 5px 5px 5px;
            
              }
            `}
          </style>
        </Row>
      );
    else return <></>;
  }
}
