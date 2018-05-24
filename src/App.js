import './style.css';
import React           from 'react';
import Header          from './components/Header';
import About           from './components/About';
import Project         from './components/Project';

import SocialMedia     from './components/SocialMedia';
import Music           from './components/Music';
import Contact         from './components/Contact';
import ParallaxHeader from './components/ParallaxHeader';

class App extends React.Component{

  render()
  {
    /* JSX */
    return(
      <div id="whole-thing">

          {/* Header */}
          <ParallaxHeader
            blur={2}
            bgImage={"assets/backgrounds/header.jpg"}
            bgImageAlt=""
            strength={300}
            isHeader={true}
          >
            <Header />     
            
          </ParallaxHeader>
          <About />

          <ParallaxHeader bgImage={"assets/backgrounds/keys.jpg"}
                          bgImageAlt="Web Development"/>

          {/* Full Stack Projects */}

          <div className="project-background">

          <Project  isLeft = {true}
                    bg     = {"pins"}
                    title  = {"Quizfeed"}
                    text   = {aboutQuizfeed}
                    site   = {"https://quizfeed.herokuapp.com/"}
                    gh     = {"https://github.com/jvallexm/quizfeed"}
                    img    = {"assets/images/quizfeed.png"}/>
          
          <Project  isLeft = {false}
                    bg     = {"books"}
                    title  = {"Ok Whatever"}
                    text   = {aboutBookSwap}
                    gh     = {"https://github.com/jvallexm/okwhatever"}
                    site   = {"https://okwhatever.herokuapp.com/"}
                    img    = {"assets/images/okwhatever.png"}/>

          <Project  bg     = {"message"}
                    isLeft = {true}
                    title  = {"Anonymous Message Board"}
                    text   = {aboutMessageBoard}
                    site   = {"https://jvalle-message-board.herokuapp.com/"}
                    gh     = {"https://github.com/jvallexm/message-board"}
                    img    = {"assets/images/message.png"}/>

          </div>

          <ParallaxHeader bgImage={"assets/backgrounds/gce.jpg"}
                          bgImageAlt="GeekCraft Expo"
                          strenth={500}
                          blur="0"
                          bgStyle={{marginTop: "-200px"}}  />
          {/* Social Media */}
          <div className="gce-green">
            <SocialMedia />
          </div>
          {/* Music */}
          <div style={{position: "relative"}}>

              <ParallaxHeader
                blur="0"
                bgStyle={{marginTop: "-250px"}}
                bgImage={"assets/images/myband.jpg"}
                bgImageAlt="Music"
                strength={500}
              />

              <div id="photo-by">
                <h6>Photo by Riley Dehority</h6>
              </div>

          </div>
          <div className="music-gradient">
              <Music />
          </div>
      
          {/* Contact */}
          <Contact />
        
      </div>
    );
    /* JSX */
  }
}


const aboutQuizfeed=`Back end created with Node.js and Express and a MongoDB database to post and User Data. Utilizes a React.js front end and React-Router for dynamic page routes and login authentication with Google. Users can take, comment on, and create thier own customizable personality tests and quizzes.`;

const aboutBookSwap=`Created by an Agile development team, Ok Whatever uses a Node.js and Express back end and creates dynamic pages using Handlebars.js and a MySQL database. Users can create accounts with Google, view matches, send messages, and get live message updates from Socket.io`;

const aboutMessageBoard='Built with a Node.js and Express.js back end, MongoDB, and a React.js front end, this Message board allows users to post and comment via the front end UI or by making custom API calls. Uses Socket.io to provide live updating';

export default App;
