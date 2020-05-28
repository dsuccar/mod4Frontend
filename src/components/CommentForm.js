import React, {  Component } from 'react';
// import { Link } from 'react-router-dom'

export default class CommentForm extends Component {
  constructor() {
    super()
    this.state = {
      comment: "",
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
    const newCommentObj = {
      user_id: this.props.userData.id,
      question_id: this.props.question.id,
      comment_text: this.state.comment
    }
    fetch("http://localhost:3000/comments", {
      method: "POST", 
      headers: {
        'Content-Type': 'application/json'
      },
        body: JSON.stringify(newCommentObj)
    })
    this.setState({
        comment: ""
    })
  }
  render() {
    return (
        <div>
            <form>
            <input placeholder='Comment' name='comment' type='textarea' onChange={this.handleChange} value={this.state.comment} />
            <input type='submit' value='Submit Comment' onClick={this.handleSubmit} />
            </form>
        </div>
    )
  }
}