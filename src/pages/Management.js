import React, { Component } from 'react';
import '../style/modal.css'
import ShopList from '../components/manager/ShopList';
import ShopAdd from '../components/manager/ShopAdd';
import ShopRemove from '../components/manager/ShopRemove';
import FindBar from '../components/manager/FindBar';
import Confirm from '../components/modal/Confirm';

class Management extends Component {



    render() {
        return (
            <div>
                <div className="page-header">
                    <h3 className="page-title"> Товары </h3>
                </div>
                <div className="row">
                    
                    <ShopList />
                    <ShopAdd />
        
                </div>
            </div>
        );
    }
}

Management.propTypes = {

};

export default Management;