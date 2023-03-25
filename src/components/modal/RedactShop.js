import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import getBaseURI from '../../store';
class RedactShop extends Component {

    constructor(props) {
        super(props);
        this.state = {
            updater: 0,
        };
    }

    handleInput(e) {
        if (e.target.id === 'redact-shop-name') {
            this.props.redactItem.name = e.target.value;
            this.setState({ updater: this.state.updater+1 });
            return;
        }
        if (e.target.id === 'redact-shop-price') {
            this.props.redactItem.price = e.target.value;
            this.setState({ updater: this.state.updater+1 });
            return;
        }
        if (e.target.id === 'redact-shop-image') {
            this.props.redactItem.image = e.target.value;
            this.setState({ updater: this.state.updater+1 });
            return;
        }
        
        this.props.curentCategory[0] = e.target.value;
        this.setState({ updater: this.state.updater+1 });
    }

    updateValues() {
      
        axios({
            method: 'post',
            url: `${getBaseURI()}/api/Shop/UpdateWithCategory?Id=${this.props.redactItem.id}&Name=${this.props.redactItem.name}&Image=${this.props.redactItem.image}&Price=${this.props.redactItem.price}&categoryId=${this.props.curentCategory[0]}`,
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem("token")}`
            },
        }).then(function (response) {
            alert('Товар успешно изменён');
            this.props.updateList();
        }.bind(this));
        this.props.closeModal()
    }

    render() {
        return (
            <div className={`modal ${this.props.active}`}>
                <div className='modal__content'>
                    <div className="login-page">

                        <span className="admin-icon-list"><i className={`mdi mdi-window-close menu-icon`} onClick={() => this.props.closeModal()} /></span>
                        <div className="form">
                            <div>
                                <input type="text" onChange={this.handleInput.bind(this)} id="redact-shop-name" placeholder='Название' value={this.props.redactItem.name} />
                                <input type="number" onChange={this.handleInput.bind(this)} id="redact-shop-price" placeholder='Цена' value={this.props.redactItem.price} />
                                <input type="text" onChange={this.handleInput.bind(this)} id="redact-shop-image" placeholder='Картинка' value={this.props.redactItem.image} />

                                   
                                <Form.Control onChange={this.handleInput.bind(this)} id="redact-shop-categories" value={this.props.curentCategory[0]} style={{ marginBottom: "20px" }} as="select">
                                    <option disabled>Выберите категорию</option>
                                    {this.props.categories}

                                </Form.Control>
                                <button onClick={this.updateValues.bind(this)} id="login-button">Я подтверждаю изменения</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

RedactShop.propTypes = {

};

export default RedactShop;