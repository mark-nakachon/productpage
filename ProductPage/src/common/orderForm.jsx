import React, { Component } from "react";
import { Form, Button,Row ,Col} from "react-bootstrap";
import SizePicker from './sizePicker';





const OrderForm = props => {
    
    onSizeClick=()=>{
        props.handleSizeClick()
    }
    
  return (
    <Form>
  <Form.Group as={Row} controlId="formHorizontalEmail">
    <Form.Label column sm={1}>
    <i className="fa fa-map-marker fa-2x" style={{paddingBottom: '10px'}}></i>
    </Form.Label>
    <Col sm={5}>
      <Form.Control type="number" placeholder="Enter Pincode" />
    </Col>
    <Col sm={5}>
    <p>Enter Pincode to know shipping cost</p>
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalPassword">
    <Form.Label column sm={2}>
     Size: 
    </Form.Label>
    <Col sm={10}>
     <SizePicker/>
      <Form.Control type="password" placeholder="Password" />
    </Col>
  </Form.Group>
  <fieldset>
    <Form.Group as={Row}>
      <Form.Label as="legend" column sm={2}>
        Radios
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="first radio"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="second radio"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
          type="radio"
          label="third radio"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
      </Col>
    </Form.Group>
  </fieldset>
  <Form.Group as={Row} controlId="formHorizontalCheck">
    <Col sm={{ span: 10, offset: 2 }}>
      <Form.Check label="Remember me" />
    </Col>
  </Form.Group>

  <Form.Group as={Row}>
    <Col sm={{ span: 10, offset: 2 }}>
      <Button type="submit">Sign in</Button>
    </Col>
  </Form.Group>
</Form>
  );
};

export default OrderForm;
