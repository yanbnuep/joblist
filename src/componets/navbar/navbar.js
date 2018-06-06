import React, {Component} from 'react';
import {Menu, Row, Col} from 'antd';
import logo from '../../assets/nxlogo170_48.png';
import style from './navbar.css';
class Navbar extends Component {
    render() {
        return (
            <Row>
                <Col xs={24} sm={24} md={6} lg={5} xl={4}>
                    <a href="/" id="logo" className={"logo"} style={style.logo}>
                        <img alt="logo" src={logo}/>
                    </a>
                </Col>
                <Col xs={0} sm={0} md={18} lg={19} xl={20}>
                <Menu theme="dark"
                      mode="horizontal"
                      style={{lineHeight: '64px'}}
                >
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </Col>
            </Row>
        );
    }
}

export default Navbar;