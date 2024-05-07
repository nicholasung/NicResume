import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
function Header(){
  return(
    <div>
      Home       Projects Expereicence Education Contact
    </div>
  )
}

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
      <Bio />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
}
export default App;
