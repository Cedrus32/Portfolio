import PropTypes from 'prop-types';

const ProjectCard = (props) => {
    const { project } = props;
    console.log(project);

    return (
        <article>
            <h3>{project.title}</h3>
            <img src={project.media.img} alt={project.title} />
        <div>
            {project.media.links.map(link => (
                <a href={link.url} key={project.id + '-' + link.content}>{link.content}</a>
            ))}
        </div>
        {project.details.map(detail => {
            <div key={project.id + '-' + detail.title}>
                <h4>{detail.title}</h4>
                <p>{detail.content}</p>
            </div>
        })}
        </article>
    )
};

ProjectCard.propTypes = {
    project: PropTypes.object,
};

export default ProjectCard;
