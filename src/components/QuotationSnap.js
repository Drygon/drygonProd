import React, { Component } from 'react';
import { Card, CardBlock, CardHeader, CardText, CardSubtitle } from 'reactstrap';
import { database } from '../database/database';
import { getSelect } from '../util/getSelect';

class QuotationSnap extends Component {

  constructor() {
    super()
    this.state = {
      author: '',
      category: '',
      text: '',
      loading: false
    }
  }

  componentWillMount() {
    this.setState({
      loading: true
    })
    database.ref("quotations")
      .once("value", snap => {
        const totalQuote = snap.numChildren();
        const selected = getSelect(totalQuote);
        const quotation = snap.val()[selected];

        if (quotation != null) {
          this.setState({
            author: quotation.author,
            category: quotation.category,
            text: quotation.text,
            loading: false
          })
        } else {
          this.setState({
            author: "",
            category: "",
            text: "",
            loading: false
          })
        }
      });
  }

  componentWillUnmount() {
    database.ref().off();
  }

  render() {
    const { author, category, text } = this.state

    return (     
        <Card block>
          <CardHeader className="text-center">Food for Thought - {category}</CardHeader>
          <CardBlock>
            <CardText>
              <i className="fa fa-quote-left"></i>&nbsp;&nbsp; 
              <span>{text}</span>
            </CardText>
            <br />
            <CardSubtitle className="text-right">
              <i className="fa fa-minus" ></i>&nbsp;&nbsp;
              <span>{author}</span>
            </CardSubtitle>
          </CardBlock>
        </Card>     
    )
  }
}



export default QuotationSnap;