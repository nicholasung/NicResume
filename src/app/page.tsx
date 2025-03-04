import { EdCerts, Exp, Footer, Header, Projects } from './components/components';
import "./globals.css";

export default function Home() {
  return (
    <div className='main'>
      {/* <Navbar /> */}
      <Header />
      <main>
        <div className='intro'>Welcome to my website! I&apos;m Nic, a Computer Science major at UBC. I am interested in Embedded Microcontroller Programming, HomeLab Self Hosting, and Product Development. In the past I have sold products focused on gamecube controller analog filtering and input reading. Currently I am looking to diversify my skill set with web development. At the same time developing telemetry and monitoring devices for cars as a hobby. In my free time I enjoy Cars, Weightlifting, and Video Games</div>
        <Projects />
        <Exp />
        <EdCerts/>
        {/* <Edu />
        <Certs /> */}
      </main>
      <br/>
      <div>
      <Footer />
      </div>
      <br/>
    </div>
  );
}