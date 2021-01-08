/** @format */

import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage/LandingPage";
import QuizPage from "./components/QuizPage/QuizPage";

class App extends React.Component {
  state = {
    exam: {},
  };
  startTest = (exam) => {
    this.setState({ exam: exam });
    console.log(this.state.exam)
  };
  render() {
    return (
      <BrowserRouter>
        <Route
          path="/"
          exact
          render={(props) => (
            <LandingPage {...props} startTest={this.startTest} />
          )}
        />
        <Route
          path="/exam/:examID"
          render={(props) => <QuizPage {...props} exam={this.state.exam} />}
        />
      </BrowserRouter>
    );
  }
}
export default App;
