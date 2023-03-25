import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import getBaseURI from '../store';
import Form from 'react-bootstrap/Form';

class RoleSetup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            role: '',
            roles: ''
        };
    }

    removeRole() {
        if (this.state.username === '' || this.state.role === '') {
            return;
        }

        axios({
            method: 'post',
            url: `${getBaseURI()}/api/Auth/SetRole/setAdmin?username=${this.state.username}&role=${this.state.role}`,
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem("token")}`
            },
        }).then(function (response) {
            alert("Роль успешно добавлена");
        }.bind(this));


    }

    addRole() {
        if (this.state.username === '' || this.state.role === '') {
            return;
        }

        axios({
            method: 'post',
            url: `${getBaseURI()}/api/admin/Admin/RemoveRole/removeAdmin?username=${this.state.username}&role=${this.state.role}`,
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem("token")}`
            },
        }).then(function (response) {
            alert("Роль успешно удалена")
        }.bind(this));
    }

    changeState = event => {
        if (event.target.id === "admin-username") {
            this.setState({ username: event.target.value });
        } else {
            this.setState({ role: event.target.value });
        }
    }

    componentDidMount(){
        axios({
            method: 'get',
            url: `${getBaseURI()}/api/admin/Admin/GetAllRoles/acl/getRoles`,
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem("token")}`
            },
        }).then(function (response) {
            console.log(response.data);
            this.setState({roles:response.data.map((role,index)=>{return role.name==="User"?null:<option value={role.name}>{role.name}</option>})})
            
        }.bind(this));
    }


    render() {
        return (
            <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <div className="page-header">
                            <h3 className="page-title"> Настройки ролей </h3>
                        </div>
                        <input type="text" onChange={this.changeState.bind(this)} className="form-control col-lg-12 grid-margin stretch-card" id="admin-username" placeholder="Никнейм" />
                        <Form.Control onChange={this.changeState.bind(this)} defaultValue="" id="admin-role" style={{ marginBottom: "20px" }} as="select">
                            <option value={""} disabled>Выберите Роль</option>
                            {this.state.roles}

                        </Form.Control>
                        <button type="submit" onClick={this.removeRole.bind(this)} className="btn btn-primary mr-2" id="admin-add-role">Добавить</button>
                        <button type="submit" onClick={this.addRole.bind(this)} className="btn btn-primary mr-2" id="admin-remove-role">Удалить</button>
                    </div>
                </div>
            </div>
        );
    }
}

RoleSetup.propTypes = {

};

export default RoleSetup;