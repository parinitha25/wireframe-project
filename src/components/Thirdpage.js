import React, { Component } from 'react';
import '../CSS/Thirdpage.css';

class login  extends Component{
    render(){
        return(
            <div className="background">
                <div>
                    <img src={require('../images/newlogopentoz.png')} alt="logo" className="logo-1"></img>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <div className="signin">Sign in</div>
                        <p className="qrtext">By scanning QR code</p>   
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 qrcode">
                        <img src={require('../images/qrcode.png')} alt="logo"></img>
                    </div>                       
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
                </div>
            </div>
        )
    }
}

export default login;