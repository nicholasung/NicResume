import Edu from "./components/edu";
import Exp from "./components/exp";
import Footer from "./components/footer";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Projects from "./components/projects";

export default function Home() {
  return (
    <main>
      <>
        <Header />
        <Navbar />
      </>
      
        {/* intro blurb */}
      <>
        <Projects />
        <Exp />
        <Edu />
        <Footer />
      </>
    </main>
  );
}
