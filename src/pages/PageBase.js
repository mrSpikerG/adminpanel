import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import SideBar from '../components/SideBar';
import TopBar from '../components/TopBar';
import axios from 'axios';
import getBaseURI from '../store';

class PageBase extends Component {
    
    checkPermission(){
        if (sessionStorage.getItem("token") === null) {
            window.location.href = window.location.protocol + "//" + "localhost:3002";
        }

        if(this.props.role==="All"){
            axios({
                method: 'post',
                url: `${getBaseURI()}/api/Auth/checkDashboardAccess/checkDashboardAccess`,
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem("token")}`
                },
            }).then(function (response) {
                
            }).catch(function (error) {
                alert('Недостаточно прав.');
                window.location = '../';
            });
            return;
        }

        axios({
            method: 'post',
            url: `${getBaseURI()}/api/Auth/CheckAccess/checkAccess?role=${this.props.role}`,
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
        this.checkPermission();
        return (
            <div className="container-scroller">
                <TopBar />
                <div className="container-fluid page-body-wrapper">
                    <SideBar isAdmin />
                    <div className="main-panel">
                        <div className="content-wrapper">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

PageBase.propTypes = {

};

export default PageBase;