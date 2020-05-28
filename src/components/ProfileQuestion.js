import React, { Component } from 'react'


export default class ProfileQuestion extends Component{

    constructor(){
        super()
        this.state = {
            totalAnswers: 0
        }
    }

    componentDidMount(){
        fetch(`http://localhost:3000/questions/${this.props.question.id}`)
        .then(response => response.json())
        .then(question => {
              this.setState({totalAnswers: question.user_questions.length})
        })
    }

    render(){
        return (
            <div>
                <h3>{this.props.question.title}</h3>
                <p><b>Option #1:</b> {this.props.question.first_option}</p>
                <p><b>Option #2:</b> {this.props.question.second_option}</p>
                <p><b>Additional Context (if given):</b> {this.props.question.context}</p>
                <p><b>Total Answers:</b> {this.state.totalAnswers}</p>
            </div>
        )
    }
}