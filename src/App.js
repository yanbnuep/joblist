import React, {Component} from 'react';
import Index from './pages/index';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './componets/navbar/navbar';
import DetailView from './pages/detail';
import Login from './pages/login';

require('./componets/mock/mock');

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return (
            <div className="App">
                <Header/>
                <Router>
                    <div>
                        <Route exact path="/" component={Index}/>
                        <Route exact path="/detail/:id" component={DetailView}/>
                        <Route exact path="/login" component={Login}/>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
