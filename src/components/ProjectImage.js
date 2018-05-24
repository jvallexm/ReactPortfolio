import React from 'react';

const ProjectImage = (props) =>{
    return(
        <div className="col-sm-6 proj-col">
             <img alt="Project" src={props.img} title={props.title} className="project-img pointer"/>
             <div className="an-shadow pointer" onClick={()=>window.open(props.site)}/>
        </div>
    )
}

export default ProjectImage