import { useRef, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const links = ['Home', 'About', 'Skills', 'Projects', 'Contact'];
const options = {
    root: null,
    rootMargin: "-50% 0% -50% 0%",
    threshold: 0,
}

// DONE: on path change (effect), get current window location, handle scroll & styling
// TODO: intersection observer
    // BUG: intersection ONLY fires onClick when scrolling from bottom-up
// TODO: re-check useLocation and re-render numbers

const Navigation = () => {
    console.log('render: Navigation'); // TEST: log when component renders

    const sectionRefs = useRef([]);

    function handleClick(e) {
        console.log('click event');
        showSection(e.target.hash);
        // updateNavStyle(e.target.hash.split('#')[1]); // NOTE: redundant -- should fire via intersection observer on scrollIntoView
    }

    function handleIntersection(e) {
        console.log(e);
        e.forEach(event => {
            if (event.isIntersecting) {
                console.log('intersection');
                updateNavStyle(event.target.id);
            }
        });
    }

    function showSection(hash) {
        if (hash === '') {
            hash = '#home';
        }
        let target = sectionRefs.current.filter(section => section.id === hash.split('#')[1])[0];
        target.scrollIntoView();
    }

    function updateNavStyle(targetId) {
        console.log(`** TODO: update nav style for #${targetId} **`);
        sectionRefs.current.forEach(section => {
            if (section.classList.length > 0) {
                section.classList = [];
            }
            if (section.id === targetId) {
                section.classList = 'active';
            }
        });
    }

    useEffect(() => { // TEST: log when component mounts
        console.log('mount: Navigation');
    }, []);

    useEffect(() => { // NOTE: cache section nodes as refs
        console.log('cache section nodes as refs');
        let sectionNodes = document.querySelectorAll('section');
        sectionRefs.current = [...sectionNodes];
    }, []);

    useEffect(() => { // NOTE: handle nav styling on page scroll events
        console.log('add intersection observer to root and sections');
        let observer = new IntersectionObserver(handleIntersection, options);
        sectionRefs.current.forEach(section => {
            observer.observe(section);
        });

        return () => {
            console.log('remove intersection observer from root and sections');
            sectionRefs.current.forEach(section => {
                observer.unobserve(section);
            });
        };
    }, []);

    useEffect(() => {
        showSection(window.location.hash);
    }, []);

    return (
        <nav>
            <ul>
            {links.map(link => (
                <li key={link}>
                    <NavLink to={{pathname: '/', hash: '#' + link.toLowerCase()}} className='' onClick={handleClick} end>{link}</NavLink>
                </li>
            ))}
            </ul>
        </nav>
    )
};

export default Navigation;
