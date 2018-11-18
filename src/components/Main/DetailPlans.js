import React, {Component} from 'react';
import Sidebar from "../Sidebar/Sidebar";
import GridLayout from 'react-grid-layout';
import axios from "axios";
import {BASE_URL} from "../Constant/Constant";
import {Link, Redirect} from "react-router-dom";
import RightBar from "../Sidebar/RightBar";
import CurrencyFormat from "react-currency-format";

let gambar;

class DetailPlans extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idPlan: window.location.pathname.split("/")[2],
            redirect: false,
            loading: true,
            layout: [],
            namaWisata: '',
            idAgenda: '',
            emptyRight: true,
            loadingRight: true,
            namaDestinasi: [],
            info: [],
            harga: [],
            day1: [],
            day2: [],
            day3: [],
            day4: [],
        };
        this.layoutChange = this.layoutChange.bind(this);
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
            });
            axios({
                baseURL: BASE_URL,
                url: 'plan/get/detail',
                method: 'POST',
                data: {
                    _id: this.state.idPlan
                }
            }).then(resp => {
                this.setState({
                    namaWisata: resp.data.data.Destinasi
                });
            });
            axios({
                baseURL: BASE_URL,
                url: 'agenda/list',
                method: 'POST',
                data: {
                    id_detail: this.state.idPlan
                }
            }).then(resp => {
                console.log(resp.data);
                this.setState({
                    layout: this.state.layout.concat(resp.data.data.position.map(a => {
                        return {
                            i: a.i, x: a.x, y: a.y, w: a.w, h: a.h, minW: 1, minH: 1, maxH: 2
                        }
                    })),
                    namaDestinasi: this.state.namaDestinasi.concat(resp.data.data.position.map(a => {
                        return a.Destinasi
                    })),
                    harga: this.state.harga.concat(resp.data.data.position.map(a => {
                        return a.Harga
                    })),
                    idAgenda: resp.data.data._id,
                    loading: false
                })
            }).catch(err => {
                console.log(err)
            })

        } else {
            this.setState({
                redirect: true
            });
        }
    }

    layoutChange(layout) {
        if (!this.state.loading) {
            axios({
                baseURL: BASE_URL,
                url: 'agenda/update',
                method: 'POST',
                data: {
                    _id: this.state.idAgenda,
                    position: layout.map((a, i) => {
                        return {
                            "Destinasi": this.state.namaDestinasi[i],
                            "Harga": this.state.harga[i],
                            "i": a.i,
                            "x": a.x,
                            "y": a.y,
                            "w": a.w,
                            "h": a.h
                        }
                    })
                }
            }).then(resp => {
                const position = resp.data.data.position;
                const jumlahd1 = position.filter((position) => {
                    return position.x == 0;
                }).map(a => {
                    return a.Harga
                });

                const jumlahd2 = position.filter((position) => {
                    return position.x == 1;
                }).map(a => {
                    return a.Harga
                });

                const jumlahd3 = position.filter((position) => {
                    return position.x == 2;
                }).map(a => {
                    return a.Harga
                });

                const jumlahd4 = position.filter((position) => {
                    return position.x == 3;
                }).map(a => {
                    return a.Harga
                });
                this.setState({
                    day1: jumlahd1,
                    day2: jumlahd2,
                    day3: jumlahd3,
                    day4: jumlahd4,
                })
            })
        }

    }


    detailClicked(destinasi) {
        this.setState({
            loadingRight: true,
        });
        axios({
            baseURL: BASE_URL,
            url: '/info/get',
            method: 'POST',
            data: {
                nama: destinasi
            }
        }).then(resp => {
            console.log(resp.data.data);
            this.setState({
                info: resp.data.data,
                loadingRight: false,
                emptyRight: false
            })
        })
    }

    componentWillUnmount() {
        this.setState({
            idPlan: window.location.pathname.split("/")[2],
            redirect: false,
            loading: true,
            layout: [],
            namaWisata: '',
            idAgenda: '',
            emptyRight: true,
            loadingRight: true,
            namaDestinasi: [],
            info: [],
            harga: [],
            day1: [],
            day2: [],
            day3: [],
            day4: [],
        })
    }

    render() {
        if (this.state.redirect) {
            return (
                <Redirect to={{pathname: '/login'}}/>
            )
        }
        if (this.state.loading) {
            return (
                <div className="lds-ripple">
                    <div></div>
                    <div></div>
                </div>
            )
        } else {
            document.body.style.backgroundColor = "#eee";
            return (
                <div style={{background: "#eee", minHeight: "100vh"}}>
                    <Sidebar gantiLagi={nama => this.props.gantiNama(nama)}/>
                    <RightBar empty={this.state.emptyRight} loading={this.state.loadingRight} info={this.state.info}/>
                    <div className="containerMain">
                        <section className="headerDetail">
                            <Link to="/dashboard">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#5e5e5e" width="30" height="30"
                                     viewBox="0 0 24 24">
                                    <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/>
                                </svg>
                            </Link>

                        </section>
                        <div className="headerTitle" style={{width: window.innerWidth - 520}}>
                            <h2>{this.state.namaWisata} Plan Trip</h2>
                        </div>
                        <section className="mainDetail">

                            <div className="row" style={{minWidth: 1920 - 520}}>
                                <div className="col-12 dayTotal">
                                    <p>Total <CurrencyFormat value={this.state.harga.reduce((a, b) => a + b, 0)}
                                                             displayType={'text'} thousandSeparator={true}
                                                             prefix={'Rp'}/></p>
                                </div>
                                <div className="col-3">
                                    <div className="dayPlanner">
                                        <h2>Day 1</h2>
                                        <p><CurrencyFormat value={this.state.day1.reduce((a, b) => a + b, 0)}
                                                           displayType={'text'} thousandSeparator={true} prefix={'Rp'}/>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="dayPlanner">
                                        <h2>Day 2</h2>
                                        <p><CurrencyFormat value={this.state.day2.reduce((a, b) => a + b, 0)}
                                                           displayType={'text'} thousandSeparator={true} prefix={'Rp'}/>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="dayPlanner">
                                        <h2>Day 3</h2>
                                        <p><CurrencyFormat value={this.state.day3.reduce((a, b) => a + b, 0)}
                                                           displayType={'text'} thousandSeparator={true} prefix={'Rp'}/>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="dayPlanner">
                                        <h2>Day 4</h2>
                                        <p><CurrencyFormat value={this.state.day4.reduce((a, b) => a + b, 0)}
                                                           displayType={'text'} thousandSeparator={true} prefix={'Rp'}/>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <GridLayout classname="layout container" layout={this.state.layout} cols={4} rowHeight={200}
                                        width={1920 - 520}
                                        margin={[16, 16]}
                                        isResizable={false}
                                        onLayoutChange={(layout) => this.layoutChange(layout)}
                                        style={{minHeight: "900px"}}>
                                {this.state.layout.map((a, i) => {
                                    return (
                                        <div key={a.i}>
                                            <div className="cardPlanTimeline">
                                                <div className="bgCardPlan">
                                                </div>
                                                <span>{this.state.namaDestinasi[i]}</span>
                                                <button className="btn btn-primary"
                                                        onClick={() => this.detailClicked(this.state.namaDestinasi[i])}>Detail
                                                </button>
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
}

export default DetailPlans

