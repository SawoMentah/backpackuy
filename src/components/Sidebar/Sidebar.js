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
                <div className="contentSidebar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path
                            d="M20 19h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm16-14v22h-24v-22h24zm-2 6h-20v14h20v-14zm-8 8h-4v4h4v-4zm-6-6h-4v4h4v-4z"/>
                    </svg>
                </div>
            </div>
        );
    }
}

export default Sidebar