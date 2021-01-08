/** @format */

import React from "react";
import {
  Container,
  Form,
  Row,
  Col,
  Button,
  ProgressBar,
} from "react-bootstrap";

class Questions extends React.Component {
  state = {
    question: this.props.question,
    answer: {
      question: this.props.index,
      answer: 5,
    },
    isSelected: false,
  };

  componentDidMount = () => {
    this.timer();
  };

  componentDidUpdate = (prevState, prevProps) => {
    if (prevState.question !== this.props.question) {
      this.timer();
    }
  };

  timer = () => {
    setTimeout(() => {
      this.props.nextQuestion();
    }, this.props.question.duration * 1000);
  };

  submitAnswer = (e) => {
    e.preventDefault();
    this.setState({ isSelected: false });
    this.sendAnswer();
    this.props.nextQuestion();
  };

  sendAnswer = async () => {
    try {
      let response = await fetch(
        `http://localhost:6969/exams/${this.props.examID}/answer`,
        {
          method: "POST",
          body: JSON.stringify(this.state.answer),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      let res = response.body;
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Container>
        {console.log(this.props.question)}
        <Row>{this.props.question.text}</Row>
        <Row>
          <ProgressBar variant="success" now={this.props.question.duration} />
        </Row>
        <Row>
          <Form onSubmit={this.submitAnswer}>
            <Form.Group as={Row}>
              {this.props.question.answers.map((answer, index) => (
                <Col xs={6} key={index}>
                  <Form.Check
                    type="radio"
                    name="answerChecks"
                    id={index}
                    label={answer.text}
                    onClick={() =>
                      this.setState({
                        isSelected: true,
                        answer: {
                          question: this.props.index,
                          answer: index,
                        },
                      })
                    }
                  />
                </Col>
              ))}
            </Form.Group>
            {this.state.isSelected && (
              <Button type="submit">next question</Button>
            )}
          </Form>
        </Row>
      </Container>
    );
  }
}
export default Questions;
