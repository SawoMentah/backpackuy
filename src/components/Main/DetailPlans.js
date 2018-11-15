import React, {Component} from 'react';
import Sidebar from "../Sidebar/Sidebar";
import axios from "axios";
import {BASE_URL} from "../Constant/LandingConstant";
import {Redirect} from "react-router-dom";

class DetailPlans extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
    }

    componentDidMount() {
        if (localStorage.getItem("profil")) {
            axios({
                baseURL: BASE_URL,
                method: 'POST',
                url: '/user/check',
                data: {
                    token: JSON.parse(localStorage.getItem("profil")).token
                }
            }).then(resp => {
                if (!resp.data.login) {
                    this.setState({
                        redirect: true
                    });
                }
            }).catch(err => {
                console.log(err)
            })
        } else {
            this.setState({
                redirect: true
            });
        }
    }

    render() {
        if (this.state.redirect) {
            return (
                <Redirect to={{pathname: '/login'}}/>
            )
        }
        return (
            <div style={{background: "#eee", height: "100vh"}}>
                <Sidebar gantiLagi={nama => this.props.gantiNama(nama)}/>
                <h2>Halo</h2>
            </div>
        );
    }
}

export default DetailPlans

