import icons from '../lib/skillData';

const Skills = () => {
    return (
        <section aria-label='skills' id='skills'>
            {icons.map(icon => (
                <img src={icon.path} alt={icon.name} key={icon.id} />
            ))}
        </section>
    )
};

export default Skills;