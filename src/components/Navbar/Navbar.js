import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav className="navigationBarContainer navbar sticky-top navbar-expand-lg navbar-light bg-light ">
                <div className="container">
                    <a className="navbar-brand" href="#">Backpackuy</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto navbarContent">
                            <li className={`nav-item ${this.props.home ? "active" : ""}`}>
                                <Link to="/" className="nav-link" href="#"><h6>Home</h6></Link>
                            </li>
                            <li className={`nav-item ${this.props.about ? "active" : ""}`}>
                                <a className="nav-link" href="#"><h6>About Us</h6></a>
                            </li>
                            <li className={`nav-item ${this.props.login ? "active" : ""}`}>
                                <Link to="/login" className="nav-link" href="#"><h6>Login</h6></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar