 import React, { Component } from 'react'
   
export default class NavBar extends Component{
    render(){
        return(
          <div class="ui menu">
            <div class="header item">
              Would You Rather
            </div>
            <a class="item">
              Submit a Question
            </a>
            <a class="item">
              {localStorage["user"].username}
            </a>
          </div>
        )
    }
}