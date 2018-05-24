import React from 'react';
import './Music.css';

class Music extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            src: null
        };
    }
    render(){
        return(
            
            <section id="music" className="text-center container-fluid" style={{maxWidth: "900px"}}>
                
                <div className="filter">
                       
                    <div id="music-content" className="sec-content text-center container-fluid">
                        
                        <div className="row">
                            
                            <div className="col-sm-6 min-300 middle-text">

                               { 
                                this.state.src === null
                                ?  <div>
                                        <h3 style={{color: 'black'}}>Click Buttons to Play <i className="fa fa-arrow-right"/></h3>
                                    </div>
                                : <iframe title="The KKK Took My Baby Away" src={this.state.src}/> 
                                }

                            </div>

                            <div className="col-sm-6">

                               <div id="music-text" style={{minHeight: '300px'}}className="text-left middle-text">

                                 <h3>Snake Shaming</h3>
                                  
                                <button className="btn btn-header btn-music" 
                                        onClick={()=>this.setState({src: "https://bandcamp.com/EmbeddedPlayer/album=2641279869/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"})}>
                                    Listen <i className="fa fa-play-circle-o"/>
                                </button>  
                                  
                                <h3>Gamma Gamma Ray</h3>
                                  
                                <button className="btn btn-header btn-music" 
                                        onClick={()=>this.setState({src: "https://www.youtube.com/embed/416N-wtfWcI"})}>
                                    Watch <i className="fa fa-youtube-play"/>
                                </button>
  
                               </div>

                            </div>
                            
                        </div>

                    </div>
                    
                </div>
                  
            </section>
        )
    }
  }

export default Music;