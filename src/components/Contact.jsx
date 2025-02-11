import "../styles/contact.css";
import methods from "../lib/contact.json";

function Contact() {
	const linkItems = [];
	methods.map((method) => {
		linkItems.push(
			<li key={method.name}>
				<a href={method.url}>
					<img src={method.path} alt={method.name} />
				</a>
			</li>
		);
	});

	return (
		<>
			<span>Want to get in touch?</span>
			<nav>
				<ul>{linkItems}</ul>
			</nav>
		</>
	);
}

export default Contact;
