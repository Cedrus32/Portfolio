import "../styles/projects.css";
import projects from "../lib/projects.json";

function Projects() {
	return projects.map((project) => {
		return (
			<article key={project.id}>
				<h2>{project.title}</h2>
				<figure>
					<img src={project.media.img} alt={project.title} />
					<figcaption>{project.title}</figcaption>
				</figure>
				<nav>
					<ul>
						{project.media.links.map((link) => {
							return (
								<li key={`${project.id}-${link.content}`}>
									<a href={link.url}>{link.content}</a>
								</li>
							);
						})}
					</ul>
				</nav>
				{project.details.map((detail) => {
					return (
						<div key={`${project.id}-${detail.title}`}>
							<h3>{detail.title}</h3>
							{detail.content}
						</div>
					);
				})}
			</article>
		);
	});
}

export default Projects;
