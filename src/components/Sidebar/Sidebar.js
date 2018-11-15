import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/login"/>
        }
        return (
            <div className="sidebar">
                <button onClick={() => {
                    localStorage.removeItem("profil");
                    this.props.gantiLagi('');
                    this.setState({
                        redirect: true
                    });
                }}>
                    Logout
                </button>
            </div>
        );
    }
}

export default Sidebar