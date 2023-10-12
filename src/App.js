import React from 'react';
import './App.css';
import Navbar from './nabvar/Navbar.js';
import Content from './Content.js';

const PRELOAD_IMAGE_LIST = ["/thumbnails/pelapotha.jpg", "/thumbnails/slcovid.jpg"]

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      nav: "homepage",
      isPreloading: true,
    }

    this.handleNavigation = this.handleNavigation.bind(this)
  }

  componentDidMount() {
    this.preloadImages(PRELOAD_IMAGE_LIST);
  }

  handleNavigation(str) {
    this.setState({ nav: str })
  }

  preloadImages = (images) => {
    const imagePromises = images.map((imageUrl) => {
      return new Promise((resolve) => {
        const image = new Image();
        image.src = imageUrl;
        image.onload = resolve;
      });
    });

    Promise.all(imagePromises)
      .then(() => {
        this.setState({ isPreloading: false });
      })
      .catch((error) => {
        console.error('Error preloading images:', error);
      });
  };

  render() {
    const { isPreloading } = this.state;
    return (
      <div className="App">
        {isPreloading ? (
          <div className="d-flex justify-content-center align-items-center spinner" style={{ minHeight: "100vh" }}>
            <div className="spinner-border text-light" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <>
            <Navbar navState={this.state.nav} handleNavigation={this.handleNavigation} />
            <Content nav={this.state.nav} />
          </>
        )}
      </div>

    );
  }
}
