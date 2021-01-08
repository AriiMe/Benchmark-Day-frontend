/** @format */

import React from "react";
import { Container, Form, Row, Col } from "react-bootstrap";

class Score extends React.Component {
  state = {
    exam: {},
  };

  componentDidMount = () => {
    this.fetchExam();
  };

  fetchExam = async () => {
    try {
      let response = await fetch(
        `http://localhost:6969/exams/` + this.props.examID
      );
      let results = await response.json();
      this.setState({ exam: results });
      console.log(this.state.exam);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Container className="text-center mt-5">
        <Col>
          <Row>
            <h1>Score</h1>
          </Row>
        </Col>
        <Col>
          <Row>
            <h5>
              you scored: &nbsp;
              {this.state.exam
                ? this.state.exam.score
                : "Currently calculating"}{" "}
              points
            </h5>
          </Row>
        </Col>
      </Container>
    );
  }
}
export default Score;
