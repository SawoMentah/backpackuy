import React, {Component} from 'react';
import {Link} from "react-router-dom";

class CardPlans extends Component {
    render() {
        const {idDestinasi, index, title, stateDelete} = this.props;
        return (
            <div className="cardPlans">
                <button type="button" className="close" style={{margin: "8px"}} data-toggle="modal"
                        data-target="#modalConfirmDelete" onClick={() => {
                    stateDelete(idDestinasi, index);
                }}>
                    <span aria-hidden="true">&times;</span>
                </button>
                <Link to={{pathname: `/dashboard/${idDestinasi}`}}>
                    <div className="plansBg">

                    </div>
                    <div className="plansBg2">

                    </div>
                    <div className="textPlans">
                        <h4>{title}</h4>
                    </div>
                </Link>
            </div>
        );
    }
}
export default CardPlans