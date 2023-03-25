import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import getBaseURI from '../../store';
class Confirm extends Component {

    deleteItemFunc(id) {

        axios({
            method: 'post',
            url: `${getBaseURI()}/api/Shop/Delete?id=${id}`,
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem("token")}`
            },
        }).then(function (response) {
            alert('Товар успешно удален');
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
                            <p style={{ color: "#3d464D", fontSize: "20px" }}>Действительно ли вы хотите удалить данный товар?</p>
                            <div >
                                <button id="login-button" onClick={() => { this.deleteItemFunc(this.props.deleteItem.id) }}>Я подтверждаю удаление</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Confirm.propTypes = {

};

export default Confirm;