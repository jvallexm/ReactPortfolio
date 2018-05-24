import React           from 'react';
import ProjectImage    from './ProjectImage';
import ProjectAbout    from './ProjectAbout';
import './Project.css'

const Project = (props) =>{

    return(

      <section className="text-center container-fluid project-main">        

        <div className="text-center container-fluid project-content panel panel-primary">
                  
          <div className="panel-heading">
            <h1 className="project-title">{props.title}</h1>
          </div>

          <div className="panel-body">
                  
            <div className="body-padding">
              
              { props.isLeft 
              
              ? <div className="row">
                    
                  {/* Image on the Left */}
                    
                  <ProjectImage img   = { props.img   }
                                alt   = { props.title }
                                site  = { props.site  } />

                  <ProjectAbout isLeft = { props.isLeft }
                                title  = { props.title  }
                                text   = { props.text   } 
                                gh     = { props.gh   }
                                site   = { props.site }/>       
                </div>
              
              : <div className="row">
                
                  {/* Image on the Right*/}

                  <ProjectAbout isLeft = { props.isLeft }
                                title  = { props.title  }
                                text   = { props.text   } 
                                gh   = { props.gh   }
                                site = { props.site }/> 

                  <ProjectImage img   = { props.img   }
                                alt   = { props.title }
                                site  = { props.site  } />
   
                </div>
              }

            </div>
          
          </div>
          



        </div>

     </section> 

    )

  }

  export default Project;