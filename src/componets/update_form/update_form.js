import React from 'react';
import {Form,  DatePicker, Select} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

const formItemLayout = {
    labelCol: {
        xs: {span: 24},
        sm: {span: 8},
    },
    wrapperCol: {
        xs: {span: 24},
        sm: {span: 16},
    },
};

class Update_form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            action : "",
        }
    }
    handleActionChange = (e)=>{
        this.setState({action:e})
    };

    render() {


        return (<Form>
            <FormItem
                {...formItemLayout}
                label="Job date picker(tx_date)"
            >

                <DatePicker/>

            </FormItem>
            <FormItem {...formItemLayout}
                label="Job Action"
            >

                <Select
                    value={this.state.action}
                    onChange={this.handleActionChange}
                >
                    <Option value="ready">Ready</Option>
                    <Option value="done">Done</Option>
                </Select>

            </FormItem>
        </Form>);
    }
}

export default Update_form;