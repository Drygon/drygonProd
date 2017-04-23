import React, { Component } from "react";
import {
  Button,
  Container,
  Col,
  Form,
  FormGroup,
  FormFeedback,
  Label,
  Input
} from "reactstrap";
import { Redirect } from 'react-router-dom';
import { validateInput } from "../util/validateInput";
import { database } from "../database/database";
import classnames from "classnames";
import ChartFull from './ChartFull';

class DrawingRequestForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agree: "",
      firstname: " ",
      lastname: "",
      email: " ",
      street: "",
      city: "",
      province: "",
      country: "",
      post: "",
      phone:"",
      message: " ",
      errors: {},
      isLoading: false,
      inValid: false,
      submitStatus: "",
      visible: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);    
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state.email);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }
  

  onSubmit(e) {
    e.preventDefault();

    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });      
      let message = {
        lastname: this.state.lastname,
        firstname:this.state.firstname,
        email: this.state.email,
        street: this.state.street,
        city: this.state.city,
        province: this.state.province,
        country: this.state.country,
        post: this.state.post,
        phone: this.state.phone,        
        message: this.state.message,
        timeStamp: new Date()
      };
      const ref = database.ref().child("transmittal/");
      ref.push(message).catch(error => {
        console.log(error);
      }).then(
          <Redirect to={ChartFull} />
      );

      this.setState({
        isLoading: false,
        submitStatus: true,
        visible: true
      });
      database.ref().off();
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <Container fluid className="content-wrapper">
        <div className="content">
          <Form onSubmit={this.onSubmit} id="transmittal-form">
            <div id="transmittal" className="form-text">
              <h2>Transmittal of PDF drawing files</h2>
              <ul>
                <li>
                  DWG. DCI-100-A: Discipline Interface Chart during design basis memorandum (DBM) phase
                  {" "}
                </li>
                <li>
                  DWG. DCI-100-B: Discipline Interface Chart during EDS & Detailed engineering phase
                  {" "}
                </li>
              </ul>
              <div id="terms">
                <strong> " Copyright disclosure and agreement " </strong>
                <p>
                  By accepting the electronic files for these drawings, you have agreed that hte information contained here-in shall be for your own personal use and that they will not be altered or reproduced in any way, or distributed to others for any other purpose.
                </p>

              </div>
            </div>
            <FormGroup check>
              <Label check>
                <Input 
                type="checkbox" 
                id="agree"
                value={this.state.agree}
                onChange={this.onChange}
                state={errors.inputState}/>
                <strong>I AGREE</strong>
              </Label>
            </FormGroup>
            <FormGroup
              row
              className={classnames({
                "has-warning": errors.lastname || errors.firstname
              })}
            >
              <Label for="Enter your name" sm={2}>Name:</Label>
              <Col sm={5}>
                <Input
                  type="name"
                  name="lastname"
                  id="lastname"
                  placeholder="Last Name"
                  value={this.state.lastname}
                  onChange={this.onChange}
                  state={errors.inputState}
                />
                {errors && <FormFeedback>{errors.lastname}</FormFeedback>}
              </Col>
              <Col sm={5}>
                <Input
                  type="name"
                  name="firstname"
                  id="firstname"
                  placeholder="First Name"
                  value={this.state.firstname}
                  onChange={this.onChange}
                  state={errors.inputState}
                />
                {errors && <FormFeedback>{errors.firstname}</FormFeedback>}
              </Col>
            </FormGroup>
            <FormGroup
              row
              className={classnames({ "has-warning": errors.email })}
            >
              <Label for="Enter your email" sm={2}>Email:</Label>
              <Col sm={10}>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.onChange}
                  state={errors.inputState}
                />
                {errors && <FormFeedback>{errors.email}</FormFeedback>}
              </Col>
            </FormGroup>            
            
              <FormGroup row>
              <Label for="Enter your address" sm={2}>Address:</Label>
              <Col sm={5}>
                <Input
                  type="text"
                  name="street"
                  id="street"
                  placeholder="Street"
                  value={this.state.street}
                  onChange={this.onChange}
                  state={errors.inputState}
                />
                {errors && <FormFeedback>{errors.street}</FormFeedback>}
              </Col>             
               <Col sm={5}>
                <Input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="City"
                  value={this.state.city}
                  onChange={this.onChange}
                  state={errors.inputState}
                />
                {errors && <FormFeedback>{errors.city}</FormFeedback>}
              </Col>            
               <Col sm={{size: 5, push: 2 }}>
                <Input
                  type="text"
                  name="province"
                  id="province"
                  placeholder="Prov. or State"
                  value={this.state.province}
                  onChange={this.onChange}
                  state={errors.inputState}
                />
                {errors && <FormFeedback>{errors.province}</FormFeedback>}
              </Col>
             
               <Col sm={{size: 5, push: 2 }}>
                <Input
                  type="text"
                  name="country"
                  id="country"
                  placeholder="Country"
                  value={this.state.country}
                  onChange={this.onChange}
                  state={errors.inputState}
                />
                {errors && <FormFeedback>{errors.country}</FormFeedback>}
              </Col>
            
               <Col sm={{size: 5, push: 2 }}>
                <Input
                  type="text"
                  name="post"
                  id="post"
                  placeholder="Post Code"
                  value={this.state.post}
                  onChange={this.onChange}
                  state={errors.inputState}
                />
                {errors && <FormFeedback>{errors.post}</FormFeedback>}
              </Col>              
               <Col sm={{size: 5, push: 2 }}>
                <Input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Phone (Optional)"
                  value={this.state.phone}
                  onChange={this.onChange}
                  state={errors.inputState}
                />
                {errors && <FormFeedback>{errors.phone}</FormFeedback>}
              </Col>
              </FormGroup>
            <FormGroup row>
              <Label for="message" sm={2}><strong>Why Do you want these drawings? </strong></Label>
              <Col sm={10}>
                <Input
                  type="textarea"
                  name="message"
                  id="message"
                  placeholder="Message"
                  rows="8"
                  value={this.state.message}
                  onChange={this.onChange}
                />
              </Col>
            </FormGroup>
            <FormGroup check row>
              <Col sm={{ size: 10, offset: 2 }}>
                <Button
                  disabled={this.state.isLoading || this.state.isvalid}
                  className="btn-outline-primary btn-lg btn-block"
                  type="submit"
                >
                  Submit
                </Button>
              </Col>

            </FormGroup>            
          </Form>
        </div>
      </Container>
    );
  }
}

export default DrawingRequestForm;
