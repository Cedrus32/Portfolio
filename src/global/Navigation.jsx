const links = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

const Navigation = () => {
    return (
        <nav role='menubar'>
            {links.map(link => (
                <a role='menuitem' href={'#' + link.toLowerCase()} key={link}>{link}</a>
            ))}
        </nav>
    )
};

export default Navigation;
