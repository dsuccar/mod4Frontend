import React, {  Component } from 'react';
import Comment from './Comment'
import CommentForm from './CommentForm'

export default class CommentContainer extends Component {

    // constructor(){
    //     super()
    //     this.state = {
    //         updateToggle: false
    //     }
    // }

    // componentDidMount(){
    //     fetch(`http://localhost:3000/questions/${this.props.question.id}`)
    //     .then(response => response.json())
    //     .then(question => {
    //         this.setState({comments: question.comments})
    //     })
    // }
    
    // handleToggle = (event) => {
    //     this.setState({updateToggle: !this.state.updateToggle})
    // }

    containerStyle = {
        paddingLeft: "50px",
        color: "white"
    }

  render() {
      if(this.props.question.comments){
        return (
            <div style={this.containerStyle}>
                <h2>Comments</h2>
                {this.props.question.comments.map(comment => {
                    return <Comment key={comment.id} comment={comment} userData={this.props.userData} question={this.props.question} handleDelete={this.props.handleDelete}
                    /> 
                })}
                <br></br>
                <CommentForm 
                size={"large"}
                doSubmit={this.props.doSubmit}
                question={this.props.question} 
                userData={this.props.userData}
                // updateToggle={this.state.updateToggle}
                // handleToggle={this.handleToggle}
                />
            </div>
        )
      } else {
          return (
              <h1 style={this.containerStyle}>Loading Comments</h1>
          )
      }
  }
}