import projects from '../lib/projectData';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    return (
        <section aria-label='projects' id='projects'>
            {projects.map(project => (
                <ProjectCard project={project} key={project.id}/>
            ))}
        </section>
    )
};

export default Projects;
