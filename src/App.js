import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'
import NavBar from './components/NavBar'
import Signin from './components/Signin'
import QuestionContainer from './components/QuestionContainer'
import SubmitQuestionForm from './components/SubmitQuestionForm'
import { Route, Switch } from 'react-router-dom'

class App extends Component {

  constructor() {
    super()
    this.state = {
      user: null
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
          this.setState({ user }, () => {
            localStorage.setItem("user", user.id)
          })
        }
      })
    })
  }

  render() {

    return (
      <div className="App">
        {this.state.user && <NavBar/>}
        {/* {
          (this.state.user) ? <NavBar/> : <h1></h1>
        } */}
        <Switch>

          <Route exact path='/' render={() => <Signin submitUser={this.submitUser} user={this.state.user}/>} />
          

          //change route?
          <Route exact path={`/question`} render={() => {
           if (this.state.user != null) {
            return <QuestionContainer user={this.state.user}/>
           } 
           else {
            return <h1>Loading...</h1>
           }
          }
        }/>

        <Route exact path={"/submit_question"} render={() => {
          if (this.state.user != null){
            return <SubmitQuestionForm user={this.state.user}/>
          }
        }
      }/>
        </Switch>
      </div>
    );
  }
}

export default App;
