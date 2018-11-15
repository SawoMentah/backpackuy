import React from 'react';

const ModalAddPlans = () => (
    <div className="modal fade" id="modalAddPlans" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content modalContainer">

                <div className="bgAddPlan">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="contentAddPlan">
                    <h1>Where Would You Like To Go?</h1>
                </div>
            </div>
        </div>
    </div>
);

export default ModalAddPlans