import { useRef, useEffect } from 'react';

const links = ['Home', 'About', 'Skills', 'Projects', 'Contact'];
const options = {
    root: null,
    rootMargin: "-50% 0% -50% 0%",
    threshold: 0,
}

// DONE: on path change (effect), get current window location, handle scroll & styling
// DONE: intersection observer
// TODO: fix navlink default active status
// TODO: re-check useLocation and re-render numbers

const Navigation = () => {
    console.log('render: Navigation'); // TEST: log when component renders

    const sectionRefs = useRef([]);
    const anchorRefs = useRef([]);

    function showSection() {
        let hash = window.location.hash;
        if (hash === '') {
            hash = '#home';
        }
        const target = sectionRefs.current.filter(section => section.id === hash.split('#')[1])[0];
        target.scrollIntoView();
    }

    function updateNavStyle(targetId) {
        anchorRefs.current.forEach(anchor => {
            if (anchor.classList.contains('active')) {
                anchor.classList.remove('active');
                anchor.ariaSelected = false;
                anchor.parentElement.classList.remove('bounce');
            }
            if (anchor.href.includes(targetId)) {
                anchor.classList.add('active');
                anchor.ariaSelected = true;
                anchor.parentElement.classList.add('bounce');
            }
        });
    }

    useEffect(() => {
        // console.log('cache section nodes as refs');
        let nodes = document.querySelectorAll('section');
        sectionRefs.current = [...nodes];
        nodes = document.querySelectorAll('nav a');
        anchorRefs.current = [...nodes];
    }, []);

    useEffect(() => {
        function handleIntersection(e) {
            e.forEach(event => {
                if (event.isIntersecting) {
                    updateNavStyle(event.target.id);
                }
            });
        }

        // console.log('add intersection observer to root and sections');
        const observer = new IntersectionObserver(handleIntersection, options);
        sectionRefs.current.forEach(section => {
            observer.observe(section);
        });

        return () => {
            // console.log('remove intersection observer from root and sections');
            sectionRefs.current.forEach(section => {
                observer.unobserve(section);
            });
        };
    }, []);

    useEffect(() => {
        showSection();
    }, []);

    return (
        <nav>
            <ul>
            {links.map(link => (
                <li key={link}>
                    <a href={'#' + link.toLowerCase()} aria-selected={false} onClick={showSection}>{link}</a>
                </li>
            ))}
            </ul>
        </nav>
    )
};

export default Navigation;
