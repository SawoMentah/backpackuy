import React, {Component} from 'react';
import './assets/css/style.css';
import Landing from "./components/Landing";
import {Route, Switch} from 'react-router-dom';
import Login from "./components/Login/Login";
import posed, {PoseGroup} from 'react-pose';


class App extends Component {
  render() {
      const RoutesContainer = posed.div({
          enter: {opacity: 1, delay: 400, beforeChildren: true},
          exit: {opacity: 0}
      });

    return (
        <Route
            render={({location}) => (
                <PoseGroup>
                    <RoutesContainer key={location.pathname}>
                        <Switch location={location}>
                            <Route exact path='/' component={Landing} key="home"/>
                            <Route exact path='/login' render={() => <Login/>} key="login"/>
                        </Switch>
                    </RoutesContainer>
                </PoseGroup>
            )}/>
    );
  }
}

export default App;
