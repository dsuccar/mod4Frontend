import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import NavBar from "./components/NavBar";
import Signin from "./components/Signin";
import QuestionContainer from "./components/QuestionContainer";
import SubmitQuestionForm from "./components/SubmitQuestionForm";
import ProfilePage from "./components/ProfilePage";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userData: null
    };
  }

  submitUser = (userObj) => {
    fetch("http://localhost:3000/users")
      .then(response => response.json())
      .then(users => {
        const user = users.find((user) => user.username === userObj.username)
        fetch(`http://localhost:3000/users/${user.id}/login`)
        .then(response => response.json())
        .then(userData => {
          this.setState({userData})

        })
      })
  }

  handleLogout = (event) => {
    this.setState({userData: null})

  }

  render() {
    return (
      <div className="App">
        {this.state.userData && <NavBar userData={this.state.userData} handleLogout={this.handleLogout}/>}
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Signin submitUser={this.submitUser} userData={this.state.userData} />
            )}
          />

          <Route
            exact
            path={`/question`}
            render={() => {
              if (this.state.userData != null) {
                return <QuestionContainer userData={this.state.userData} />;
              } else {
                return <h1>Loading...</h1>;
              }
            }}
          />

          <Route
            exact
            path={"/submit_question"}
            render={() => {
              if (this.state.userData != null) {
                return <SubmitQuestionForm userData={this.state.userData} />;
              }
            }}
          />

          <Route
            exact
            path={"/users/:id"}
            render={() => <ProfilePage userData={this.state.userData} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
