import React from 'react';
import DuIcon from './assets/du.jsx';
import AboutMeIcon from './assets/navbar_icons/AboutMeIcon.jsx';
import WorkIcon from './assets/navbar_icons/WorkIcon.jsx';
import HomeIcon from './assets/navbar_icons/HomeIcon.jsx';

export default class Navbar extends React.Component {

    render() {
        return (
            <div className="sticky-top">
                <nav className="navbar navbar-dark navbar-expand bg-dark d-flex align-items-center">
                    <div className="navbar-brand d-flex align-items-center">
                        <DuIcon />
                        <span id="navbar-title">du<span className="special-text">1</span>ana</span>
                    </div>
                    <ul className="navbar-nav ml-auto d-flex align-items-center">
                        <li className="navbar-item">
                            <div
                                onClick={() => this.props.handleNavigation("homepage")}
                                className={`d-flex align-items-center nav-link ${(this.props.navState === "homepage") ? "active" : ""}`}>
                                <HomeIcon />
                                <span className="ml-2 d-none d-md-block"> Home </span>
                            </div>
                        </li>
                        <li className="navbar-item">
                            <div
                                onClick={() => this.props.handleNavigation("projects")}
                                className={`d-flex align-items-center nav-link ${(this.props.navState === "projects") ? "active" : ""}`}>
                                <WorkIcon />
                                <span className="ml-2 d-none d-md-block"> Work </span>
                            </div>
                        </li>
                        <li className="navbar-item">
                            <div
                                onClick={() => this.props.handleNavigation("aboutme")}
                                className={`d-flex align-items-center nav-link ${(this.props.navState === "aboutme") ? "active" : ""}`}>
                                <AboutMeIcon />
                                <span className="ml-2 d-none d-md-block"> About Me </span>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}
