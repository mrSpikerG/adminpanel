import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class ShopList extends Component {


    constructor(props) {
        super(props);
        this.state = {
            shopProduct: '',
            isMounted: false
        };

    }

    componentDidMount() {

        if (!this.state.isMounted) {
            this.state.isMounted = true;
            axios({
                method: 'get',
                url: `https://localhost:7020/api/Shop/Get`,
            }).then(function (response) {
               
                this.setState({categoryList: response.data.map((item,index)=>{ return <tr key={`category-${index}`}><td>{item.id}</td><td>{item.name}</td><td>{item.image}</td></tr>})})
           
                let myProducts = new Array();
                for(let item of response.data){
                    axios({
                        method: 'get',
                        url: `https://localhost:7020/api/Shop/GetCategory?id=${item.id}`,
                    }).then(function (res) {
                        myProducts.push(<tr key={`shop-prod-${item.id}`}><td>{item.id}</td><td key={item.name} className="shop-name-searching">{item.name}</td><td>{item.price}</td><td>{item.image}</td><td>{res.data}</td></tr>)
                        this.setState({shopProduct: myProducts})
                       
                    }.bind(this));
                }
              
               
            }.bind(this));



        }
    }


    render() {
        return (
            <div className="col-lg-8 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Товары</h4>
                        <p />
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th className="font-weight-bold">Id</th>
                                    <th className="font-weight-bold">Название</th>
                                    <th className="font-weight-bold">Цена</th>
                                    <th className="font-weight-bold">Картинка</th>
                                    <th className="font-weight-bold">Id категории</th>
                                </tr>
                            </thead>
                            <tbody className="shop-container" id="shop-table">
                         
                                {this.props.findText===''? this.state.shopProduct: 
                                Array.from(this.state.shopProduct).map(item =>{ return item.props.children[1].key.toString().toLowerCase().includes(this.props.findText.toString().toLowerCase())? item:<div />})} 
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}


export default ShopList;