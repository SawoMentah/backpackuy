import React, {Component} from 'react';
import Landing from "./components/Landing";
import {Route, Switch} from 'react-router-dom';
import Login from "./components/Login/Login";
import posed, {PoseGroup} from 'react-pose';
import Register from "./components/Register/Register";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main";
import './assets/css/style.css'
import DetailPlans from "./components/Main/DetailPlans";
import AboutUs from "./components/LandingSections/AboutUs";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: ''
        };
    }

    changeFullName(nama) {
        this.setState({
            fullName: nama
        })
    }

    renderNavbar() {
        const pathname = window.location.pathname;
        switch (pathname) {
            case "/":
                return null;
            case "/login":
                return <Navbar login={true} nama={this.state.fullName} gantiNama={nama => this.changeFullName(nama)}/>;
            case "/register":
                return <Navbar login={true} nama={this.state.fullName} gantiNama={nama => this.changeFullName(nama)}/>;
            case "/dashboard":
                return <Navbar dashboard={true} nama={this.state.fullName}
                               gantiNama={nama => this.changeFullName(nama)}/>;
            case "/about":
                return <Navbar about={true} nama={this.state.fullName} gantiNama={nama => this.changeFullName(nama)}/>;
            default:
                if (pathname.includes("/dashboard")) {
                    return <Navbar dashboard={true} nama={this.state.fullName}
                                   gantiNama={nama => this.changeFullName(nama)}/>
                } else {
                    return <Navbar nama={this.state.fullName} gantiNama={nama => this.changeFullName(nama)}/>
                }

        }

    }
  render() {
      const RoutesContainer = posed.div({
          enter: {opacity: 1, delay: 400, beforeChildren: true},
          exit: {opacity: 0}
      });
    return (
        <div>
            {this.renderNavbar()}
            <Route
                render={({location}) => {
                    return (
                        <PoseGroup>
                            <RoutesContainer key={location.pathname}>
                                <Switch location={location}>
                                    <Route exact path='/' component={Landing} key="home"/>
                                    <Route exact path='/dashboard'
                                           render={() => <Main gantiNama={nama => this.changeFullName(nama)}/>}
                                           key="main"/>
                                    <Route exact path='/dashboard/:planId'
                                           render={() => <DetailPlans gantiNama={nama => this.changeFullName(nama)}/>}
                                           key="planDetail"/>
                                    <Route exact path='/login' render={() => <Login location={location}
                                                                                    gantiNama={nama => this.changeFullName(nama)}/>}
                                           onEnter={{state: {afterRegister: false}}} key="login"/>
                                    <Route exact path="/about" component={AboutUs} key="about"/>
                                    <Route exact path='/register' render={() => <Register/>} key="register"/>
                                </Switch>
                            </RoutesContainer>
                        </PoseGroup>
                    )
                }}/>
        </div>

    );
  }
}

export default App;
