import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import getBaseURI from '../../store';
class StorageAdd extends Component {


    constructor(props) {
        super(props);
        this.state = {
            file: ''
        };

    }

    changeState = event => {
        this.setState({ file: event.target.files[0] });
    }

    sendInfo = () => {

        let formData = new FormData();

        formData.append("file", this.state.file);
        axios.post(`${getBaseURI()}/api/AWS/api/saveImage`, formData, {
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem("token")}`,
                'Content-Type': 'multipart/form-data'
            }
        })
    }

    render() {
        return (
            <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Добавление картинок</h4>
                        <div className="m-3">
                            
                            <input style={{marginBottom:"20px"}} className='form-control' id='storage-send-file' onChange={this.changeState} type="file" accept=".jpg, .png, .jpeg" />
                            <button onClick={this.sendInfo} className="btn btn-outline-primary">Загрузить</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

StorageAdd.propTypes = {

};

export default StorageAdd;