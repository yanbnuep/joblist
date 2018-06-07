import React, {Component} from 'react';
import Joblist from '../componets/joblist/joblist';
import $ from "jquery";
import {Link} from 'react-router-dom'

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
            <div>
                <Joblist columns={columns} dataSource={this.state.list}/>
            </div>
        );
    }
}


export default Index;