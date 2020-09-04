import React from 'react';
import logo from './assets/du.svg';
import $ from 'jquery';

export default class Navbar extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-sm sticky-top">


            <div className="navbar-brand">
            <img src={logo} height="40vh" alt="dulana logo"/>
            <span id="navbar-title">du<span class="special-text">1</span>ana</span>
            </div>

            <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse"id="navbarCollapse">
                <ul className="navbar-nav ml-auto">
                    <li className="navbar-item">
                        <a
                        onClick={()=>this.props.handleNavigation("homepage")}
                        className={(this.props.navState=="homepage")?"nav-link active":"nav-link"}>
                        Homepage
                        </a>
                    </li>
                    <li className="navbar-item">
                        <a
                        onClick={()=>this.props.handleNavigation("projects")}
                        className={(this.props.navState=="projects")?"nav-link active":"nav-link"}>
                        Projects
                        </a>
                    </li>
                    <li className="navbar-item">
                        <a
                        onClick={()=>this.props.handleNavigation("aboutme")}
                        className={(this.props.navState=="aboutme")?"nav-link active":"nav-link"}>
                        About Me
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
  )}
}
