import { useEffect } from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Skills from '../pages/Skills';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';

const Page = () => {
    console.log('render: Page');

    useEffect(() => {
        console.log('mount: Page');
    }, []);

    return (
        <main>
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </main>
    )
};


export default Page;
