"use client";
export default function Map() {
	return (
		<iframe
			title={"Iberostar Paraiso Beach"}
			width="100%"
			height="100%"
			style={{ border: "0" }}
			loading="lazy"
			src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJNYqhE7NDTo8RL4hjcI6etdg&key=${process.env.GMAPS_KEY}`}
		></iframe>
	);
}
