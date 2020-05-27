import React, { Component } from 'react'
import Choice from './Choice'
import { Link } from 'react-router-dom'

export default class QuestionContainter extends Component {

  constructor(){
    super()
    this.state = {
      question: {},
      choiceMade: false,
      firstChoiceCount: 0,
      secondChoiceCount: 0,
      total: 0,
      firstPicked: false,
      secondPicked: false
    }
  }

  componentDidMount(){
    fetch(`http://localhost:3000/users/${this.props.userData.id}/unique_question`)
    .then(response => response.json())
    .then(question => {
      this.setState({...this.state, question: question})
    })
  }

  handleChoice = (event) => {
    let picked1 = false
    let picked2 = false
    let countArr = this.getQuestionStats()
    let firstCount = countArr[0]
    let secondCount = countArr[1]
    if (event.target.textContent === this.state.question.first_option){
      picked1 = true
    } else {
      picked2 = true
    }
    const userQuestionObj = {
      user_id: this.props.userData.id,
      question_id: this.state.question.id,
      choice: event.target.textContent
    }
    fetch("http://localhost:3000/user_questions", {
      method: "POST", 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userQuestionObj)
    })
    .then(response => response.json())
    .then(userQuestion => {
      this.getQuestionStats()
      this.setState({
        question: {...this.state.question, user_questions: userQuestion},
        choiceMade: true,
        firstPicked: picked1,
        secondPicked: picked2,
        firstChoiceCount: firstCount,
        secondChoiceCount: secondCount,
        total: (firstCount + secondCount)
      })
    })
    .then(this.getQuestionStats())  
  }

  getQuestionStats = () => {
    let choiceArr = []
    let firstChoiceCount = 0
    let secondChoiceCount = 0
    this.state.question.user_questions.forEach(userQuestion => {
      if (userQuestion.choice === this.state.question.first_option){
        firstChoiceCount += 1
      }
      else {
        secondChoiceCount += 1
      }
    })
    choiceArr.push(firstChoiceCount)
    choiceArr.push(secondChoiceCount)
    return choiceArr
  }

  newQuestionHandler = () => {
    fetch(`http://localhost:3000/users/${this.props.userData.id}/unique_question`)
    .then(response => response.json())
    .then(question => {
      this.setState({
        question: question,
        choiceMade: false,
        firstChoiceCount: 0,
        secondChoiceCount: 0,
        total: 0
      })
    })
  }

  render(){
    return (
      <div className='question-container'>
        <h1>{this.state.question.title}</h1>
        
        <Choice
          picked={this.state.firstPicked}
          choice={this.state.question.first_option} 
          handleChoice={this.handleChoice} 
          choiceMade={this.state.choiceMade}
          choiceCount={this.state.firstChoiceCount}
          total={this.state.total}
          />
          
        <Choice
          picked={this.state.secondPicked}
          choice={this.state.question.second_option}
          handleChoice={this.handleChoice}
          choiceMade={this.state.choiceMade}
          choiceCount={this.state.secondChoiceCount}
          total={this.state.total}
          />
        <h1>{this.state.question.context}</h1>
        <button onClick={this.newQuestionHandler}>Next Question</button>
      </div>
    )}
}
