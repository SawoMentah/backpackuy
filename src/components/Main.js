import React, {Component} from 'react';
import Sidebar from "./Sidebar/Sidebar";
import CardPlans from "./Main/CardPlans";
import CardAdd from "./Main/CardAdd";
import ModalAddPlans from "./Main/ModalAddPlans";
import axios from "axios";
import {BASE_URL, UNSPLASH_BASE_URL} from "./Constant/Constant";
import {Redirect} from 'react-router-dom';
import ModalConfirmDelete from "./Main/ModalConfirmDelete";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            dataPlan: [],
            dataProvince: [],
            loading: true,
            err: false,
            urlGambar: '',
            id_hapus: '',
            index: 0,
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.getImage();
        if (localStorage.getItem("profil") !== null) {
            axios({
                baseURL: BASE_URL,
                method: 'POST',
                url: '/user/check',
                data: {
                    token: JSON.parse(localStorage.getItem("profil")).token
                }
            }).then(resp => {
                if (resp.data.login !== true) {
                    this.setState({
                        redirect: true
                    });
                    this.props.gantiNama('');
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
                });
            }).catch(() => {
                this.setState({
                    err: true
                });
            });
        } else {
            this.setState({
                redirect: true
            });
        }

        axios({
            baseURL: BASE_URL,
            url: '/api/provinsi'
        }).then(resp => {
            this.setState({
                dataProvince: this.state.dataProvince.concat(resp.data)
            });
        }).catch(err => {
            console.log(err)
        })

    }

    getImage() {
        axios({
            baseURL: UNSPLASH_BASE_URL,
            url: '/photos/random?page=1&query=landscape&orientation=landscape&client_id=8927155d86c8a4f2f7ddc93bf355113f0a9f52e96e945d873456023e60c4ca20'
        }).then(resp => {
            this.setState({
                urlGambar: resp.data.urls.regular
            })
        });
    }
    getDataAgain() {
        this.setState({
            err: false
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
        }).catch(() => {
            this.setState({
                err: true
            });
        });
        axios({
            baseURL: BASE_URL,
            url: '/api/provinsi'
        }).then(resp => {
            console.log(resp.data);
            this.setState({
                dataProvince: this.state.dataProvince.concat(resp.data)
            });
        }).catch(err => {
            console.log(err)
        })
    }
    forceRender(data) {
        this.setState({
            dataPlan: [data, ...this.state.dataPlan],
        });
        document.getElementById("buttonHideModal").click()
    }

    removeItem(index) {
        this.setState((prevState) => ({
            dataPlan: prevState.dataPlan.filter((_, i) => i !== index)
        }));
        if (document.getElementById("buttonModalDeleteClose") !== null) {
            document.getElementById("buttonModalDeleteClose").click();
        } else {
            const elements = document.getElementsByClassName("modal-open");
            while (elements.length > 0) {
                elements[0].classList.remove("modal-open");
            }
            const elements2 = document.getElementsByClassName("modal-backdrop");
            while (elements2.length > 0) {
                elements2[0].classList.remove("modal-backdrop");
            }
        }

    }

    stateDelete(id_hapus, index) {
        this.setState({
            id_hapus,
            index
        })
    }
    renderIsi() {
        if (this.state.loading && !this.state.err) {
            return (
                <p>Loading...</p>
            )
        } else if (this.state.loading && this.state.err) {
            return (
                <div className="errorPage" style={{height: window.innerHeight}}>
                    <button onClick={() => this.getDataAgain()}>Try Again</button>
                </div>
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
                                <CardPlans stateDelete={(id_hapus, index) => this.stateDelete(id_hapus, index)}
                                           title={a.Destinasi} a={a} index={i} idDestinasi={a._id}/>
                            </div>
                        )
                    })}
                </div>
            )
        }
    }
    render() {
        if (this.state.redirect) {
            this.props.gantiNama('');
            localStorage.removeItem("profil");
            return (
                <Redirect to={{pathname: '/login'}}/>
            )
        }
        document.body.style.background = "#eee";
        return (
            <div style={{background: "#eee", height: "100vh"}}>
                <Sidebar gantiLagi={nama => this.props.gantiNama(nama)}/>
                <div className="containerMain">
                    <p>My Plans</p>
                    {this.renderIsi()}
                </div>
                <ModalAddPlans getImage={() => this.getImage()} urlGambar={this.state.urlGambar}
                               forceUpdate={(data => this.forceRender(data))} dataProvince={this.state.dataProvince}/>
                <ModalConfirmDelete index={this.state.index} idHapus={this.state.id_hapus}
                                    forceUpdate={(index => this.removeItem(index))}/>
            </div>
        );
    }
}

export default Main