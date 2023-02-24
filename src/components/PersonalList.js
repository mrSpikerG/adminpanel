import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

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
            axios({
                method: 'get',
                url: `https://localhost:7020/api/admin/Admin/GetUsersByRole?role=${this.props.roleName}`,
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem("token")}`
                },
            }).then(function (response) {
                console.log(response.data);
                this.setState({roleList: response.data.map((item,index)=>{ return <tr key={`row-${this.props.roleName}-${index}`}><td>{item.userName}</td><td>{item.email}</td><td><label className="badge badge-danger font-weight-bold">{this.props.roleName}</label></td></tr>})})
            }.bind(this));

        }
    }


    render() {
        return (
            <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
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