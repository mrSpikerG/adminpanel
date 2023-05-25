import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FindBar from '../manager/FindBar';
import axios from 'axios';
import getBaseURI from '../../store';
class StorageList extends Component {


    constructor(props) {
        super(props);
        this.state = {
            fileList: '',
            textToFind: '',
            rawData: '',
            isMounted: false
        };

    }

    changeState = event => {
        this.setState({ textToFind: event.target.value }, () => { this.updateUI(); });
    }

    componentDidMount() {

        if (!this.state.isMounted) {
            this.state.isMounted = true;
            this.updateUI()

        }
    }

    updateUI() {
        axios({
            method: 'get',
            url: `${getBaseURI()}/api/AWS/api/getFiles`,
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem("token")}`
            },
        }).then(function (response) {
            this.setState({
                rawData:
                    response.data.filter(function (e) {
                        let Names = true;

                        if (this.state.textToFind !== "") {
                            if (!e.uri.toLowerCase().includes(this.state.textToFind.toLowerCase())) {
                                Names = false;
                            }
                        }

                        return Names;
                    }.bind(this))
            }, () => {

                this.setState({
                    fileList: this.state.rawData.map((item, index) => {
                        let date = new Date(Date.parse(item.lastModified));
                        
                        return <tr key={`storage-${index}`}><td><img onError={({ currentTarget }) => {
                            currentTarget.onerror = null; // prevents looping
                            currentTarget.src = "https://phoneshopbucket.s3.eu-west-2.amazonaws.com/74eb151d-de05-4d69-b3b5-3162bf57a8f1.png	";
                        }} src={item.uri} /></td><td>{item.uri}</td><td>{date.toLocaleString('en-GB')}</td></tr>
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
                        <FindBar title="Поиск по картинкам" textHandler={this.changeState.bind(this)} />
                        <h4 className="card-title">Картинки</h4>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th className="font-weight-bold">Предпросмотр</th>
                                    <th className="font-weight-bold">Ссылка</th>
                                    <th className="font-weight-bold">Время создания</th>
                                </tr>
                            </thead>
                            <tbody className="category-container">
                                {this.state.fileList}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

StorageList.propTypes = {

};

export default StorageList;