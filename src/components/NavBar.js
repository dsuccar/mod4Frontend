 import React, { Component } from 'react'
 import { Link } from 'react-router-dom'

   
export default class NavBar extends Component{
    render(){
        return(
          <div className="ui menu">
            <div className="header item">
              Would You Rather
            </div>
            <Link to="/submit_question">
              <a className="item">
                Submit a Question
              </a>
            </Link>
            <Link to={`/users/${this.props.userData.id}`}>
            <a className="item">
              {this.props.userData.username}
            </a>
            </Link>
            <Link to={"/"}>
            <a className="item" onClick={this.props.handleLogout}>
              Logout
            </a>
            </Link>
          </div>
        )
    }
}