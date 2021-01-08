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
    this.setState({ selectedIndex: this.state.selectedIndex + 1 });
    this.setState({
      selectedQuestion: this.props.exam.questions[this.state.selectedIndex],
    });
  };

  render() {
    return (
      <div>
        {this.state.selectedQuestion.hasOwnProperty("text") &&
        this.state.selectedIndex <= 4 ? (
          <Questions
            index={this.state.selectedIndex}
            question={this.state.selectedQuestion}
            examID={this.props.exam._id}
            nextQuestion={this.nextQuestion}
          />
        ) : (
          <Score examID={this.props.exam._id} />
        )}
      </div>
    );
  }
}
