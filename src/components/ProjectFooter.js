import React from 'react';

const ProjectFooter = (props) =>{

    return(

        <div className="text-center">

            <button className="btn btn-project" onClick={()=>window.open(props.site)}>
                Visit Site <i className="fa fa-external-link"/>
            </button>
          
            <button className="btn btn-project" onClick={()=>window.open(props.gh)}>
                View on GitHub <i className="fa fa-github" />
            </button>
      
        </div>

    )

}

export default ProjectFooter