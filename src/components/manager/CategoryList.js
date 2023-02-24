import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class CategoryList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categoryList: '',
            isMounted: false
        };

    }

    componentDidMount() {

        if (!this.state.isMounted) {
            this.state.isMounted = true;
            axios({
                method: 'get',
                url: `https://localhost:7020/api/Category/Get`,
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem("token")}`
                },
            }).then(function (response) {
               
                this.setState({categoryList: response.data.map((item,index)=>{ return <tr key={`category-${index}`}><td>{item.id}</td><td>{item.name}</td><td>{item.image}</td></tr>})})
            }.bind(this));

        }
    }


    render() {
        return (
            <div className="col-lg-8 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Категории</h4>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th className="font-weight-bold">Id</th>
                                    <th className="font-weight-bold">Название</th>
                                    <th className="font-weight-bold">Картинка</th>
                                </tr>
                            </thead>
                            <tbody className="category-container">
                                {this.state.categoryList}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

CategoryList.propTypes = {

};

export default CategoryList;