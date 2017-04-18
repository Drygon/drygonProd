import React, { Component } from 'react';
import {
    Button, Container, Col, Form,
    FormGroup, FormFeedback, FormText, Label, Input, Alert
} from 'reactstrap';
import { validateInput } from '../util/validateInput';
import { database } from '../database/database';
import classnames from 'classnames';

class DrawingRequestForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: " ",
            email: " ",
            message: " ",
            errors: {},
            isLoading: false,
            inValid: false,
            submitStatus: "",
            visible: false,
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onDismiss = this.onDismiss.bind(this);
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

    onDismiss() {
        this.setState({
            name: " ",
            email: " ",
            message: " ",
            submitStatus: "",
            visible: false
        });
    }

    onSubmit(e) {
        e.preventDefault();

        if (this.isValid()) {
            this.setState({ errors: {}, isLoading: true });
            let sender = this.state.name;
            let message = {
                sender: this.state.name,
                email: this.state.email,
                message: this.state.message,
                timeStamp: new Date()
            }
            const ref = database.ref().child('transmittal/' + sender);
            ref.push(message).catch((error) => {
                console.log(error);
            });

        this.setState({
            isLoading: false,
            submitStatus: 'You successfully sent out request !',
            visible: true
        });
        database.ref().off();
        }
    }

    render() {
        const { errors } = this.state;        
        return (
            <Container fluid>                
                <table id="transmittal-item" className="table table-hover">
                    <theader>
                    <tr>Transmittal of PDF Drawing Files</tr>
                    </theader>
                    <thbody>
                    <tr>
                    <td>DWG. DCI-100-A</td>
                    <td>Discipline Interface Chart during design basis memorandum (DBM) phase </td>
                    </tr>
                    <tr>
                    <td>DWG. DCI-100-B</td>
                    <td>Discipline Interface Chart during EDS & Detailed engineering phase </td>
                    </tr>
                    </thbody>
                </table>                             
                    
                        <table id="transmittal-copyright" className="table table-hover">
                    <theader>
                    <tr>
                    Copyright disclosure and agreement
                    </tr>
                    </theader>
                    <thbody>
                    <tr>
                    <td>By accepting the electronic files for these drawings, you have agreed that hte information contained here-in shall be for your own personal use and that they will not be altered or reproduced in any way, or distributed to others for any other purpose.</td>                    
                    </tr>
                    </thbody>
                </table>   
                <Form onSubmit={this.onSubmit}>                
                    <FormGroup row className={classnames({ 'has-warning': errors.name })}>
                        <Label for="Enter your name" sm={2}>Name:</Label>
                        <Col sm={10}>
                            <Input type="name" name="name" id="name" placeholder="name"
                                value={this.state.name}
                                onChange={this.onChange}
                                state={errors.inputState} />
                                {errors && <FormFeedback>{errors.name}</FormFeedback>}
                        </Col>
                    </FormGroup>
                    <FormGroup row className={classnames({ 'has-warning': errors.email })}>
                        <Label for="Enter your email" sm={2}>Email:</Label>
                        <Col sm={10}>
                            <Input type="email" name="email" id="email" placeholder="Email"
                                value={this.state.email}
                                onChange={this.onChange}
                                state={errors.inputState} />
                                {errors && <FormFeedback>{errors.email}</FormFeedback>}
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="message" sm={2}>Message:</Label>
                        <Col sm={10}>
                            <Input type="textarea" name="message" id="message" placeholder="Message" rows="8"
                                value={this.state.message}
                                onChange={this.onChange}
                                />                              
                        </Col>
                    </FormGroup>
                    <FormGroup check row>
                        <Col sm={{ size: 10, offset: 2 }}>
                            <Button disabled={this.state.isLoading || this.state.isvalid}
                                className="btn-outline-primary btn-lg"
                                type="submit">Send</Button>
                        </Col>
                    </FormGroup>
                    <Alert color="success" isOpen={this.state.visible} toggle={this.onDismiss} >
                        <strong>Well Done !</strong> {this.state.status}
                    </Alert>
                </Form>
            </Container >
        )
    }
}

export default DrawingRequestForm;