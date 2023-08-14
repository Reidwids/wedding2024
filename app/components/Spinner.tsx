import React from "react";
import "./spinner.css";

export default function Spinner({ w = "30px", h = "30px" }) {
	return (
		<div
			className="loader"
			style={{
				width: w,
				height: h,
				border: "2px solid #fff",
				borderBottomColor: "transparent",
			}}
		></div>
	);
}
