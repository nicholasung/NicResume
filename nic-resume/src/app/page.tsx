import { EdCerts, Exp, Footer, Header, Projects } from './components/components';
import "./globals.css";

export default function Home() {
  return (
    <page>
      {/* <Navbar /> */}
      <Header />
      <main>
        <intro>Welcome to my website! I&apos;m Nic, a Computer Science major at UBC. I have been surrounded by computers all my life and have been expounding on my interest since I was a kid. In my free time I enjoy Cars, Weightlifting, and Video Games</intro>
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
    </page>
  );
}