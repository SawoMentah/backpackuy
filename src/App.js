import React, {Component} from 'react';
import './assets/css/style.css';
import Landing from "./components/Landing";
import {Route, Switch} from 'react-router-dom';
import Login from "./components/Login/Login";
import posed, {PoseGroup} from 'react-pose';
import Register from "./components/Register/Register";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main";


class App extends Component {
  render() {
      const RoutesContainer = posed.div({
          enter: {opacity: 1, delay: 400, beforeChildren: true},
          exit: {opacity: 0}
      });
      const pathname = window.location.pathname;

      function renderNavbar() {
          switch (pathname) {
              case "/":
                  return null;
              case "/login":
                  return <Navbar login={true}/>;
              case "/register":
                  return <Navbar login={true}/>;
              default:
                  return <Navbar/>
          }
      }
    return (
        <div>
            {renderNavbar()}
            <Route
                render={({location}) => {
                    return (
                        <PoseGroup>
                            <RoutesContainer key={location.pathname}>
                                <Switch location={location}>
                                    <Route exact path='/' component={Landing} key="home"/>
                                    <Route exact path='/dashboard' component={Main} key="main"/>
                                    <Route exact path='/login' render={() => <Login/>} key="login"/>
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
