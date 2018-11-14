import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="footerContainer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mainFooter">
                            <h4>Backpackuy <span>Website made By Absurd Division </span></h4>
                        </div>
                        <div className="col-md-6 secondFooter">
                            <p>Special Thanks to SMK Telkom Malang</p>
                        </div>
                    </div>
                    <p>Copyright &copy; Absurd Division 2018</p>
                </div>
            </div>
        );
    }
}

export default Footer