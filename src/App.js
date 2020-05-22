import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'
import NavBar from './components/NavBar'
import Signin from './components/Signin'
import QuestionContainer from './components/QuestionContainer'

class App extends Component {

  constructor() {
    super()
    this.state = {
      user: ""
    }
  }

  // componentDidMount(){

  // }

  submitUser = (userObj) => {
    fetch("http://localhost:3000/users")
      .then(response => response.json())
      .then(users => {
        users.forEach (user => {
          if(user.username === userObj.username){
            this.setState({ user })
          }
        })
      })
  }

  // getQuestion = () => {
  //   fetch("http://localhost:3000/questions")
  //   .then(response => response.json())
  //   .then(questions => {
  //     const randomQuestion = questions[Math.floor(Math.random() * questions.length)]
  //     this.setState({
  //       question: randomQuestion
  //     })
  //   })
  // }

  render() {

    return (
      <div className="App">
        {!this.state.user && <Signin submitUser={this.submitUser}/>}
        {this.state.user && <NavBar/>}
        {this.state.user && <QuestionContainer />}
        {/* {!this.state.user ?
          <Signin submitUser={this.submitUser} /> :
          <QuestionContainer />
        } */}

      </div>
    );
  }
}

export default App;
