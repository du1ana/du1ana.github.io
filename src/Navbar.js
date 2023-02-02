import React from 'react';
import DuIcon from './assets/du.jsx';

export default class Navbar extends React.Component {

  render(){
  return (
    <div className="sticky-top">
      <nav className=" d-sm-none navbar navbar-dark bg-dark navbar-expand-sm">
              <div className="navbar-brand">
              <DuIcon/>
              <span id="navbar-title">du<span class="special-text">1</span>ana</span>
              </div>

              <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                  <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse"id="navbarCollapse">
                  <ul className="navbar-nav ml-auto">
                      <li className="navbar-item">
                          <a
                          data-toggle="collapse" data-target="#navbarCollapse"
                          onClick={()=>this.props.handleNavigation("homepage")}
                          className={(this.props.navState==="homepage")?"nav-link active":"nav-link"}>
                          Homepage
                          </a>
                      </li>
                      <li className="navbar-item">
                          <a
                          data-toggle="collapse" data-target="#navbarCollapse"
                          onClick={()=>this.props.handleNavigation("projects")}
                          className={(this.props.navState==="projects")?"nav-link active":"nav-link"}>
                          Work
                          </a>
                      </li>
                      <li className="navbar-item">
                          <a
                          data-toggle="collapse" data-target="#navbarCollapse"
                          onClick={()=>this.props.handleNavigation("aboutme")}
                          className={(this.props.navState==="aboutme")?"nav-link active":"nav-link"}>
                          About Me
                          </a>
                      </li>
                  </ul>
              </div>
          </nav>

          <div className="d-none d-sm-block">
            <nav className="navbar navbar-dark navbar-expand-sm bg-dark">
                    <div className="navbar-brand">
                    <DuIcon/>
                    <span id="navbar-title">du<span class="special-text">1</span>ana</span>
                    </div>
                    <div className="navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="navbar-item">
                                <a
                                onClick={()=>this.props.handleNavigation("homepage")}
                                className={(this.props.navState==="homepage")?"nav-link active":"nav-link"}>
                                Homepage
                                </a>
                            </li>
                            <li className="navbar-item">
                                <a
                                onClick={()=>this.props.handleNavigation("projects")}
                                className={(this.props.navState==="projects")?"nav-link active":"nav-link"}>
                                Work
                                </a>
                            </li>
                            <li className="navbar-item">
                                <a
                                onClick={()=>this.props.handleNavigation("aboutme")}
                                className={(this.props.navState==="aboutme")?"nav-link active":"nav-link"}>
                                About Me
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
              </div>
        </div>
  )}
}
