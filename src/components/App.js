import React, { Component } from 'react';
import './App.css';

import {Question} from "./Question";
import {defaultQuestion} from "./Question";
import { AddChoice } from './AddChoice';
import { choiceHelper } from '../helpers/choice-helper';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      question: defaultQuestion
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">SURVEY MANAGER</h1>
        </header>
        <div id="heart">
          <strong className="t1">WHAT IS YOUR FAVORITE COLOR ?</strong>
          <AddChoice addChoice={this.addChoiceToState} />
          <Question question = {this.state.question} getUpChoice={this.getUpChoice} getDownChoice={this.getDownChoice} />
        </div>
      </div>
    );
  }

  addChoiceToState = (name) => {
    const newQuestionList = choiceHelper.addChoice(this.state.question, name);

    this.setState({question: newQuestionList});
  };

  getUpChoice = (id) =>  {
    const updatedQuestion = choiceHelper.getUpChoice(this.state.question, id);

    this.setState({question: updatedQuestion});
  };

  getDownChoice = (id) =>  {
    const updatedQuestion = choiceHelper.getDownChoice(this.state.question, id);

    this.setState({question: updatedQuestion});
  };

}

export default App;

function getTotal(questionCible){
  var total = questionCible.props.children.props.map(t => t.number);
};