import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StorageList from '../components/storage/StorageList';
import StorageAdd from '../components/storage/StorageAdd';

class Storage extends Component {
    render() {
        return (
            <div>
                <div className="page-header">
                    <h3 className="page-title"> Хранилище </h3>
                </div>
                <StorageList />
                <StorageAdd />
            </div>
        );
    }
}

Storage.propTypes = {

};

export default Storage;