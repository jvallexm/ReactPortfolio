import React from 'react';

const ProjectFooter = (props) =>{

    return(

        <div className="panel-footer text-center">
            
            <div className="row">
          
                <div className="col-sm-6 pointer" onClick={()=>window.open(props.site)}>
                    Visit Site <i className="fa fa-external-link"/>
                </div>
          
                <div className="col-sm-6 pointer" onClick={()=>window.open(props.gh)}>
                    View on GitHub <i className="fa fa-github" />
                </div>
        
            </div>
      
        </div>

    )

}

export default ProjectFooter