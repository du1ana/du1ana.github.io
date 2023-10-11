import React from 'react';

export default class Aboutme extends React.Component {

  render(){
  return (
    <div>
      <div className="my-auto w-100 container d-flex flex-row justify-content-around flex-wrap">
          <div className="col m-4 text-white">
            <br/><br/>
            <p className="h2">
              Hi There! I'm Dulana Peiris.
            </p>
            I'm a 22 year old IT undergraduate from Colombo, Sri Lanka. I'm interested in web development and digital art.
            <br/><br/>
            Follow me on these platforms to keep in touch with me and my content...
            <br/><br/>
            <div className="row font-weight-bold h1">
            <div className="col-2 col-md-1 m-1">
              <a href="https://www.linkedin.com/in/dulana" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
            <div className="col-2 col-md-1 m-1">
              <a href="https://www.instagram.com/du1ana" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              </div>
              <div className="col-2 col-md-1 m-1">
              <a href="https://www.facebook.com/du1ana" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              </div>
              <div className="col-2 col-md-1 m-1">
              <a href="https://www.twitter.com/du1ana" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              </div>
              <div className="col-2 col-md-1 m-1">
              <a href="https://www.github.com/du1ana" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              </div>
              <div className="col-2 col-md-1 m-1">
              <a href="https://www.hackerrank.com/dulana" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-hackerrank"></i>
              </a>
              </div>
              <div className="col-2 col-md-1 m-1">
              <a href="https://www.codepen.io/du1ana" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-codepen"></i>
              </a>
              </div>
            </div>
          </div>
      </div>
    </div>
  )}
}
