import Home from "./Home.jsx";
import About from "./About.jsx";
import sections from "../lib/sections.json";

function Sample() {
	return (
		<>
			{sections.map((section) => {
				let content;
				switch (section) {
					case "home":
						content = Home();
						break;
					case "about":
						content = About();
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
		</>
	);
}

export default Sample;
