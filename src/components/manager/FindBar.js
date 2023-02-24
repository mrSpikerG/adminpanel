import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FindBar extends Component {
    render() {
        return (
            <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <div className="page-header">
                            <h3 className="page-title"> Поиск по товарам </h3>
                        </div>
                        <input onChange={this.props.textHandler} type="text" className="form-control col-lg-12 grid-margin stretch-card" id="manager-search-bar" placeholder="Название" />
                    </div>
                </div>
            </div>
        );
    }
}

FindBar.propTypes = {

};

export default FindBar;