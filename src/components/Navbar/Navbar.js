import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../../assets/css/style.css'

const profilLocal = JSON.parse(localStorage.getItem("profil"));

class Navbar extends Component {
    renderDashboardNav() {
        if (JSON.parse(localStorage.getItem("profil")) !== null) {
            if (this.props.nama !== '' || JSON.parse(localStorage.getItem("profil")) !== null) {
                return (
                    <li className={`nav-item ${this.props.dashboard ? "active" : ""}`}>
                        <Link to="/dashboard" className="nav-link" href="#"><h6>Dashboard</h6></Link>
                    </li>
                )
            }
        }
    }

    renderNameNav() {
        if (JSON.parse(localStorage.getItem("profil")) !== null) {
            if (this.props.nama !== '' || JSON.parse(localStorage.getItem("profil")) !== null) {
                return (
                    <li className={`nav-item ${this.props.login ? "active" : ""}`}>
                        <Link to="/" className="nav-link"><h6
                            className="nameNavbar">{JSON.parse(localStorage.getItem("profil")).data.fullName}</h6>
                        </Link>
                    </li>
                )
            }
        } else {
            return (
                <li className={`nav-item ${this.props.login ? "active" : ""}`}>
                    <Link to="/login" className="nav-link" href="#"><h6>Login</h6></Link>
                </li>
            )
        }


    }
    render() {

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
                            {this.renderDashboardNav()}
                            <li className={`nav-item ${this.props.about ? "active" : ""}`}>
                                <Link to="/about" className="nav-link" href="#"><h6>About Us</h6></Link>
                            </li>
                            {this.renderNameNav()}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar