import React from 'react';

import Homepage from './homepage/Homepage.js';
import Projects from './projects/Projects.js';
import Aboutme from './aboutme/Aboutme.js';

export default class Content extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    switch (this.props.nav) {
      case "homepage":
      return (
        <Homepage/>
      )
      case "projects":
      return (
        <Projects/>
      )
      case "aboutme":
      return (
        <Aboutme/>
      )
      default:
      return(
      <h1 className="page_title">{this.props.nav}</h1>
      )
    }
  }
}
