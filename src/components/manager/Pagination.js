import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "../../style/pagination.css";

class Pagination extends Component {


    constructor(props) {
        super(props);
        this.state = {
            maxPages: 0,
            page: 1,
            pages: ''
        };
    }

    componentDidMount() {
        if (!this.state.isMounted) {
            this.update();
        }
    }

    update() {
        let tinyPage = this.props.itemsCount % this.props.countPerPage == 0 ? 0 : 1;
        this.setState({ maxPages: Math.round(this.props.itemsCount / this.props.countPerPage) + tinyPage }, () => {
            
            if (this.state.page > this.state.maxPages) {
                this.setState({ page: 1 });
            }
            
            let pagestemp = new Array();
            // pages controller
            pagestemp.push(<li key='page-prev' id='page-previos' onClick={this.pageHandler} className={`admin-page-item page-previos ${this.state.page === 1 ? 'disabled' : ''}`}><p className="page-link">Предыдущая</p></li>)
            for (let i = 1; i <= this.state.maxPages; i++) {
                pagestemp.push(<li key={`page-${i}`} onClick={this.pageHandler} className={`admin-page-item ${i === this.state.page ? 'active' : ''}`}><p className="page-link">{i}</p></li>)
            }
            pagestemp.push(<li key='page-next' id='page-next' onClick={this.pageHandler} className={`admin-page-item page-next ${this.state.page === this.state.maxPages ? 'disabled' : ''}`}><p className="page-link">Следующая</p></li>);
            //
            


            this.setState({ pages: pagestemp });
        });
    }

    render() {
        return (
            <div className='admin-pagination-container'>
                <ul className='admin-pagination'>
                    {this.state.pages}
                </ul>
            </div>
        );
    }
}

Pagination.propTypes = {

};

export default Pagination;