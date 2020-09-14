import React, { Component} from 'react';
import '../CSS/Fourthpage.css';

class fourthpage extends Component{
    render(){
        return(
            <div className="background">
                <div>
                    <img src={require('../images/newlogopentoz.png')} alt="logo" className="logo"></img>
                </div>
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>       
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-area"> 
                        <img src={require('../images/minimize-icon.png')} alt="logo" className="minimize"></img>
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <div className="close-icon">
                        <i  class="fa fa-times-circle"></i>
                    </div>  
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 about">
                        About :
                        <hr style={{backgroundColor: "white",marginTop:"-2%",marginLeft:"18%"}}/>
                        <div><hr style={{backgroundColor: "white",marginTop:"7%"}}/></div>
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
                </div>
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 about">
                        Description :
                        <hr  style={{backgroundColor: "white",marginTop:"-2%",marginLeft:"28%"}}/>
                        <div><hr style={{backgroundColor: "white",marginTop:"7%"}}/></div>
                        <div><hr style={{backgroundColor: "white",marginTop:"7%"}}/></div>
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
                </div>
            </div>
        )
    }
}

export default fourthpage;