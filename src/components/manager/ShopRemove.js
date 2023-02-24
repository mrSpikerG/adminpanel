import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class ShopRemove extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: ''
        };
    }

    changeState = event => {
        this.setState({ id: event.target.value });
    }

    removeShop() {

        if (this.state.id === '') {
            return;
        }

        axios({
            method: 'post',
            url: `https://localhost:7020/api/Shop/Delete?id=${this.state.id}`,
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem("token")}`
            },
        }).then(function (response) {
            alert('Товар успешно удален');
        }.bind(this));
    }

    render() {
        return (
            <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <div className="page-header">
                            <h3 className="page-title"> Удаление товара </h3>
                        </div>
                        <input type="number" onChange={this.changeState.bind(this)} className="form-control col-lg-12 grid-margin stretch-card" id="manager-shop-id" placeholder="Id" />
                        <button type="submit" onClick={this.removeShop.bind(this)} className="btn btn-primary mr-2" id="manager-remove-shop">Удалить</button>
                    </div>
                </div>
            </div>
        );
    }
}

ShopRemove.propTypes = {

};

export default ShopRemove;