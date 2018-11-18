import React, {Component} from 'react';
import {BASE_URL, colors} from "../Constant/Constant";
import posed from 'react-pose';
import Footer from "../Footer/Footer";
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom';
import bg from '../../assets/images/bglogin.png';


const height = window.innerHeight - 230;
const Form = posed.form({
    enter: {staggerChildren: 50}
});
const FormContent = posed.div({
    enter: {x: 0, opacity: 1},
    exit: {x: 50, opacity: 0}
});
const Header = posed.div({
    enter: {x: 0, opacity: 1},
    exit: {x: 50, opacity: 0}
});

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            redirect: false
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderAfterRegister = this.renderAfterRegister.bind(this);
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
                if (resp.data.login) {
                    this.setState({
                        redirect: true
                    });
                }
            }).catch(err => {
                console.log(err)
            })
        }
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        axios({
            url: '/user/signin',
            method: 'POST',
            baseURL: BASE_URL,
            data: {
                email: this.state.email,
                password: this.state.password
            }
        }).then(resp => {
            console.log(resp.data);
            localStorage.removeItem("profil");
            localStorage.setItem("profil", JSON.stringify(resp.data));
            console.log(localStorage.getItem("profil"));
            this.props.gantiNama(resp.data.data.fullName);
            this.setState({
                redirect: true
            });
            window.location.pathname = "/dashboard";
        }).catch(err => {
            console.log(err)
        });
    }


    renderAfterRegister() {
        if (this.props.location.state && this.props.location.state.afterRegister) {
            return (
                <div className="alert alert-success" role="alert">
                    Register Success, continue with login
                </div>
            )
        } else {
            return null
        }
    }
    render() {
        const {redirect} = this.state;

        if (redirect) {
            return <Redirect to={{
                pathname: '/dashboard'
            }}/>
        }
        document.body.style.backgroundColor = "white";
        if (window.innerWidth > 480) {
            document.body.style.backgroundImage = `url('${bg}')`;
        }
        document.body.style.backgroundSize = "90%";
        document.body.style.backgroundRepeat = "no-repeat";
        return (
            <section className="loginContainer">
                <div className="container" style={{minHeight: height}}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="bgLogin">

                            </div>
                        </div>
                        <div className="col-md-6 loginContent">
                            <Header>
                                <h2>Login <span style={{color: colors.primaryColor}}>Backpackuy</span></h2>
                                <p>Hello there, please login to continue using backpackuy</p>
                            </Header>
                            <Form onSubmit={this.handleSubmit}>
                                <FormContent className="form-group" key="formcontent1">
                                    {this.renderAfterRegister()}
                                    <label>Email address</label>
                                    <input type="email"
                                           key="email"
                                           className="form-control"
                                           name="email"
                                           value={this.state.email}
                                           onChange={this.handleInputChange}/>
                                </FormContent>
                                <FormContent className="form-group" key="formcontent2">
                                    <label>Password</label>
                                    <input type="password" key="password" className="form-control" name="password"
                                           value={this.state.password} onChange={this.handleInputChange}/>
                                </FormContent>
                                <Header>
                                    <button type="submit" className="btn btn-outline-primary">Login</button>
                                </Header>
                            </Form>
                            <p className="textLogReg">Don't have an account? <Link to="/register" style={{
                                color: colors.primaryColor,
                                fontWeight: 600
                            }}>Register Here</Link></p>
                        </div>
                    </div>
                </div>
                <Footer style={{
                    position: "absolute",
                    width: "100%",
                    bottom: 0
                }}/>
            </section>
        );
    }
}
export default Login