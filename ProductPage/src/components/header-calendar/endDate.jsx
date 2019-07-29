import React from "react";
import Helmet from "react-helmet";
import DayPicker, { DateUtils } from "react-day-picker";
import { Row, Col, Button } from "antd";
import "antd/dist/antd.css";
import BlockPanel from "./blockPanel";
import "react-day-picker/lib/style.css";
import "./SRCC/endDate.scss"
const blocks = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

export default class Example extends React.Component {
  static defaultProps = {
    numberOfMonths: 1
  };
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.state = this.getInitialState();
  }
  getInitialState() {
    return {
      from: this.props.startDate,
      to: undefined
    };
  }

  handleStartChange = day => {
    this.setState({ from: day });
  };
  handleDayClick=(day)=> {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
    this.props.handleEndChange(range.to);
    console.log(range);
  }
  handleResetClick=()=> {
    this.setState(this.getInitialState());
    this.props.handleEndChange(null);
  }
  handleBlockClick = block => {
    this.setState({ startBlock: block });
    console.log(block);
    this.props.handleEndBlock(block);
  };

  handleEndChange = day => {
    this.props.handleEndChange(day);
  };

  render() {
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };

    if (from !== this.props.startDate) {
      this.handleStartChange(this.props.startDate);
    }

    if (this.props.visible)
      return (
        <Row class="endDate">
          <Row>
          <Col span={10} className="input-date-picker">
              <DayPicker
                className="Selectable"
                numberOfMonths={this.props.numberOfMonths}
                selectedDays={[from, { from, to }]}
                modifiers={modifiers}
                onDayClick={this.handleDayClick}
              />
            </Col>
            <Col span={12} offset={2} className="input-block">
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
            </Col>
          </Row>

          <Row style={{ borderTop: "1px solid #d9d9d9", marginTop: "5px" }}>
            {" "}
            <Col span={10}>Total Duration: {this.props.duration} Hours</Col>
            <Col  offset={4} span={2}>
              <Button>Good To Go!</Button>
            </Col>
          </Row>

          <Helmet>
            <style>{`
           

  .Selectable .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
    background-color: #f0f8ff !important;
    color: #4a90e2;
  }
  .Selectable .DayPicker-Day {
    border-radius: 0 !important;
  }
  .Selectable .DayPicker-Day--start {
    border-top-left-radius: 50% !important;
    border-bottom-left-radius: 50% !important;
  }
  .Selectable .DayPicker-Day--end {
    border-top-right-radius: 50% !important;
    border-bottom-right-radius: 50% !important;
  }
  .button{
   float: right;
  }

 
            
`}</style>
          </Helmet>
        </Row>
      );
    else return <></>;
  }
}
{
  /* <p>
            {!from && !to && "Please select the first day."}
            {from && !to && "Please select the last day."}
            {from &&
              to &&
              `Selected from ${from.toLocaleDateString()} to
                ${to.toLocaleDateString()}`}{" "}
            {from && to && (
              <button className="link" onClick={this.handleResetClick}>
                Reset
              </button>
            )}
          </p> */
}
