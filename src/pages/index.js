import React, {Component} from 'react';
import Joblist from '../componets/joblist/joblist';
import axios from  'axios';
import {Link} from 'react-router-dom';
import {data} from '../componets/mock/mock';
const columns  = [{
    title: 'Job Title',
    dataIndex: 'Job_title',
    key: 'Job_title',
    width: 250,
},{
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    width: 200,
},{
    title: 'State',
    dataIndex: 'state',
    width: 200,
    key: 'key',
    render: (text, record)=> (
        <Link to={`detail/` + record.key}>
            {record.state? "Done" : "Failed"}
        </Link>
    )
}];

class Index extends Component {
    constructor(props){
        super(props);
        this.state = {
            controller_visible: false,
            list: []
        }
    }
    componentDidMount() {
        axios.get('localhost').then(function(data){
            this.setState({
                list: data['list']
            });

        }.bind(this));
    }
    render() {
        return (
            <div>
                <Joblist columns={columns} dataSource={this.state.list}/>
            </div>
        );
    }
}


export default Index;