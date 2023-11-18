"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function Map() {
	const { isLoaded } = useLoadScript({
		id: "google-map-script",
		googleMapsApiKey: process.env.NEXT_PUBLIC_GMAPS_KEY!,
	});
	const containerStyle = {
		width: "100%",
		height: "100%",
	};
	const center = { lat: 20.761181010476665, lng: -86.96402858240013 };
	return isLoaded ? (
		<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
			{/* Child components, such as markers, info windows, etc. */}
			<Marker position={center} />
		</GoogleMap>
	) : (
		<></>
	);

	// const { isLoaded } = useLoadScript({
	// 	id: "google-map-script",
	// 	googleMapsApiKey: process.env.NEXT_PUBLIC_GMAPS_KEY!,
	// });

	// function Map() {
	// 	const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

	// 	return (
	// 		<GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
	// 			<Marker position={center} />
	// 		</GoogleMap>
	// 	);
	// }

	// if (!isLoaded) return <div>Loading...</div>;
	// return <Map />;

	// return (
	// 	<iframe
	// 		title={"Iberostar Paraiso Beach"}
	// 		width="100%"
	// 		height="100%"
	// 		style={{ border: "0" }}
	// 		loading="lazy"
	// 		src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJNYqhE7NDTo8RL4hjcI6etdg&key=${process.env.GMAPS_KEY}`}
	// 	></iframe>
	// );
}
