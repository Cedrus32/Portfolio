import icons from '../lib/skillData';

const Skills = () => {
    return (
        <section aria-label='skills' id='skills'>
            {icons.map(icon => (
                <figure key={icon.id}>
                    <img src={icon.path} alt='' />
                    <figcaption>{icon.name}</figcaption>
                </figure>
            ))}
        </section>
    )
};

export default Skills;
