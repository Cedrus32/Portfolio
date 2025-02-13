import "../styles/contact.css";
import methods from "../lib/contact.json";

function Contact() {
	return (
		<>
			<span>Want to get in touch?</span>
			<nav>
				<ul>
					{methods.map((method) => {
						return (
							<li key={method.name}>
								<a href={method.url}>
									<img src={method.path} alt={method.name} />
								</a>
							</li>
						);
					})}
				</ul>
			</nav>
		</>
	);
}

export default Contact;
