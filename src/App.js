import React from 'react';
import './App.css';
import Navbar from './Navbar.js';
import Content from './Content.js';

export default class App extends React.Component {
  constructor(props){
    super(props)

    this.state={
      nav:"homepage"
    }

    this.handleNavigation=this.handleNavigation.bind(this)
  }

  handleNavigation(str){
  this.setState({nav:str})
  }


  render(){
      return (
        <div className="App">
        <Navbar navState={this.state.nav} handleNavigation={this.handleNavigation}/>
        <Content nav={this.state.nav}/>
        </div>

      );
  }
}
