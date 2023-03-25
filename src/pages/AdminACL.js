import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import SideBar from '../components/SideBar';
import TopBar from '../components/TopBar';
import PersonalList from '../components/PersonalList';
import RoleSetup from '../components/RoleSetup';
import getBaseURI from '../store';
class AdminACL extends Component {

    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: ''
        };
    }

    render() {
        return (

            <div>
                <div className="page-header">
                    <h3 className="page-title"> Персонал </h3>
                </div>
                <div className="row">

                    <PersonalList title="Персонал" />
                    {/* <PersonalList roleName="Manager" title="Менеджеры" /> */}

                    <RoleSetup />
                    
                </div>

            </div>

        );
    }
}

AdminACL.propTypes = {

};

export default AdminACL;