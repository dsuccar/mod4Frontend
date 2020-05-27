 import React, { Component } from 'react'
 import { Link } from 'react-router-dom'

   
export default class NavBar extends Component{
    render(){
        return(
          <div class="ui menu">
            <div class="header item">
              Would You Rather
            </div>
            <Link to="/submit_question">
              <a class="item">
                Submit a Question
              </a>
            </Link>
            <Link to={`/users/${this.props.userData.id}`}>
            <a class="item">
              {this.props.userData.username}
            </a>
            </Link>
          </div>
        )
    }
}