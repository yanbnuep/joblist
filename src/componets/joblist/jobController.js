import React from 'react';
import {Modal, Button} from 'antd';

class JobController extends React.Component {
    render() {
        return <div>
            <a onClick={this.props.handleClick}>
                {this.props.state? "Done":"Failed"}
            </a>
            <Modal
                title="Job Detail"
                visible={this.props.visible}
                onOk = {this.props.handleOk}
                onCancel={this.props.handleCancel}
            >
                <p>Some content...</p>
            </Modal>
        </div>
    }
}

export default JobController;