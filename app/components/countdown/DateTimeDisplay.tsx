"use client";
import React from "react";

const DateTimeDisplay = ({ value, type, isDanger }) => {
	return (
		<div style={{ color: isDanger ? "#f5f5dc" : "#fff" }}>
			<p className="text-xl">{value}</p>
			<span className="text-xs">{type}</span>
		</div>
	);
};

export default DateTimeDisplay;
