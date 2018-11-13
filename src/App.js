import React, {Component} from 'react';
import './assets/css/style.css';
import Landing from "./components/Landing";
import {Route, Switch} from 'react-router-dom';
import Footer from "./components/Footer/Footer";


class App extends Component {
  render() {
    return (
        <Switch>
            <Route exact path='/' component={Landing}/>
            <Route path='/hali' component={Footer}/>
        </Switch>
    );
  }
}

export default App;
