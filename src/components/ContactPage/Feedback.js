import { Control, Form, Errors, actions } from "react-redux-form";
import React, { Component } from 'react';
import {Row,Label,Col} from 'reactstrap';
import axios from 'axios';
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
class FeedbackForm extends React.Component {
    
    myRequest = (url) => {
        let response;
        try {
          response = axios.post(url,null,null)
        } catch (e) {
          response = e;
        }
        // console.log(response)
      }
      handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
      }
      handleSubmit = (e) => {
        const data = {
          ...this.state
        }
        const id = "13pts-j7RjECDBQuWAWzpG9m4d2umLUV_9wd4UV8rjOk" //YOUR FORM ID
        e.preventDefault()
        const formUrl = "https://docs.google.com/forms/d/"+ "13pts-j7RjECDBQuWAWzpG9m4d2umLUV_9wd4UV8rjOk"     +"/formResponse";
        const queryString = require('query-string')
        const q = queryString.stringifyUrl({
          url: formUrl,
          query: data
        })
        this.myRequest(q)
      }
    render() {
        return (
            
<Form
model="feedback"

onSubmit={(values) => this.handleSubmit(values)}
>



<Row className="form-group">
  <Label for="firstname" md={2}>
    First Name
  </Label>
  <Col md={10}>
    <Control.text
      model=".entry.1968789634"
      id="entry.1968789634e"
      name="entry.1968789634"
      placeholder=" First name"
      className="form-control"
      validators={{
        required,
        minLength: minLength(3),
        maxLength: maxLength(15),
      }}
    />
    <Errors
      className="text-danger"
      model=".entry.1968789634"
      show="touched"
      messages={{
        required: "Required*",
        minLength: "Must be greater than 3 and lesser than 15",
        maxLength: "Must be greater than 3 and lesser than 15",
      }}
    />
  </Col>
</Row>
</Form>
        )
    }
}
 
export default FeedbackForm;

