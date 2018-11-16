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
        let layout;
        if (localStorage.getItem("layoutIni")) {
            console.log(localStorage.getItem("layoutIni"));
            layout = JSON.parse(localStorage.getItem("layoutIni"));
        } else {
            layout = [
                {i: '1', x: 0, y: 0, w: 1, h: 2, minW: 1, minH: 2, maxH: 2},
                {i: '2', x: 1, y: 0, w: 1, h: 2, minW: 1, minH: 2, maxH: 2},
            ];
            localStorage.setItem("layoutIni", layout)
        }
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
                        <div className="row" style={{width: window.innerWidth - 520}}>
                            <div className="col-3">
                                <h2>Day 1</h2>
                            </div>
                            <div className="col-3">
                                <h2>Day 2</h2>
                            </div>
                            <div className="col-3">
                                <h2>Day 3</h2>
                            </div>
                            <div className="col-3">
                                <h2>Day 4</h2>
                            </div>
                        </div>
                        <GridLayout classname="layout container" layout={layout} cols={4} rowHeight={200}
                                    width={window.innerWidth - 520} height={900}
                                    margin={[16, 16]}
                                    isResizable={false}
                                    onLayoutChange={(layout) => {
                                        console.log(localStorage.getItem("layoutIni"));
                                        localStorage.setItem("layoutIni", JSON.stringify(layout))
                                    }}
                                    style={{maxHeight: "900px"}}>
                            <div key="1">
                                <div className="cardPlanTimeline">
                                </div>
                            </div>
                            <div key="2">
                                <div className="cardPlanTimeline">
                                    <div className="bgCardPlan">

                                    </div>
                                    <span>Halo</span>
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

