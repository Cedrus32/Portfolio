const links = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

const Navigation = () => {
    return (
        <nav>
            {links.map(link => (
                <a href={'#' + link.toLowerCase()} key={link}>{link}</a>
            ))}
        </nav>
    )
};

export default Navigation;
