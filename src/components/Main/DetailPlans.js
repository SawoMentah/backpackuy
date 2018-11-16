import React, {Component} from 'react';
import Sidebar from "../Sidebar/Sidebar";
import GridLayout from 'react-grid-layout';
import axios from "axios";
import {BASE_URL} from "../Constant/LandingConstant";
import {Link, Redirect} from "react-router-dom";
import RightBar from "../Sidebar/RightBar";

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
        const layout = [
            {i: 'w_oee_1', x: 0, y: 0, w: 6, h: 2, minW: 4, minH: 2, maxH: 2},
            {i: 'w_oee_2', x: 6, y: 3, w: 2, h: 2, minW: 4, minH: 2, maxH: 2},
        ];
        return (
            <div style={{background: "#eee", height: "100vh"}}>
                <Sidebar gantiLagi={nama => this.props.gantiNama(nama)}/>
                <RightBar/>
                <div className="containerMain" style={{marginRight: "380px"}}>
                    <section className="headerDetail">
                        <Link to="/dashboard">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#5e5e5e" width="30" height="30"
                                 viewBox="0 0 24 24">
                                <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/>
                            </svg>
                        </Link>
                        <h2>Malang</h2>
                    </section>

                    <section className="mainDetail">
                        <GridLayout classname="layout container" layout={layout} cols={10} rowHeight={30}
                                    width={window.innerWidth - 320} height={900}
                                    style={{background: 'red', maxHeight: "900px"}}>
                            <div key="w_oee_1">
                                <div className="cardPlanTimeline">
                                </div>
                            </div>
                            <div key="w_oee_2">
                                <div className="cardPlanTimeline">
                                </div>
                            </div>
                        </GridLayout>
                    </section>

                </div>

            </div>
        );
    }
}

export default DetailPlans

