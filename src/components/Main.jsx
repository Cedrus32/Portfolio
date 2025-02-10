const links = ["home", "about", "projects", "contact"];

function Sample() {
	return (
		<>
			{links.map((link) => {
				return <section key={`${link}-section`} id={link}>{`${link} section`}</section>;
			})}
		</>
	);
}

export default Sample;
