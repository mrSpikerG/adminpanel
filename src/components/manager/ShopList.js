import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Confirm from '../modal/Confirm';
import RedactShop from '../modal/RedactShop';
import FindBar from './FindBar';
import Pagination from './Pagination';
import getBaseURI from '../../store';

class ShopList extends Component {


    constructor(props) {
        super(props);
        this.state = {
            rawData: '',
            shopProduct: '',
            modalConfirm: "",
            curentItem: { name: "", price: 1, image: "" },
            modalRedact: "",
            curentCategory: [1], // :)
            categories: [],
            isMounted: false,
            textToFind: "",
            page: 1
        };
    }

    componentDidMount() {
        if (!this.state.isMounted) {
            this.state.isMounted = true;
           this.updateUI();
        }
    }

    updateUI(){
        axios({
            method: 'get',
            url: `${getBaseURI()}/api/Shop/GetWithCategory`,
        }).then(function (response) {

            this.setState({rawData: response.data});
            this.setState({
                shopProduct:
                    response.data
                    // .slice(
                    //     (this.state.page - 1) * 5,
                    //     (this.state.page - 1) * 5 + 5)
                        .map((item, index) => {
                        return <tr key={`shop-prod-${item.id}`}>
                            <td>{item.id}</td>
                            <td key={item.name} className="shop-name-searching">{item.name}</td>
                            <td>{item.price}</td>
                            <td><img  onError={({ currentTarget }) => {
                            currentTarget.onerror = null; // prevents looping
                            currentTarget.src = "https://spikershop.blob.core.windows.net/files/1657c317-7c54-4197-b30f-e10089ece4d9.png	";
                        }} src={item.image} /></td>
                            <td>{item.categoryName}</td>
                            <td>
                                <span className="admin-icon-list"><i className={`mdi mdi-grease-pencil menu-icon`} onClick={() => {
                                    this.setState({ curentItem: item }, () => {
                                        this.updateRedactModal(() => {
                                            this.setState({ modalRedact: "active" });
                                        });
                                    });
                                }} />
                                </span>
                                <span className="admin-icon-list"><i className={`mdi mdi-window-close menu-icon`} onClick={() => {
                                    this.setState({ curentItem: item }, () => {
                                        this.setState({ modalConfirm: "active" });
                                    });
                                }} />
                                </span>
                            </td>
                        </tr>
                    })
            });
            //()=>{console.log(Math.round(this.state.shopProduct.length / 5)+1)}
        }.bind(this));
    }

    updateRedactModal(doAfter) {
        axios({
            method: 'get',
            url: `${getBaseURI()}/api/Category/Get`,
        }).then(function (response) {
            for (let i of response.data) {

                if (i.name === this.state.curentItem.categoryName) {

                    this.setState({ curentCategory: [i.id] }, () => { doAfter() });
                }
            }
            this.setState({ categories: response.data.map((item, index) => { return <option key={`category-selects-${index}`} value={item.id}>{item.name}</option> }) });
        }.bind(this));
    }

    changeState = event => {
        this.updateUI();
        this.setState({ textToFind: event.target.value });
    }

    render() {
        return (
            <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <FindBar title="Поиск по товарам" textHandler={this.changeState.bind(this)} />
                        <h4 className="card-title">Товары</h4>
                        <p />
                        <Confirm updateList={this.updateUI.bind(this)}  deleteItem={this.state.curentItem} closeModal={() => { this.setState({ modalConfirm: "" }) }} active={this.state.modalConfirm} />
                        <RedactShop updateList={this.updateUI.bind(this)} redactItem={this.state.curentItem} categories={this.state.categories} curentCategory={this.state.curentCategory} closeModal={() => { this.setState({ modalRedact: "" }) }} active={this.state.modalRedact} />
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th className="font-weight-bold">Id</th>
                                    <th className="font-weight-bold">Название</th>
                                    <th className="font-weight-bold">Цена</th>
                                    <th className="font-weight-bold">Картинка</th>
                                    <th className="font-weight-bold">Категория</th>
                                    <th className="font-weight-bold">Действия</th>
                                </tr>
                            </thead>
                            <tbody className="shop-container" id="shop-table">
                                                {this.state.shopProduct}
                                {/* {this.props.findText === '' ? this.state.shopProduct :
                                    this.state.shopProduct.map(item => { return item.props.children[1].key.toString().toLowerCase().includes(this.props.findText.toString().toLowerCase()) ? item : <div /> })} */}
                            </tbody>
                        </table>
                        <Pagination itemsCount={this.state.rawData.length} countPerPage={5} />
                    </div>
                </div>
            </div>
        );
    }
}


export default ShopList;