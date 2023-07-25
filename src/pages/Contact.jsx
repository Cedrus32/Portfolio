import icons from '../lib/contactData';

const Contact = () => {
    return (
        <section aria-label='contact' id='contact'>
            <p>Want to get in touch?</p>
            <div>
                {icons.map(icon => (
                    <a href={icon.url} key={icon.id}>
                        <img src={icon.path} alt='' />
                        <span>{icon.name}</span>
                    </a>
                ))}
            </div>
        </section>
    )
};

export default Contact;
