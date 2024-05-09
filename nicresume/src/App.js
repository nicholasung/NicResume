import './App.css';
import Header from './components/Header';


function Bio(){
  return(
    <div>
      Nicholas Ung
    </div>
  )
}

function Projects(){
  return(
    <div>
      Projects
    </div>
  )
}

function Experience(){
  return(
    <div>
      Experience
    </div>
  )
}

function Education(){
  return(
    <div>
      Education
    </div>
  )
}

function Contact(){
  return(
    <div>
      Email
      <br></br>
      Phone
      <br></br>
      Github
      <br></br>
      Linkedin
      
      Resume
    </div>
  )
}
function App(){
  return(
    <div>
      <Header />
      {/* <Bio />
      <Projects />
      <Experience />
      <Education />
      <Contact /> */}
    </div>
  );
}
export default App;
