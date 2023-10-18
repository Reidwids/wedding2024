import React from "react";
import "./loader.css";

export default function Loader({ w = "50px", h = "50px" }) {
	return (
		<div
			className="loader"
			style={{
				width: w,
				height: h,
			}}
		></div>
	);
}
