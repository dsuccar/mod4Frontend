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
      total: 0
    }
  }

  componentDidMount(){
    fetch("http://localhost:3000/questions")
    .then(response => response.json())
    .then(questions => {
      const randomQuestion = questions[Math.floor(Math.random() * questions.length)]
      this.setState({
        question: randomQuestion
      })
    })
  }

  handleChoice = (event) => {
    this.getQuestionStats()
    const user_question = {
      user_id: this.props.user.id,
      question_id: this.state.question.id,
      choice: event.target.textContent
    }
    this.setState({choiceMade: true})
    fetch("http://localhost:3000/user_questions", {
      method: "POST", 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user_question)
    })
  }

  getQuestionStats = () => {
    fetch("http://localhost:3000/user_questions")
    .then(response => response.json())
    .then(userQuestions => {
      let firstChoiceCount = 0
      let secondChoiceCount = 0
      userQuestions.forEach(userQuestion => {
          if (userQuestion.choice === this.state.question.first_option){
            firstChoiceCount += 1
          }
          if (userQuestion.choice === this.state.question.second_option){
            secondChoiceCount += 1
          }
      })
      this.setState({firstChoiceCount: firstChoiceCount, secondChoiceCount: secondChoiceCount, total: (firstChoiceCount + secondChoiceCount)})
    })
  }

  forceUpdateHandler = () => {
    fetch("http://localhost:3000/questions")
    .then(response => response.json())
    .then(questions => {
      const randomQuestion = questions[Math.floor(Math.random() * questions.length)]
      this.setState({
        question: randomQuestion,
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
        
        <Choice choice={this.state.question.first_option} handleChoice={this.handleChoice} choiceMade={this.state.choiceMade} choiceCount={this.state.firstChoiceCount} total={this.state.total}/>
        <Choice choice={this.state.question.second_option} handleChoice={this.handleChoice} choiceMade={this.state.choiceMade} choiceCount={this.state.secondChoiceCount} total={this.state.total}/>
        <h1>{this.state.question.context}</h1>
        <button onClick={this.forceUpdateHandler}>Next Question</button>
      </div>
    )}
}
