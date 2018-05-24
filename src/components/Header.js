import React from 'react';
import './Header.css';

const Header = () => {

    return(

        <header className = "text-center container-fluid">
            
            <div id="head-content" className="text-center container-fluid">
            
                <div className = "row">

                    {/* My Face  */}
                    <div className = "col-sm-6">
                        <img id="my-face" alt="Art by Christine Veverka" src="assets/images/myface.jpg"/>
                    </div>
                    
                    {/* Title and Quick Links */}
                    <div id="title" className = "col-sm-6 middle-text">

                        <h1 id="my-name">Jennifer Valle</h1>
                        <h2 id="subtitle">Web Developer</h2>
                      
                        {/* Link Buttons */}
                        
                        <div id="head-buttons">

                            {/* Github */}
              
                            <button className="btn btn-header" 
                                    onClick={()=>window.open(`https://github.com/jvallexm`)}
                                    title={"Fork me on GitHub"}>
                                <i className="fa fa-github"/>
                            </button>

                            {/* Linked In */}

                            <button className="btn btn-header" 
                                    onClick={()=>window.open(`https://www.linkedin.com/in/jennifer-valle/`)}
                                    title={"Connect on LinkedIn"}>
                                <i className="fa fa-linkedin"/>
                            </button>

                            {/* Email */}
  
                            <button className="btn btn-header">
                                <i className="fa fa-envelope" onClick={()=>window.open("mailto:jvallexm@gmail.com")}/>
                            </button>

                        </div>
                          
                    </div>

                </div>

            </div>
            
        </header>
    )
  }

  export default Header;