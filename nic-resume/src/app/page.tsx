import Edu from "../app/components/edu";
import Exp from "../app/components/exp";
import Footer from "../app/components/footer";
import Header from "../app/components/header";
import Projects from "../app/components/projects";

export default function Home() {
  return (
    <main>
      {/* <Navbar /> */}
      <Header />
      <div>
        <p>intro blurb</p>
        <Projects />
        <Exp />
        <Edu />
      </div>
      <Footer />
    </main>
  );
}