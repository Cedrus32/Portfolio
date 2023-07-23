import projects from '../lib/projectData';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    return (
        <section id='projects'>
            <h2>Projects</h2>
            {projects.map(project => (
                <ProjectCard project={project} key={project.id}/>
            ))}
        </section>
    )
};

export default Projects;
