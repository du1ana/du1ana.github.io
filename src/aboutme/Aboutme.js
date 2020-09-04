import React from 'react';
import dulana from './assets/dulana.svg'

export default class Aboutme extends React.Component {

  render(){
  return (
    <div>
      <div className="my-auto w-100 container d-flex flex-row justify-content-around flex-wrap">
          <div className="col-7 col-xs-12 text-white">
            <br/><br/>
            <p className="h2">
              Hi There! I'm Dulana.
            </p>
            I'm a 21 year old IT undergraduate from Colombo, Sri Lanka. I make websites and web apps in my free time.
            <br/><br/>
            Follow me on these platforms to keep in touch with me and my content...
            <br/><br/>
            <p className="font-weight-bold h1">
              <a href="https://www.linkedin.com/in/dulana" target="_blank">
                <i class="fab fa-linkedin"></i>
              </a>&nbsp;
              <a href="https://www.instagram.com/du1ana" target="_blank">
                <i class="fab fa-instagram"></i>
              </a>&nbsp;
              <a href="https://www.facebook.com/du1ana" target="_blank">
                <i class="fab fa-facebook"></i>
              </a>&nbsp;
              <a href="https://www.youtube.com/channel/UCzISSLh1kXfI-sVlIOKIPUQ" target="_blank">
                <i class="fab fa-youtube"></i>
              </a>&nbsp;
              <a href="https://www.twitter.com/du1ana" target="_blank">
                <i class="fab fa-twitter"></i>
              </a>&nbsp;
              <a href="https://www.tiktok.com/@du1ana" target="_blank">
                <i class="fab fa-tiktok"></i>
              </a>&nbsp;
              <a href="https://www.github.com/du1ana" target="_blank">
                <i class="fab fa-github"></i>
              </a>&nbsp;
              <a href="https://www.hackerrank.com/dulana" target="_blank">
                <i class="fab fa-hackerrank"></i>
              </a>&nbsp;
              <a href="https://www.codepen.io/du1ana" target="_blank">
                <i class="fab fa-codepen"></i>
              </a>&nbsp;
            </p>
          </div>
          <div className="d-none d-lg-inline">
            <br/>
            <img src={dulana} width="300vw"></img>
          </div>
      </div>
    </div>
  )}
}
