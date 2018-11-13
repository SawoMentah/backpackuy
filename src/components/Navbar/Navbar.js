import React, {Component} from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav className="navigationBarContainer navbar sticky-top navbar-expand-lg navbar-light container">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto navbarContent">
                        <li className="nav-item active">
                            <a className="nav-link" href="#"><h6>Features</h6> <span
                                className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><h6>About Us</h6></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><h6>Login</h6></a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar