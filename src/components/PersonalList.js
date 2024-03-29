import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import getBaseURI from '../store';
import FindBar from './manager/FindBar';

class PersonalList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            roleList: '',
            isMounted: false
        };

    }

    componentDidMount() {

        if (!this.state.isMounted) {
            this.state.isMounted = true;
            this.updateUI();
        }
    }


    updateUI() {
        axios({
            method: 'get',
            url: `${getBaseURI()}/api/admin/Admin/GetUsersWithRole/GetUsersWithRole`,
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem("token")}`
            },
        }).then(function (response) {
            this.setState({
                roleList: response.data.map((item, index) => {
                    return <tr key={`row-personal-${index}`}>
                        <td>{item.name}</td>
                        <td>{item.mail}</td><td>
                            {item.roles.map((role, index) => {
                                return role !== "User" ? <label style={{ marginRight: "5px" }} key={`person-${item.name}-${index}`} className={`badge badge-${role === "Manager" ? "warning" : "danger"} font-weight-bold`}>{role}</label> : null
                            })}</td></tr>
                })
            })
        }.bind(this));
    }

    render() {
        return (
            <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <FindBar title="Поиск по персоналу"/>
                        <h4 className="card-title">{this.props.title}</h4>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th className="font-weight-bold">Никнейм</th>
                                    <th className="font-weight-bold">Почта</th>
                                    <th className="font-weight-bold">Роль</th>
                                </tr>
                            </thead>
                            <tbody className="admin-container">
                                {this.state.roleList}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

PersonalList.propTypes = {

};

export default PersonalList;