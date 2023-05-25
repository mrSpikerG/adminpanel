import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "../../style/pagination.css";

class Pagination extends Component {


    constructor(props) {
        super(props);
        this.state = {
            maxPages: 0,
            pages: '',
            page: 1
        };
    }

    componentDidMount() {
       // if (!this.state.isMounted) {
            this.update();
       // }
    }

    clickOnPage(e){
        e.preventDefault();



        let curPage = e.target.innerText;

        if (curPage == 'Предыдущая') {
           
            if (this.state.page != 1) {
                this.setState({ page: this.state.page - 1 }, () => { this.update(); });
                return;
            }else{
                return;
            }
        }


        if (curPage == 'Следующая') {
  

            if (this.state.page !== this.state.maxPages) {
       
                this.setState({ page: this.state.page + 1 }, () => { this.update(); });
                return;
            }else{
                return;
            }
        }

        if (curPage === this.state.page || curPage < 1 || curPage > this.state.maxPages || curPage === this.state.page) {
            return;
        }
        this.setState({ page: (Number)(curPage) }, () => { 
            this.update();
         });
        this.props.pageHandle(e);
        
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    update() {


        let tinyPage = this.props.itemsCount % this.props.countPerPage == 0 ? 0 : 1;
        this.setState({ maxPages: Math.floor(this.props.itemsCount / this.props.countPerPage) + tinyPage }, () => {
           
             if (this.props.page > this.state.maxPages) {
                 this.setState({ page: 1 });
             }

            let pagestemp = new Array();
            // pages controller
            pagestemp.push(<li key='page-prev' id='page-previos' onClick={this.clickOnPage.bind(this)} className={`admin-page-item page-previos ${this.props.page === 1 ? 'disabled' : ''}`}><p className="page-link">Предыдущая</p></li>)


            if (this.state.maxPages < 10) {
                for (let i = 1; i <= this.state.maxPages; i++) {
                    pagestemp.push(<li key={`page-${i}`} onClick={this.clickOnPage.bind(this)} className={`admin-page-item ${i === this.props.page ? 'active' : ''}`}><p className="page-link">{i}</p></li>);
                }
            } else {
        
                if (this.state.page <= 5) {

                    for (let i = 1; i <= this.state.maxPages && i < 9; i++) {
                        pagestemp.push(<li key={`page-${i}`} onClick={this.clickOnPage.bind(this)} className={`admin-page-item ${i === this.state.page ? 'active' : ''}`}><p className="page-link">{i}</p></li>)
                    }
                    pagestemp.push(<li key={`page-..`} className={`admin-page-item`}><p className="page-link">...</p></li>);
                    pagestemp.push(<li key={`page-${this.state.maxPages}`} onClick={this.clickOnPage.bind(this)} className={`admin-page-item ${this.state.maxPages === this.state.page ? 'active' : ''}`}><p className="page-link">{this.state.maxPages}</p></li>);
                } else {
                    if (this.state.page >= this.state.maxPages - 5) {
                        pagestemp.push(<li key={`page-1`} onClick={this.clickOnPage.bind(this)} className={`admin-page-item ${1 === this.state.page ? 'active' : ''}`}><p className="page-link">1</p></li>);
                        pagestemp.push(<li key={`page-..`} className={`admin-page-item`}><p className="page-link">...</p></li>)
                        for (let i = this.state.maxPages - 9; i <= this.state.maxPages; i++) {
                            pagestemp.push(<li key={`page-${i}`} onClick={this.clickOnPage.bind(this)} className={`admin-page-item ${i === this.state.page ? 'active' : ''}`}><p className="page-link">{i}</p></li>)
                        }

                    } else {
                        pagestemp.push(<li key={`page-1`} onClick={this.clickOnPage.bind(this)} className={`admin-page-item ${1 === this.state.page ? 'active' : ''}`}><p className="page-link">1</p></li>);
                        pagestemp.push(<li key={`page-.`} className={`admin-page-item`}><p className="page-link">...</p></li>)
                    
                        for (let i = this.state.page - 2; i <= this.state.page + 2; i++) {
                            pagestemp.push(<li key={`page-${i}`} onClick={this.clickOnPage.bind(this)} className={`admin-page-item ${i === this.state.page ? 'active' : ''}`}><p className="page-link">{i}</p></li>)
                        }
                    
                        pagestemp.push(<li key={`page-..`} className={`admin-page-item`}><p className="page-link">...</p></li>);
                        pagestemp.push(<li key={`page-${this.state.maxPages}`} onClick={this.clickOnPage.bind(this)} className={`admin-page-item ${this.state.maxPages === this.state.page ? 'active' : ''}`}><p className="page-link">{this.state.maxPages}</p></li>);
               
                    }
                }
            }
            pagestemp.push(<li key='page-next' id='page-next' onClick={this.clickOnPage.bind(this)} className={`admin-page-item page-next ${this.props.page === this.state.maxPages ? 'disabled' : ''}`}><p className="page-link">Следующая</p></li>);
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