/** @format */

import React, { Component } from "react";
import { Container, Row, Form, Button } from "react-bootstrap";

export default class LandingPage extends Component {
  state = {
    beginTest: {
      candidateName: "",
      name: "",
    },
    testContent: {},
  };

  updateState = (e) => {
    let beginTest = { ...this.state.beginTest };
    let currentID = e.currentTarget.id;
    beginTest[currentID] = e.currentTarget.value;
    this.setState({ beginTest: beginTest });
  };

  fetchTest = async () => {
    try {
      let response = await fetch(`http://localhost:6969/exams/start`, {
        method: "POST",
        body: JSON.stringify(this.state.beginTest),
        headers: {
          "Content-Type": "application/json",
        },
      });
      let exam = await response.json();
      this.props.startTest(exam);
      this.props.history.push("/exam/" + exam._id);
    } catch (error) {
      console.log(error);
    }
  };
  submitTest = (e) => {
    e.preventDefault();
    console.log("sss");
    this.fetchTest();
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <h3>Enter Test Name and your FirstName</h3>
          </Row>
          <Form onSubmit={this.submitTest}>
            <Form.Group>
              <Form.Label>Enter the test name</Form.Label>
              <Form.Control
                type="text"
                id="candidateName"
                placeholder="test name"
                value={this.state.candidateName}
                onChange={(e) => this.updateState(e)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Enter your first name</Form.Label>
              <Form.Control
                type="text"
                id="name"
                placeholder="your name"
                value={this.state.name}
                onChange={(e) => this.updateState(e)}
              />
            </Form.Group>
            <Button type="submit">Begin</Button>
          </Form>
        </Container>
      </div>
    );
  }
}
