import sections from "../lib/sections.json";

function Sample() {
	return (
		<>
			{sections.map((section) => {
				return <section key={`${section}-section`} id={section}>{`${section} section`}</section>;
			})}
		</>
	);
}

export default Sample;
