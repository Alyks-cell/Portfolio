import Navbar from './components/Nav';
import Home from './routes/home';
import About from './routes/about'
import Skills from './routes/skills'
import Project from './routes/project'
import Contact from './routes/contact';
import './index.css'
function App() {
  return (
    <>
    <div className="PORTFOLIO">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
    </> 
  );
}

export default App;
