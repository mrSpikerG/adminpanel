import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';
import getBaseURI from '../store';
class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
            passwordShow: 'password'
        };
    }

    saveAndEnter() {
        if (this.state.login === '' || this.state.password === '') {
            return;
        }

        axios({
            method: 'post',
            url: `${getBaseURI()}/api/Auth/Login/login?UserName=${this.state.login}&Password=${this.state.password}`,
        }).then(function (response) {
            alert('Добро пожаловать');
            sessionStorage.setItem("token", response.data.token);
            sessionStorage.setItem("username", response.data.userName);
        });

    }

    changeState = event => {
        if (event.target.id === "admin-username") {
            this.setState({ login: event.target.value });
        } else {
            this.setState({ password: event.target.value });
        }
    }

    showPassword = event => {
        if(event.target.checked){
            this.setState({passwordShow: "text"});
            return;
        }
        this.setState({passwordShow: "password"});
    }

    render() {
        return (
            <div className='loginpage'>
                <div style={{minWidth:"400px"}} className="col-lg-2 grid-margin stretch-card">
                    <div  className="card">
                        <div className="card-body">
                            <div className="page-header">
                                <h3 className="page-title"> Введите данные </h3>
                            </div>
                            <input type="text" onChange={this.changeState.bind(this)} className="form-control col-lg-12 grid-margin stretch-card" id="admin-username" placeholder="Никнейм" />
                            <input type={this.state.passwordShow} onChange={this.changeState.bind(this)} className="form-control col-lg-12 grid-margin stretch-card" id="admin-password" placeholder="Пароль" />
                            <div className="col-lg-12 grid-margin stretch-card">
                                <input onClick={this.showPassword.bind(this)} style={{marginRight:"15px"}} type="checkbox" /> Показывать пароль?
                            </div>
                            <Link to="/forgot">
                            <p style={{textAlign:"end"}} className="col-lg-12 grid-margin stretch-card">Забыл пароль?</p> </Link>
                            <button type="submit" onClick={this.saveAndEnter.bind(this)} className="btn btn-primary" id="admin-add-role">Войти</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

LoginPage.propTypes = {

};

export default LoginPage;