import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class CategoryRemove extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: ''
        };
    }

    changeState = event => {
        this.setState({ id: event.target.value });
    }

    removeCategory() {

        if (this.state.id === '') {
            return;
        }

        axios({
            method: 'post',
            url: `https://localhost:7020/api/Category/Delete?id=${this.state.id}`,
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem("token")}`
            },
        }).then(function (response) {
            alert('Категория успешно удалена');
        }.bind(this));
    }

    render() {
        return (
            <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <div className="page-header">
                            <h3 className="page-title"> Удаление категории </h3>
                        </div>
                        <input type="number" onChange={this.changeState.bind(this)} className="form-control col-lg-12 grid-margin stretch-card" id="manager-category-id" placeholder="Id" />
                        <button type="submit" onClick={this.removeCategory.bind(this)} className="btn btn-primary mr-2" id="manager-remove-category">Удалить</button>
                    </div>
                </div>
            </div>
        );
    }
}

CategoryRemove.propTypes = {

};

export default CategoryRemove;