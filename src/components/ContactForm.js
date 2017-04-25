import React, { Component } from 'react';
import {
    Button, Container, Col, Form,
    FormGroup, FormFeedback, FormText, Label, Input, Alert
} from 'reactstrap';
import { validateInput } from '../util/validateInput';
import { database } from '../database/database';
import classnames from 'classnames';

class ContactForm extends Component {

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
        const { errors, isValid } = validateInput(this.state);      
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
            const ref = database.ref().child('messages/' + sender);
            ref.push(message).catch((error) => {
                console.log(error);
            });

        this.setState({
            isLoading: false,
            submitStatus: 'You successfully sent out message !',
            visible: true
        });
        database.ref().off();
        }
    }

    render() {
        const { errors } = this.state;        
        return (
            <Container fluid>
                <Form onSubmit={this.onSubmit}>
                    <FormText className="text-center">
                        Please fill in all the fields and press Send.
                    </FormText>
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
                    <FormGroup row className={classnames({ 'has-warning': errors.message })}>
                        <Label for="message" sm={2}>Message:</Label>
                        <Col sm={10}>
                            <Input type="textarea" name="message" id="message" placeholder="Message" rows="8"
                                value={this.state.message}
                                onChange={this.onChange}
                                state={errors.inputState} />
                                {errors && <FormFeedback>{errors.message}</FormFeedback>}
                        </Col>
                    </FormGroup>
                    <FormGroup check row>
                        <Col sm={{ size: 10, offset: 6}}>
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

export default ContactForm;