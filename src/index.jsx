import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navigation from './components/Navigation';
import './styles/reset.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <main>
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </main>
        <Navigation />
    </>
);
