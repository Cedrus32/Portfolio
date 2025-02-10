import links from "../lib/sections.json";

function Menu() {
	return (
		<menu>
			{links.map((link) => {
				return (
					<li key={`${link}-link`}>
						<a href={`#${link}`}>{link}</a>
					</li>
				);
			})}
		</menu>
	);
}

export default Menu;
