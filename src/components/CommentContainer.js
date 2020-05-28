import React, {  Component } from 'react';
import Comment from './Comment'
import CommentForm from './CommentForm'

export default class CommentContainer extends Component {

    constructor(){
        super()
        this.state = {
            updateToggle: false
        }
    }

    // componentDidMount(){
    //     fetch(`http://localhost:3000/questions/${this.props.question.id}`)
    //     .then(response => response.json())
    //     .then(question => {
    //         this.setState({comments: question.comments})
    //     })
    // }
    
    handleToggle = (event) => {
        this.setState({updateToggle: true})
    }

  render() {
    return (
        <div>
            <CommentForm question={this.props.question} userData={this.props.userData} updateToggle={this.state.updateToggle}/>
            {this.props.question.comments.map(comment => {
                return <Comment key={comment.id} comment={comment} userData={this.props.userData} handleDelete={this.props.handleDelete}
                updateToggle={this.state.updateToggle}/> 
            })}
        </div>
    )
  }
}