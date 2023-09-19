"use client";
import React, { useEffect, useState } from "react";
import DateTimeDisplay from "./DateTimeDisplay";
import { useCountdown } from "./useCountdown";

const ExpiredNotice = () => {
	return (
		<div>
			<span>We Are Married!!!</span>
		</div>
	);
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
	return (
		<div>
			<div className="text-lg flex flex-row justify-around">
				<DateTimeDisplay value={days} type={"Days"} isDanger={days <= 3} />
				<p>:</p>
				<DateTimeDisplay value={hours} type={"Hours"} isDanger={days <= 3} />
				<p>:</p>
				<DateTimeDisplay value={minutes} type={"Mins"} isDanger={days <= 3} />
				<p>:</p>
				<DateTimeDisplay value={seconds} type={"Seconds"} isDanger={days <= 3} />
			</div>
		</div>
	);
};

const CountdownTimer = () => {
	const targetDate = new Date("2024-11-23T16:30:00.000Z");
	const [hydrated, setHydrated] = useState(false);

	const [days, hours, minutes, seconds] = useCountdown(targetDate);

	useEffect(() => {
		setHydrated(true);
	}, []);

	if (!hydrated) return null;
	if (days + hours + minutes + seconds <= 0) {
		return <ExpiredNotice />;
	} else {
		return <ShowCounter days={days} hours={hours} minutes={minutes} seconds={seconds} />;
	}
};

export default CountdownTimer;
