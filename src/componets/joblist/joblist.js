import React from 'react';
import { Table } from 'antd';

class Joblist extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            showPanel : false
        }
    }

    render(){
        return (<Table columns = {this.props.columns} dataSource={this.props.dataSource} pagination={{ pageSize: 50 }} scroll={{ y: 750 }}/>)
    };
}


export default Joblist;