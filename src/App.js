import './App.css';
import Home from './components/Home';
import Projects from './components/Projects';
import Socials from './components/Socials';
import Knowledge from './components/Knowledge';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <div>
        <Home />
        <About />
        <Knowledge />
        <Projects />
        <Contact />
        <Socials />
    </div>
  );
}
export default App;
