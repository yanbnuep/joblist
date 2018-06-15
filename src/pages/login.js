import './css/login.css';
import React from 'react';
import axios from 'axios';
import qs from 'qs';
import { Form, Input, Icon, Button } from 'antd';
const FormItem = Form.Item;
class Login extends React.Component {
    handleSubmit = function(e){
        e.preventDefault();
        axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
        axios.post('http://app.airmacau.com.mo/etl/api/login.ashx',qs.stringify({uid:'04035',pwd:'04035pwd'})).then(
            function(response){
                const sid = response.data.SID;
                if(sid){

                }
            }
        ).catch(function(error){
            console.log(error)
        });
    };



    render(){
        return (<Form onSubmit={this.handleSubmit} className="login-form nx-login">
            <FormItem>
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            </FormItem>
            <FormItem>
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            </FormItem>
            <FormItem>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Login
                </Button>
            </FormItem>
        </Form>)
    }
}

export default Login;