import React, {Component} from 'react';
import Sidebar from "../Sidebar/Sidebar";
import GridLayout from 'react-grid-layout';
import axios from "axios";
import {BASE_URL} from "../Constant/Constant";
import {Link, Redirect} from "react-router-dom";
import RightBar from "../Sidebar/RightBar";

class DetailPlans extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            loading: true,
            layout: [{i: '1', x: 0, y: 0, w: 1, h: 1, minW: 1, minH: 1, maxH: 2, static: true},
                {i: '2', x: 1, y: 0, w: 1, h: 1, minW: 1, minH: 1, maxH: 2, static: true},
                {i: '3', x: 2, y: 0, w: 1, h: 1, minW: 1, minH: 1, maxH: 2, static: true},
                {i: '4', x: 3, y: 0, w: 1, h: 1, minW: 1, minH: 1, maxH: 2, static: true}],
            namaWisata: '',
            namaDestinasi: [],
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
        const idPlan = window.location.pathname.split("/")[2];
        axios({
            baseURL: BASE_URL,
            url: '/agenda/list',
            method: 'POST',
            data: {
                id_detail: idPlan
            }
        }).then(resp => {
            this.setState({
                layout: this.state.layout.concat(resp.data.data.position.map(a => {
                    return {i: a.i, x: a.x, y: a.y, w: a.w, h: a.h}
                })),
                namaDestinasi: this.state.namaDestinasi.concat(resp.data.data.position.map(a => {
                    return {
                        destinasi: a.Destinasi
                    }
                }))
            });
            axios({
                baseURL: BASE_URL,
                method: 'POST',
                url: '/plan/get/detail',
                data: {
                    _id: idPlan
                }
            }).then(resp => {
                console.log(resp);
                this.setState({
                    namaWisata: resp.data.data.Destinasi,
                    loading: false
                })
            })
        })
    }

    render() {
        if (this.state.loading) {
            return (
                <p>Loading ...</p>
            )
        }
        if (this.state.redirect) {
            return (
                <Redirect to={{pathname: '/login'}}/>
            )
        }
        let layout;
        // if (localStorage.getItem("layoutIni")) {
        //     console.log(localStorage.getItem("layoutIni"));
        //     layout = [
        //         {i: '1', x: 0, y: 0, w: 1, h: 1, minW: 1, minH: 1, maxH: 2, static: true},
        //         {i: '2', x: 1, y: 0, w: 1, h: 1, minW: 1, minH: 1, maxH: 2, static: true},
        //         {i: '3', x: 2, y: 0, w: 1, h: 1, minW: 1, minH: 1, maxH: 2, static: true},
        //         {i: '4', x: 3, y: 0, w: 1, h: 1, minW: 1, minH: 1, maxH: 2, static: true},
        //         {i: '5', x: 0, y: 1, w: 1, h: 2, minW: 1, minH: 2, maxH: 2},
        //         {i: '6', x: 1, y: 1, w: 1, h: 2, minW: 1, minH: 2, maxH: 2},
        //     ];
        // } else {
        //     layout = [
        //         {i: '1', x: 0, y: 0, w: 1, h: 1, minW: 1, minH: 1, maxH: 2, static: true},
        //         {i: '2', x: 1, y: 0, w: 1, h: 1, minW: 1, minH: 1, maxH: 2, static: true},
        //         {i: '3', x: 2, y: 0, w: 1, h: 1, minW: 1, minH: 1, maxH: 2, static: true},
        //         {i: '4', x: 3, y: 0, w: 1, h: 1, minW: 1, minH: 1, maxH: 2, static: true},
        //         {i: '5', x: 0, y: 1, w: 1, h: 2, minW: 1, minH: 2, maxH: 2},
        //         {i: '6', x: 1, y: 1, w: 1, h: 2, minW: 1, minH: 2, maxH: 2},
        //     ];
        //     localStorage.setItem("layoutIni", layout)
        // }
        console.log(this.state.layout);
        return (
            <div style={{background: "#eee", minHeight: "100vh"}}>
                <Sidebar gantiLagi={nama => this.props.gantiNama(nama)}/>
                <RightBar/>
                <div className="containerMain">
                    <section className="headerDetail">
                        <Link to="/dashboard">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#5e5e5e" width="30" height="30"
                                 viewBox="0 0 24 24">
                                <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/>
                            </svg>
                        </Link>
                        <h2>{this.state.namaWisata}</h2>
                    </section>

                    <section className="mainDetail">
                        <GridLayout classname="layout container" layout={this.state.layout} cols={4} rowHeight={100}
                                    width={window.innerWidth - 520}
                                    margin={[16, 16]}
                                    isResizable={false}
                                    onLayoutChange={(layout) => {
                                        console.log(layout);
                                        // console.log(JSON.parse(localStorage.getItem("layoutIni")));
                                        localStorage.setItem("layoutIni", JSON.stringify(layout))
                                    }}
                                    style={{maxHeight: "900px"}}>
                            <div key="1">
                                <div>
                                    <h2>Day 1</h2>
                                </div>
                            </div>
                            <div key="2">
                                <div>
                                    <h2>Day 1</h2>
                                </div>
                            </div>
                            <div key="3">
                                <div>
                                    <div>
                                        <h2>Day 3</h2>
                                    </div>
                                </div>
                            </div>
                            <div key="4">
                                <div>
                                    <div>
                                        <h2>Day 4</h2>
                                    </div>
                                </div>
                            </div>
                            {this.state.layout.map((a, i) => {
                                return (
                                    <div key={a.i}>
                                        <div>
                                            <div>
                                                <h2>{this.state.namaDestinasi[i].destinasi}</h2>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </GridLayout>
                    </section>

                </div>

            </div>
        );
    }
}

export default DetailPlans

