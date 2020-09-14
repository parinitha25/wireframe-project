import React, { Component } from 'react';
import '../CSS/Firstpage.css';

class firstpage extends Component { 
    render() {
        return (
            <div className="background">
                <div>
                    <img src={require('../images/newlogopentoz.png')} alt="logo" className="logo"></img>
                </div>    
                <div className="row">
                    <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'></div>
                    <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7 flex-container">   
                        <div className="box-border">
                            <span className="first-text">
                                <i class="fa fa-search" aria-hidden="true"></i>
                            </span>
                            <span style={{color:"black",fontSize:"7pt"}}>All</span>
                            <span className="dropdown-icon">
                                <i class="fa fa-chevron-circle-down" aria-hidden="true"></i>
                            </span>
                        </div>
                        <div className="box-border" style={{marginLeft:"10%"}}>
                            <span className="first-text">
                                <i class="fa fa-search" aria-hidden="true"></i>
                            </span>
                            <span style={{color:"black",fontSize:"7pt"}}>Category 1</span>
                            <span className="dropdown-icon">
                                <i class="fa fa-chevron-circle-down" aria-hidden="true"></i>
                            </span>    
                        </div>
                        <div className="box-border" style={{marginLeft:"13%"}}>
                            <span className="first-text">
                                <i class="fa fa-search" aria-hidden="true"></i>
                            </span>
                            <span style={{color:"black",fontSize:"7pt"}}>Category 2</span>
                            <span className="dropdown-icon">
                                <i class="fa fa-chevron-circle-down" aria-hidden="true"></i>
                            </span>
                        </div>
                    </div>
                    <div className='col-xs-2 col-sm-2 col-md-2 col-lg-2'></div>
                </div>
                <div className="row">
                   <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'></div>
                    <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                        <p className="text">All:</p>
                        <div className="flex-container">
                            <span className="category-border"></span>
                            <span className="category-border"></span>
                            <span className="category-border"></span>
                            <span className="category-border"></span>
                            <span className="category-border-last"></span>
                        </div> 
                    </div> 
                    <div className='col-xs-2 col-sm-2 col-md-2 col-lg-2'></div>
                </div>
                <div className="row">
                    <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'></div>
                    <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                        <p className="category-text">Category 1:</p>
                        <div className="flex-container">
                            <span className="category-border"></span>
                            <span className="category-border"></span>
                            <span className="category-border"></span>
                            <span className="category-border"></span>
                            <span className="category-border-last"></span>
                        </div> 
                    </div> 
                    <div className='col-xs-2 col-sm-2 col-md-2 col-lg-2'></div>
                </div>
                <div className="row">
                    <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'></div>
                    <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                        <p className="category-text">Category 2:</p>
                    <div className="flex-container">
                        <span className="category-border"></span>
                        <span className="category-border"></span>
                        <span className="category-border"></span>
                        <span className="category-border"></span>
                        <span className="category-border-last"></span>
                    </div> 
                    </div> 
                    <div className='col-xs-2 col-sm-2 col-md-2 col-lg-2'></div>
                </div>
                <div className="row">
                    <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'></div>
                    <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                        <p className="category-text">Category 3:</p>
                    <div className="flex-container">
                        <span className="category-border"></span>
                        <span className="category-border"></span>
                        <span className="category-border"></span>
                        <span className="category-border"></span>
                        <span className="category-border-last"></span>
                    </div> 
                    </div> 
                    <div className='col-xs-2 col-sm-2 col-md-2 col-lg-2'></div>
                </div>
            </div>
        );
    }
}

export default firstpage;
