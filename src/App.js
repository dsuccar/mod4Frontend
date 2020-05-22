import React, { Component } from 'react';
import Signin from './components/Signin'

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

  render() {
    return (
      <div className="App">
        {!this.state.user ?
          <Signin submitUser={this.submitUser} /> :
          <QuestionContainer />
        }
      </div>
    );
  }
}

export default App;
