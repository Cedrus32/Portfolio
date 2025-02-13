import Home from "./Home.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Projects from "./Projects.jsx";
import sections from "../lib/sections.json";

function Main() {
	return (
		<main>
			{sections.map((section) => {
				let content = null;
				switch (section) {
					case "home":
						content = Home();
						break;
					case "about":
						content = About();
						break;
					case "contact":
						content = Contact();
						break;
					case "projects":
						content = Projects();
						break;
					default:
						content = `${section} section`;
				}
				return (
					<section key={`${section}-section`} id={section}>
						{content}
					</section>
				);
			})}
		</main>
	);
}

export default Main;
