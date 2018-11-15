import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../../assets/css/style.css'

class Navbar extends Component {
    render() {
        let namaku;
        if (localStorage.getItem("profil")) {
            namaku = JSON.parse(localStorage.getItem("profil")).data.fullName;
        }
        return (
            <nav className="navigationBarContainer navbar sticky-top navbar-expand-lg navbar-light bg-light ">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">Backpackuy</Link>
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
                                <Link to="/dashboard" className="nav-link" href="#"><h6>About Us</h6></Link>
                            </li>
                            <li className={`nav-item ${this.props.login ? "active" : ""}`}>
                                {namaku || this.props.nama !== '' ? <Link to="/" className="nav-link" href="#"><h6
                                        className="nameNavbar">{namaku ? namaku : this.props.nama}</h6></Link> :
                                    <Link to="/login" className="nav-link" href="#"><h6>Login</h6></Link>}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar