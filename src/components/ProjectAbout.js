import React from 'react';

const ProjectAbout = (props) =>{
    return(
           <div className="col-sm-6 proj-col">
                <div className="project middle-text" style={{padding: '10px'}}>
                  
                    {/* Project Title */}
                    <div className="text-center">
                        <p className="project-p">{props.text}</p>
                    </div>
                    
              </div>                           
       </div>
    );
}

export default ProjectAbout;