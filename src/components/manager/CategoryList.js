import React, { Component } from 'react';
import axios from 'axios';
import FindBar from './FindBar';
import getBaseURI from '../../store';

class CategoryList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categoryList: '',
            textToFind: '',
            rawData: '',
            isMounted: false
        };

    }

    changeState = event => {
        this.setState({ textToFind: event.target.value },()=>{  this.updateUI();});
    }


    componentDidMount() {
        
        if (!this.state.isMounted) {
         
            this.setState({isMounted: true},()=>{
                this.updateUI()
            });

        }
    }
    
    updateUI(){

        axios({
            method: 'get',
            url: `${getBaseURI()}/api/Category/Get`,
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem("token")}`
            },
        }).then(function (response) {

            this.setState({
                rawData:
                    response.data.filter(function (e) {
                        let Names = true;

                        if (this.state.textToFind !== "") {
                            if (!e.name.toLowerCase().includes(this.state.textToFind.toLowerCase())) {
                                Names = false;
                            }
                        }

                        return Names;
                    }.bind(this))
            }, () => {

                this.setState({
                    categoryList: this.state.rawData.map((item, index) => {
                        return <tr key={`category-${index}`}><td>{item.id}</td><td>{item.name}</td><td><img alt='notfound' onError={({ currentTarget }) => {
                            currentTarget.onerror = null; // prevents looping
                            currentTarget.src = "https://phoneshopbucket.s3.eu-west-2.amazonaws.com/74eb151d-de05-4d69-b3b5-3162bf57a8f1.png";
                        }} src={item.image} /></td></tr>
                    })
                });
            });
        }.bind(this));
    }

    render() {
        return (
            <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <FindBar title="Поиск по Категориям" textHandler={this.changeState.bind(this)} />
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


export default CategoryList;