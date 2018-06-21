import '../../pages/css/login.css';
import React from 'react';
import { Form, Input, Icon, Button } from 'antd';
import { connect } from 'react-redux';
import { userActions } from '../actions';
const FormItem = Form.Item;

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const {name, value} = e.target;
        console.log(name, value);
        this.setState = ({[name]: value});
    }

    handleSubmit = function(e){
        e.preventDefault();
        const { username, password } = this.state;
        const {dispatch} = this.props;
        console.log(username , password);
        if(username && password){
            dispatch(userActions.login(username, password));
        }
    };

    render(){
        const { username, password } = this.state;
        return (<Form onSubmit={this.handleSubmit} className="login-form nx-login">
            <FormItem>
                <Input name="username" value={username} onChange={this.handleChange} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            </FormItem>
            <FormItem>
                <Input name="password"  value={password} onChange={this.handleChange} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            </FormItem>
            <FormItem>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Login
                </Button>
            </FormItem>
        </Form>)
    }
}

function mapStateToProps(state) {
    const {loggingIn} = state.authentication;
    return {
      loggingIn
    };
}

const connectedLoginPage = connect(mapStateToProps)(Login);


export { connectedLoginPage as Login };