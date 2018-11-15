import React, {Component} from 'react';
import Sidebar from "./Sidebar/Sidebar";
import CardPlans from "./Main/CardPlans";
import CardAdd from "./Main/CardAdd";
import ModalAddPlans from "./Main/ModalAddPlans";
import axios from "axios";
import {BASE_URL} from "./Constant/LandingConstant";
import {Link, Redirect} from 'react-router-dom';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            dataPlan: [],
            loading: true,
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
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
            });

            axios({
                baseURL: BASE_URL,
                url: '/plan/get',
                method: 'POST',
                data: {
                    id_user: JSON.parse(localStorage.getItem("profil")).data._id
                }
            }).then(resp => {
                this.setState({
                    dataPlan: this.state.dataPlan.concat(resp.data),
                    loading: false
                })
            });
        } else {
            this.setState({
                redirect: true
            });
        }

    }

    renderIsi() {
        if (this.state.loading) {
            return (
                <p>Loading...</p>
            )
        } else {
            return (
                <div className="row">
                    <div className="col-md-4">
                        <CardAdd/>
                    </div>
                    {this.state.dataPlan.map((a, i) => {
                        return (
                            <div className="col-md-4" key={i}>
                                <Link to={{pathname: `/dashboard/${a._id}`}}>
                                    <CardPlans title={a.Destinasi}/>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            )
        }
    }
    render() {
        const profil = JSON.parse(localStorage.getItem("profil"));
        if (this.state.redirect) {
            return (
                <Redirect to={{pathname: '/login'}}/>
            )
        }
        return (
            <div style={{background: "#eee", height: "100vh"}}>
                <Sidebar gantiLagi={nama => this.props.gantiNama(nama)}/>
                <div className="containerMain">
                    <p>My Plans</p>
                    {this.renderIsi()}
                </div>
                <ModalAddPlans/>
            </div>
        );
    }
}

export default Main