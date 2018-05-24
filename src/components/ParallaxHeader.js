import React           from 'react';
import {Parallax}      from 'react-parallax';
import './Parallax.css';

const ParallaxHeader = (props) =>{

    return(
        <div className="rel">

            <Parallax
                blur={props.blur ? props.blur : 2}
                bgImage={props.bgImage}
                bgImageAlt={props.bgImageAlt}
                strength={props.strength ? props.strength : 200}
                bgStyle={props.bgStyle ? props.bgStyle :{}}>

                {
                  props.isHeader

                ? props.children

                : <h1 style={{minHeight: '500px'}} className="middle-text big-big text-center">{props.bgImageAlt}</h1>
                
                }
                
            </Parallax>

            <div className="parallax-shadow"/>

        </div>

    )

}

export default ParallaxHeader;
