import React, {Component} from 'react';
import axios from 'axios';
import {BASE_URL} from "../Constant/LandingConstant";

class ModalAddPlans extends Component {
    constructor(props) {
        super(props);
        console.log(localStorage.getItem("profil"));
        this.state = {
            dataProps: {},
            provinsi: '',
            kota: '',
            tanggalAwal: '',
            tanggalAkhir: '',
            createdOn: '',
            toKota: false
        }
    }

    renderIsiModal() {
        const {provinsi, kota, tanggalAwal, toKota} = this.state;
        if (provinsi === '' && kota === '' && tanggalAwal === '') {
            return (
                <div className="container containerProvinsi">
                    <div className="row">
                        {this.props.dataProvince.map((a, i) => {
                            return (
                                <div className="col-md-4 addPlanText" key={i} onClick={() => {
                                    this.setState({
                                        provinsi: a.Provinsi,
                                        toKota: true,
                                        dataProps: {...this.state.dataProps[i], a}
                                    });
                                }}>
                                    <p>{a.Provinsi}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )
        } else if (toKota) {
            console.log(this.state.dataProps);
            return (
                <div className="container containerProvinsi">
                    <div className="row">
                        {this.state.dataProps.a.Kota.map((a, i) => {
                            return (
                                <div className="col-md-4 addPlanText" key={i} onClick={() => {
                                    this.setState({
                                        kota: a.Nama
                                    });
                                    axios({
                                        baseURL: BASE_URL,
                                        url: '/plan/add',
                                        method: 'POST',
                                        data: {
                                            id_user: JSON.parse(localStorage.getItem("profil")).data._id,
                                            Destinasi: a.Nama,
                                            TanggalAwal: "2018-02-01",
                                            TanggalAkhir: "2018-02-03",
                                        }
                                    }).then(resp => {
                                        console.log(resp);
                                        this.props.forceUpdate(resp.data);
                                    }).catch(err => {
                                        console.log(err)
                                    })
                                }}>
                                    <p>{a.Nama}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )
        }
    }

    saveToDB() {

    }

    render() {
        return (
            <div className="modal fade" id="modalAddPlans" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content modalContainer">

                        <div className="bgAddPlan">
                            <button type="button" id="buttonHideModal" className="close" data-dismiss="modal"
                                    aria-label="Close" onClick={() => {
                                this.setState({
                                    dataProps: {},
                                    provinsi: '',
                                    kota: '',
                                    tanggalAwal: '',
                                    tanggalAkhir: '',
                                    createdOn: '',
                                    toKota: false
                                })
                            }}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="contentAddPlan">
                            <h1>Where Would You Like To Go?</h1>
                        </div>
                        {this.renderIsiModal()}
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalAddPlans