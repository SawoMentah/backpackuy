import React from 'react';
import axios from 'axios';
import {BASE_URL} from "../Constant/Constant";

const ModalConfirmDelete = (props) => {
    const {index, idHapus, forceUpdate} = props;
    return (
        <div className="modal fade" id="modalConfirmDelete" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-sm modalDelete" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Confirm Delete</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"
                                id="buttonModalDeleteClose">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>Are you sure?</p>
                    </div>
                    <div className="row" style={{padding: "16px"}}>
                        <div className="col-6">
                            <button type="button" style={{width: "100%"}} className="btn btn-outline-primary"
                                    data-dismiss="modal">No
                            </button>
                        </div>
                        <div className="col-6">
                            <button type="button" style={{width: "100%"}} className="btn btn-primary" onClick={() => {
                                axios({
                                    baseURL: BASE_URL,
                                    url: '/plan/delete',
                                    method: "POST",
                                    data: {
                                        _id: idHapus
                                    }
                                }).then(() => {
                                    forceUpdate(index);
                                })
                            }}>Yes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalConfirmDelete;