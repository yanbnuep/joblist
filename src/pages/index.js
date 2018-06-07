import React, {Component} from 'react';
import Navbar from '../componets/navbar/navbar';
import Joblist from '../componets/joblist/joblist';

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
    key: 'state',
    render: (text, record)=> (
        <a href="javascript:;">
            {record.state? "Done" : "Failed"}
        </a>
    )
}];

class Index extends Component {
    constructor(props){
        super(props);
        this.state = {
            controller_visible: false,
        }
    }
    render() {
        return (
            <div>
                <Navbar/>
                <Joblist columns={columns} dataSource={this.props.list}/>
            </div>
        );
    }
}


export default Index;