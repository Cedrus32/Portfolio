import Home from "./Home.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import sections from "../lib/sections.json";

function Sample() {
	return (
		<main>
			{sections.map((section) => {
				let content;
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

export default Sample;
