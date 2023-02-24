import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SideBar from '../components/SideBar';
import TopBar from '../components/TopBar';
import CategoryList from '../components/manager/CategoryList';
import CategoryAdd from '../components/manager/CategoryAdd';
import CategoryRemove from '../components/manager/CategoryRemove';
import ShopList from '../components/manager/ShopList';
import ShopAdd from '../components/manager/ShopAdd';
import ShopRemove from '../components/manager/ShopRemove';
import FindBar from '../components/manager/FindBar';

class Management extends Component {


    constructor(props) {
        super(props);
        this.state = {
            textToFind: ''
        };
    }

    
    changeState = event => {
        this.setState({ textToFind: event.target.value });
       
    }

    render() {
        return (
            <div className="container-scroller">
                <TopBar />
                <div className="container-fluid page-body-wrapper">
                    <SideBar isManager />
                    <div className="main-panel">
                        <div className="content-wrapper">
                            <div className="page-header">
                                <h3 className="page-title"> Менеджмент </h3>
                            </div>
                            <div className="row">
                                <CategoryList />
                                <CategoryAdd />
                                <CategoryRemove />

                                <FindBar textHandler={this.changeState.bind(this)}/>
                                <ShopList findText={this.state.textToFind} />
                                <ShopAdd />
                                <ShopRemove />
                               
                            </div>
                            {/* content-wrapper ends */}

                        </div>
                        {/* main-panel ends */}
                    </div>
                    {/* page-body-wrapper ends */}
                </div>
            </div>
        );
    }
}

Management.propTypes = {

};

export default Management;