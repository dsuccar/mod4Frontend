import React, {  Component } from 'react';
import { Link } from 'react-router-dom'


export default class SubmitQuestionForm extends Component {
  constructor() {
    super()
    this.state = {
      title: "",
      first_option: "",
      second_option: "",
      context: "",
      submittedUserId: ""
    }
  }

  handleChange = (event) => {
    const value = event.target.value
    const name = event.target.name
    this.setState({
      [name]: value
    })
  }
  
  handleSubmit = (event) => {
    event.preventDefault()
    const newQuestionObj = {
      title: this.state.title,
      first_option: this.state.first_option,
      second_option: this.state.second_option,
      context: this.state.context,
      submittedUserId: this.props.userData.id
    }
    fetch("http://localhost:3000/questions", {
      method: "POST", 
      headers: {
        'Content-Type': 'application/json'
      },
        body: JSON.stringify(newQuestionObj)
    })
    this.setState({
        title: "",
        first_option: "",
        second_option: "",
        context: "",
        submittedUserId: ""
    }, () => {
        alert("Your question has been submitted.")
    })
  }

  render() {
    return (
    <div>
        <Link to="/question">
            <button>Back to question</button>
        </Link>
        <form>
            <input placeholder='Title' name='title' type='text' onChange={this.handleChange} value={this.state.title} />
            <input placeholder='Option #1' name='first_option' type='text' onChange={this.handleChange} value={this.state.first_option} />
            <input placeholder='Option #2' name='second_option' type='text' onChange={this.handleChange} value={this.state.second_option} />
            <input placeholder='Context' name='context' type='text' onChange={this.handleChange} value={this.state.context} />
            <input type='submit' value='Submit Question' onClick={this.handleSubmit} />
        </form>
    </div>
    )
  }
}