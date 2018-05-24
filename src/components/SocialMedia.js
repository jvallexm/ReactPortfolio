import React from 'react';
import './SocialMedia.css';

class SocialMedia extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loadVideo: false
        };
    }
    render(){
        return(
            
            <section id="gce" className="text-center container-fluid">

                <div className="filter">

                    <div id="gce-content" className="sec-content text-center container-fluid">
                        
                        <div className="row">

                            <div className="col-sm-6">

                                <div id="gce-text" className="text-right middle-text">

                                    <h2>GeekCraft Expo</h2>
                                    <p className="gce-p">GeekCraft Expo puts on pop-up handmade markets that exclusively showcase handmade geek goods crafted by local artisans across the country!</p> 
                                    <p className="gce-p">As the Social Media Director of GeekCraft Expo, Jennifer is responsible for maintaining the Facebook, Twitter, and Instagram accounts. She also works to create engaging Social Media Ads, like this one!</p>

                                    <div id="gce-buttons">
                                    
                                        <button className="btn btn-header"
                                                onClick={()=>window.open("http://www.facebook.com/geekcraftexpo")}
                                                title={"GeekCraft Expo on Facebook"}>
                                            <i className="fa fa-facebook"/>
                                        </button>   
                                        <button className="btn btn-header"
                                                onClick={()=>window.open('https://www.instagram.com/geekcraftexpo/')}
                                                title={"GeekCraft Expo on Instagram"}>
                                            <i className="fa fa-instagram"/>
                                        </button>
                                        <button className="btn btn-header"
                                                onClick={()=>window.open('https://twitter.com/geekcraftexpo')}
                                                title={"GeekCraft Expo on Twitter"}>
                                            <i className="fa fa-twitter"/>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6">

                               <div id="gce-video">
                               { this.state.loadVideo
                               ? <iframe src="assets/videos/gce.mp4" title="Made with iMovie" />
                               : <img src="assets/images/videoph.png" 
                                      className="squish"
                                      alt="What is GeekCraft Expo"
                                      onClick={()=>this.setState({loadVideo: true})}/> }
                               </div>

                            </div>

                        </div>


                </div>       

                </div>

            </section>

        )
    }
  }

  export default SocialMedia;