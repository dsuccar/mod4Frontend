import React, { Component } from 'react'
import Choice from './Choice'

export default class QuestionContainter extends Component {

  constructor(){
    super()
    this.state = {
      question: {},
      choiceMade: false
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

  handleChoice = () => {
    this.setState({choiceMade: true})
  }

  render(){
    return (
      <div className='question-container'>
        <h1>{this.state.question.title}</h1>
        
        <Choice choice={this.state.question.first_option} handleChoice={this.handleChoice} choiceMade={this.state.choiceMade}/>
        <Choice choice={this.state.question.second_option} handleChoice={this.handleChoice} choiceMade={this.state.choiceMade}/>
        <h1>{this.state.question.context}</h1>
      </div>
    )}
}
