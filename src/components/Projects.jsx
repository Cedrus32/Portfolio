import "../styles/projects.css";
import projects from "../lib/projects.json";

function Projects() {
	const articles = [];
	projects.map((project) => {
		const links = [];
		project.media.links.map((link) => {
			console.log("link:", `${project.id}-${link.content}`);
			links.push(
				<li key={`${project.id}-${link.content}`}>
					<a href={link.url}>{link.content}</a>
				</li>
			);
		});
		const details = [];
		project.details.map((detail) => {
			console.log("detail:", `${project.id}-${detail.title}`);
			details.push(
				<div key={`${project.id}-${detail.title}`}>
					<h3>{detail.title}</h3>
					{detail.content}
				</div>
			);
		});
		console.log("article:", project.id);
		articles.push(
			<article key={project.id}>
				<h2>{project.title}</h2>
				<figure>
					<img src={project.media.img} alt={project.title} />
					<figcaption>{project.title}</figcaption>
				</figure>
				<nav>
					<ul>{links}</ul>
				</nav>
				{details}
			</article>
		);
	});

	return <>{articles}</>;
}

export default Projects;
