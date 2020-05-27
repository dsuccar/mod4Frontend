import React, { Component } from 'react'

export default class ProfilePage extends Component{
    constructor(){
        super()
        this.state = {
            userAnswers: [],
            userQuestions: [],
            filter: "answered"
        }
    }

    componentDidMount(){
        fetch("http://localhost:3000/user_questions")
        .then(response => response.json())
        .then(answers => {
            const userAnswers = answers.filter(answer => (answer.user_id === this.props.userData.id))
            this.setState({userAnswers})
            }
        )

        fetch("http://localhost:3000/questions")
        .then(response => response.json())
        .then(questions => {
            const userQuestions = questions.filter(question => (question.submitted_user_id === this.props.userData.id))
            this.setState({userQuestions})
            }
        )
    }

    render(){
        debugger
        return(
            <h1></h1>
        )
    }
}