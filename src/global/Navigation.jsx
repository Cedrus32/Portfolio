import { useRef, useEffect } from 'react';

const linkNames = ['Home', 'About', 'Skills', 'Projects', 'Contact'];
const linkHrefs = linkNames.map(link => link.toLowerCase());
const options = {
    root: null,
    rootMargin: "-50% 0% -50% 0%",
    threshold: 0,
}

const Navigation = () => {
    const sectionRefs = useRef([]);
    const anchorRefs = useRef([]);

    function showSection() {
        let hash = window.location.hash;
        if (!linkHrefs.includes(window.location.hash.split('#')[1])) {
            hash = '#home';
        }
        const target = sectionRefs.current.filter(section => section.id === hash.split('#')[1])[0];
        target.scrollIntoView();
    }

    function updateNavStyle(targetId) {
        anchorRefs.current.forEach(anchor => {
            if (anchor.classList.contains('active')){
                anchor.ariaSelected = false;
                anchor.ariaCurrent = '';
            }
            if (anchor.href.includes(targetId)) {
                anchor.ariaSelected = true;
                anchor.ariaCurrent = 'page';
            }
            if (anchor.classList.contains('active') || anchor.href.includes(targetId)) {
                anchor.classList.toggle('active');
                anchor.parentElement.classList.toggle('bounce');
            }
        });
    }

    useEffect(() => {
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

        const observer = new IntersectionObserver(handleIntersection, options);
        sectionRefs.current.forEach(section => {
            observer.observe(section);
        });

        return () => {
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
            {linkNames.map((name, i) => (
                <li key={name}>
                    <a href={'#' + linkHrefs[i]} aria-selected={false} aria-current='' onClick={showSection}>{name}</a>
                </li>
            ))}
            </ul>
        </nav>
    )
};

export default Navigation;
