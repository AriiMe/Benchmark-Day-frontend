/** @format */

import React, { Component } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import Score from "../ScorePage/Score";
import Questions from "./Questions";

export default class QuizPage extends Component {
  state = {
    selectedQuestion: {},
    selectedIndex: 0,
  };

  componentDidMount = () => {
    console.log(this.props.exam);
    this.setState({ selectedQuestion: this.props.exam.questions[0] });
  };

  nextQuestion = () => {
    let nextQ = this.state.selectedIndex + 1;
    this.setState({
      selectedIndex: nextQ,
      selectedQuestion: this.props.exam.questions[nextQ],
    });
  };

  render() {
    return (
      <div className="score">
        {this.state.selectedIndex <= 4 ? (
          this.state.selectedQuestion.hasOwnProperty("text") && (
            <Questions
              index={this.state.selectedIndex}
              question={this.state.selectedQuestion}
              examID={this.props.exam._id}
              nextQuestion={this.nextQuestion}
            />
          )
        ) : (
          <Score examID={this.props.exam._id} />
        )}
      </div>
    );
  }
}
