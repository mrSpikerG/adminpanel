import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import getBaseURI from '../../store';
class CategoryAdd extends Component {


    constructor(props) {
        super(props);
        this.state = {
            title: '',
            picture: ''
        };
    }

    changeState = event => {
        if (event.target.id === "manager-category-name") {
            this.setState({ title: event.target.value });
        } else {
            this.setState({ picture: event.target.value });
        }
    }

    addCategory() {

        if(this.state.title === '' || this.state.picture===''){
            return;
        }

        axios({
            method: 'post',
            url: `${getBaseURI()}/api/Category/Insert?name=${this.state.title}&image=${this.state.picture}`,
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem("token")}`
            },
        }).then(function (response) {
            alert("Категория успешно добавлена")
        }.bind(this));

       
    }

    render() {
        return (
            <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <div className="page-header">
                            <h3 className="page-title"> Добавление категории </h3>
                        </div>
                        <input type="text" onChange={this.changeState.bind(this)} className="form-control col-lg-12 grid-margin stretch-card" id="manager-category-name" placeholder="Название" />
                        <input type="text" onChange={this.changeState.bind(this)} className="form-control col-lg-12 stretch-card" id="manager-category-image" placeholder="Картинка " />
                        <p>используйте проверенные хостинги картинок к примеру imgur</p>
                        <button type="submit" onClick={this.addCategory.bind(this)} className="btn btn-primary mr-2" id="manager-add-category">Добавить</button>
                    </div>
                </div>
            </div>
        );
    }
}

CategoryAdd.propTypes = {

};

export default CategoryAdd;