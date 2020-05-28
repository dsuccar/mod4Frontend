import React, {  Component } from 'react';
import CommentForm from './CommentForm'

export default class Comment extends Component {

  render() {
      console.log(this.props)
      if (this.props.userData.id === this.props.comment.user_id){
        return (
            <div>
                <p>{this.props.comment.comment_text}</p>
                <button id={this.props.comment.id} onClick={this.props.handleDelete}>Delete</button>
                <button id={this.props.comment.id} onClick={this.props.handleToggle}>Edit</button>
                {this.props.handleToggle === true ?
                    <CommentForm userData={this.props.userData} question={this.props.question}/>
                    :
                    null
                }
            </div> 
        )
      } else {
          return (
              <div>
                  <p>{this.props.comment.comment_text}</p>
              </div>
          )
      }
  }
}