import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CategoryList from '../components/manager/CategoryList';
import CategoryAdd from '../components/manager/CategoryAdd';
import CategoryRemove from '../components/manager/CategoryRemove';
import FindBar from '../components/manager/FindBar';

class CategoryManage extends Component {


    render() {
        return (
            <div>
                <div className="page-header">
                    <h3 className="page-title"> Категории </h3>
                </div>
               
                <CategoryList />
                <CategoryAdd />
            
            </div>
        );
    }
}

CategoryManage.propTypes = {

};

export default CategoryManage;