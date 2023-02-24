import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import SideBar from '../components/SideBar';
import TopBar from '../components/TopBar';
import PersonalList from '../components/PersonalList';
import RoleSetup from '../components/RoleSetup';

class AdminACL extends Component {

    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: ''
        };

        if (sessionStorage.getItem("token") === null) {

            window.location.href = window.location.protocol + "//" + "localhost:3002";
        }


        axios({
            method: 'post',
            url: `https://localhost:7020/api/Auth/CheckAdminAccess/checkAdminAccess`,
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem("token")}`
            },
        }).then(function (response) {

        }).catch(function (error) {
            alert('Недостаточно прав.');
            window.location = '../';
        });

    }

    render() {
        return (
            <div className="container-scroller">
                <TopBar />
                <div className="container-fluid page-body-wrapper">
                    <SideBar isAdmin/>
                    <div className="main-panel">
                        <div className="content-wrapper">
                            <div className="page-header">
                                <h3 className="page-title"> Персонал </h3>
                            </div>
                            <div className="row">

                                <PersonalList roleName="Admin" title="Администраторы"/>
                                <PersonalList roleName="Manager" title="Менеджеры"/>
                                
                                <RoleSetup />
                                {/* <div className="col-lg-12 grid-margin stretch-card">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="page-header">
                                                <h3 className="page-title"> Настройки ролей </h3>
                                            </div>
                                            <input type="text" className="form-control col-lg-12 grid-margin stretch-card" id="admin-username" placeholder="Никнейм" />
                                            <input type="text" className="form-control col-lg-12 grid-margin stretch-card" id="admin-role" placeholder="Роль" />
                                            <button type="submit" className="btn btn-primary mr-2" id="admin-add-role">Добавить</button>
                                            <button type="submit" className="btn btn-primary mr-2" id="admin-remove-role">Удалить</button>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                            {/* content-wrapper ends */}
                            
                        </div>
                        {/* main-panel ends */}
                    </div>
                    {/* page-body-wrapper ends */}
                </div>
            </div>
        );
    }
}

AdminACL.propTypes = {

};

export default AdminACL;