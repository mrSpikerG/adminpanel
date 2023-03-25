import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import getBaseURI from '../../store';

class ShopAdd extends Component {


    constructor(props) {
        super(props);
        this.state = {
            title: '',
            picture: '',
            cost: '',
            categoryId: ''
        };
    }

    changeState = event => {
        if (event.target.id === "manager-shop-name") {
            this.setState({ title: event.target.value });
            return;
        }
        if (event.target.id === "manager-shop-cost") {
            this.setState({ cost: event.target.value });
            return;
        }
        if (event.target.id === "manager-shop-image") {
            this.setState({ picture: event.target.value });
            return;
        }
        if (event.target.id === "manager-shop-category") {
            this.setState({ categoryId: event.target.value });
            return;
        }
    }

    addShop() {

        if (this.state.title === '' || this.state.cost === '' || this.state.categoryId === '' || this.state.picture === '') {
            return;
        }

      

        axios({
            method: 'post',
            url: `${getBaseURI()}/api/Shop/Insert?name=${this.state.title}&image=${this.state.picture}&price=${this.state.cost}&categoryId=${this.state.categoryId}`,
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem("token")}`
            },
        }).then(function (response) {
            
            alert('Товар успешно добавлен');
        }.bind(this));


    }

    render() {
        return (
            <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <div className="page-header">
                            <h3 className="page-title"> Добавление товара </h3>
                        </div>
                        <input type="text" onChange={this.changeState.bind(this)} className="form-control col-lg-12 grid-margin stretch-card" id="manager-shop-name" placeholder="Название" />
                        <input type="text" onChange={this.changeState.bind(this)} className="form-control col-lg-12 grid-margin stretch-card" id="manager-shop-cost" placeholder="Цена " />
                        <input type="text" onChange={this.changeState.bind(this)} className="form-control col-lg-12 stretch-card" id="manager-shop-image" placeholder="Картинка " />
                        <p>используйте проверенные хостинги картинок к примеру imgur</p>
                        <input type="text" onChange={this.changeState.bind(this)} className="form-control col-lg-12 grid-margin stretch-card" id="manager-shop-category" placeholder="Id Категории " />
                        <button type="submit" onClick={this.addShop.bind(this)} className="btn btn-primary mr-2" id="manager-add-shop">Добавить</button>
                    </div>
                </div>
            </div>
        );
    }
}

ShopAdd.propTypes = {

};

export default ShopAdd;