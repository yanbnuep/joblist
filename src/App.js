import React, {Component} from 'react';
import Index from './pages/index';
import './App.css';
import $ from 'jquery';
require('./componets/mock/mock');

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }

    componentDidMount() {
        $.ajax({
            url: "localhost",
            dataType: 'json'
        }).done(function(data){
            this.setState({
                list: data['list']
            });

        }.bind(this));
    }

    render() {
        return (
            <div className="App">
                <Index list={this.state.list}/>
            </div>
        );
    }
}

export default App;
