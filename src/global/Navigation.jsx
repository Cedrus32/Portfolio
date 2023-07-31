import { useRef } from 'react';
import { NavLink } from 'react-router-dom';

const links = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

const Navigation = () => {
    const anchorRefs = useRef([]);

    function handleScroll(e) {
        let target = anchorRefs.current.filter(anchor => anchor.id === e.target.hash.split('#')[1])[0];
        if (target === undefined) {
            target = document.querySelector(e.target.hash);
            anchorRefs.current = [...anchorRefs.current, target];
        }
        target.scrollIntoView();
    }

    return (
        <nav>
            <ul>
            {links.map(link => (
                <li key={link}>
                    <NavLink to={{pathname: '/', hash: '#' + link.toLowerCase()}} onClick={handleScroll}>{link}</NavLink>
                </li>
            ))}
            </ul>
        </nav>
    )
};

export default Navigation;
