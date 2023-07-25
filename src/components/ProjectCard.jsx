import PropTypes from 'prop-types';

const ProjectCard = (props) => {
    const { project } = props;
    console.log(project);

    return (
        <article aria-label={project.title}>
            <span className='title' aria-hidden='true'>{project.title}</span>
            <img src={project.media.img} alt={project.title} />
            <div className='links'>
                {project.media.links.map(link => (
                    <a href={link.url} key={project.id + '-' + link.content}>{link.content}</a>
                ))}
            </div>
            <div className='details'>
                {project.details.map(detail => (
                    <div key={project.id + '-' + detail.title}>
                        <span>{detail.title}</span>
                        <p>{detail.content}</p>
                    </div>
                ))}
            </div>
        </article>
    )
};

ProjectCard.propTypes = {
    project: PropTypes.object,
};

export default ProjectCard;
