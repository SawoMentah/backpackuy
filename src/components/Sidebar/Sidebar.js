import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

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
                <ReactTooltip/>
                <div className="contentSidebar">
                    <div data-tip="My Plans" place="top">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                             fill="#fbc531">
                            <path
                                d="M20 19h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm16-14v22h-24v-22h24zm-2 6h-20v14h20v-14zm-8 8h-4v4h4v-4zm-6-6h-4v4h4v-4z"/>
                        </svg>
                    </div>
                    <div className="logoutButton" data-tip="Logout">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#727272"
                             viewBox="0 0 24 24" onClick={() => {
                            localStorage.removeItem("profil");
                            this.props.gantiLagi('');
                            this.setState({
                                redirect: true
                            });
                        }}>
                            <path
                                d="M16 9v-4l8 7-8 7v-4h-8v-6h8zm-2 10v-.083c-1.178.685-2.542 1.083-4 1.083-4.411 0-8-3.589-8-8s3.589-8 8-8c1.458 0 2.822.398 4 1.083v-2.245c-1.226-.536-2.577-.838-4-.838-5.522 0-10 4.477-10 10s4.478 10 10 10c1.423 0 2.774-.302 4-.838v-2.162z"/>
                        </svg>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar