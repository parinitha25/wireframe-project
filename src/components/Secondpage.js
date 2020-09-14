import React, { Component } from 'react';
import '../CSS/Secondpage.css';

class secondpage extends Component{
    render(){
        return(
            <div className="background">
                <div>
                    <img src={require('../images/newlogopentoz.png')} alt="logo" className="logo"></img>
                </div>
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" style={{textAlign:"center"}}>
                        <div className="text1">WELCOME</div>
                        <div className="text2">Are you ready to <span className="symbol">!</span></div>
                        <div className="text3">ENJOY <span className="symbol">?</span></div>
                        <div className="row">
                            <div className="col"></div>
                            <div className="text4">Let's go !</div>
                            <div className="col"></div>                   
                        </div>                        
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
                </div>             
            </div>
        )

    }
}

export default secondpage;