import React, { Component } from 'react';

import axios from 'axios';
import getBaseURI from '../../store';
import Form from 'react-bootstrap/Form';
class ShopAdd extends Component {


    constructor(props) {
        super(props);
        this.state = {
            title: '',
            picture: '',
            cost: '',
            categoryId: '',
            categories: []
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
        if (event.target.id === "manager-shop-categories") {
            this.setState({ categoryId: event.target.value });
            return;
        }
    }
    componentDidMount() {
        this.getCategories();
    }
    getCategories(){
        axios({
            method: 'get',
            url: `${getBaseURI()}/api/Category/Get`,
        }).then(function (response) {
          
            this.setState({ categories: response.data.map((item, index) => { return <option key={`category-selects-${index}`} value={item.id}>{item.name}</option> }) });
        }.bind(this));
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
                        <Form.Control onChange={this.changeState.bind(this)} id="manager-shop-categories" defaultValue="" style={{ marginBottom: "20px" }} as="select">
                                    <option value="" disabled>Выберите категорию</option>
                                    {this.state.categories}
                                   
                                </Form.Control>
                        <button type="submit" onClick={this.addShop.bind(this)} className="btn btn-primary mr-2" id="manager-add-shop">Добавить</button>
                    </div>
                </div>
            </div>
        );
    }
}



export default ShopAdd;