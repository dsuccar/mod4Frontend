import React, { Component } from 'react'
import ProfileAnswer from './ProfileAnswer'
import ProfileQuestion from './ProfileQuestion'
import { Link } from 'react-router-dom'

export default class ProfilePage extends Component{
    constructor(){
        super()
        this.state = {
            userAnswers: [],
            userQuestions: [],
            associatedQuestions: [],
            filter: "My Answers"
        }
    }

    componentDidMount(){
        fetch(`http://localhost:3000/users/${this.props.userData.id}/login`)
        .then(response => response.json())
        .then(data =>{
            this.setState({userAnswers: data.user_questions,
                 userQuestions: data.submitted_questions,
                 associatedQuestions: data.questions})
        })

    }

    handleFilter = (event) =>{
        this.setState({filter: event.target.textContent})
    }

    render(){
        return(
            <div>
                <Link to="/question">
                    <button>Back to questions</button>
                </Link>
                {this.state.filter === "My Answers" ?
                    <div className="ui two item menu">
                        <a className="item active" onClick={this.handleFilter}>My Answers</a>
                        <a className="item" onClick={this.handleFilter}>My Submitted Questions</a> 
                    </div>
                    :
                    <div className="ui two item menu">
                        <a className="item" onClick={this.handleFilter}>My Answers</a>
                        <a className="item active" onClick={this.handleFilter}>My Submitted Questions</a>
                    </div>
                }
                {this.state.filter === "My Answers" ?
                    this.state.userAnswers.map(answer => {
                        return <ProfileAnswer key={answer.id} answer={answer} questions={this.state.associatedQuestions} submittedQuestions={this.state.userQuestions} filter={this.state.filter}/> 
                    })
                    :
                    this.state.userQuestions.map(question => {
                        return <ProfileQuestion key={question.id} question={question}/>
                    })
                }
            </div>
        )
    }
}