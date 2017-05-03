import React, { Component } from "react";
import { database } from "../../database/database";
import { getSelect } from "../../util/getSelect";

class QuotationSnap extends Component {
  constructor() {
    super();
    this.state = {
      author: "",
      category: "",
      text: "",
      loading: false
    };
  }

  componentWillMount() {
    this.setState({
      loading: true
    });
    database.ref("quotations").once("value", snap => {
      const totalQuote = snap.numChildren();
      const selected = getSelect(totalQuote);
      const quotation = snap.val()[selected];

      if (quotation != null) {
        this.setState({
          author: quotation.author,
          category: quotation.category,
          text: quotation.text,
          loading: false
        });
      } else {
        this.setState({
          author: "",
          category: "",
          text: "",
          loading: false
        });
      }
    });
  }

  componentWillUnmount() {
    database.ref().off();
  }

  render() {
    const { author, category, text } = this.state;

    return (
      <div className="card text-center card-outline-primary" id="quotation">
        <h5 className="card-header">Food for Thought - {category}</h5>
        <div className="card-block">
          <blockquote className="blockquote">
            <p>
              <i className="fa fa-quote-left" />&nbsp;&nbsp;
              <span>{text}</span>
            </p>
            <h6 className="card-subtitle">
              <i className="fa fa-minus" />&nbsp;&nbsp;
              <span>{author}</span>
            </h6>
          </blockquote>

        </div>

      </div>
    );
  }
}

export default QuotationSnap;
