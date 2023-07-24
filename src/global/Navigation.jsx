const links = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

const Navigation = () => {
    return (
        <nav>
            <ul>
            {links.map(link => (
                <li key={link}>
                    <a href={'#' + link.toLowerCase()}>{link}</a>
                </li>
            ))}
            </ul>
        </nav>
    )
};

export default Navigation;
