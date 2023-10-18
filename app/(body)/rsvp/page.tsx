"use client";
import { GetGuestsRes } from "@/app/api/guests/group/route";
import Loader from "@/app/components/Loader";
import { Guest } from "@prisma/client";
import React, { useEffect, useState } from "react";

function fetcher(...args: any) {
	return fetch(args).then((res) => res.json());
}

export default function RSVP() {
	const [rsvpStep, setRsvpStep] = useState(0);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	const [email, setEmail] = useState("");
	const [guestProfiles, setGuestProfiles] = useState<GetGuestsRes>({ id: "", guests: [] });
	const [selectedGuests, setSelectedGuests] = useState<Guest[]>([]);

	const resolveEmail = async () => {
		setIsLoading(true);
		setError("");

		const JSONdata = JSON.stringify({ email: email });

		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSONdata,
		};

		const response = await fetch("/api/guests/group", options);
		if (response.status === 200) {
			const res = await response.json();
			setRsvpStep(1);
			setGuestProfiles(res);
			setIsLoading(false);
			return res;
		} else {
			// const res = await response.json();
			// console.log(res.message);
			setError("Error finding guest");
			setIsLoading(false);
			return null;
		}
	};

	const resolveRSVP = async () => {
		setIsLoading(true);
		setError("");

		if (selectedGuests.length === 0) {
			setError("Please select a guest");
			setIsLoading(false);
			return;
		}
		const JSONdata = JSON.stringify({ guests: selectedGuests });

		const options = {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSONdata,
		};

		const response = await fetch("/api/guests/rsvp", options);
		if (response.status === 200) {
			setRsvpStep(2);
			setIsLoading(false);
		} else {
			setError("RSVP failed, please try again");
			setIsLoading(false);
			return null;
		}
	};

	const handleRadioChange = (e: any, guest: Guest) => {
		const value = parseInt(e.target.value);
		const newGuestArr = selectedGuests.filter((selectedGuest) => selectedGuest.name !== guest.name);
		guest.rsvp = !!value;
		setSelectedGuests([...newGuestArr, guest]);
	};

	return (
		<div className="w-full flex justify-center items-center font-lora">
			<div className="w-full max-w-[600px] flex flex-col relative h-[350px] shadow-card items-center text-center p-5 overflow-hidden">
				<div className="font-parisienne text-5xl">R.S.V.P</div>
				<div
					className={"flex flex-col items-center absolute mt-12 transition-all w-[60%]"}
					style={{
						left: rsvpStep === 0 ? "20%" : "-100%",
						transition: "2s",
					}}
				>
					<div className="text-[15px] mt-5">
						<p className="mb-2">We are so excited to celebrate our special day with you!</p>
						<p>Please enter your email to RSVP your party.</p>
					</div>
					<div className="mt-5">
						<input
							type="text"
							className="border border-[#ddd] rounded-sm px-3 py-2 w-full text-center text-lg"
							placeholder="Email"
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className="mt-4">
						<button className="bg-[#000] text-[#fff] rounded-sm px-4 py-1 flex flex-row items-center" onClick={resolveEmail}>
							RSVP
							{isLoading && (
								<div className="ml-2 h-full flex items-center">
									<Loader w="16px" h="16px" />
								</div>
							)}
						</button>
					</div>
					{error && <div className="text-red-500 text-sm mt-2">{error}</div>}
				</div>

				<div
					className={"flex flex-col items-center absolute mt-12 transition-all w-[60%]"}
					style={{
						left: rsvpStep === 0 ? "100%" : rsvpStep === 1 ? "20%" : "-100%",
						transition: "2s",
					}}
				>
					<div className="text-[15px] mt-5">
						<p>Please select the members of your party you would like to RSVP.</p>
					</div>
					<table>
						<thead>
							<tr>
								<th className="text-left font-parisienne">&nbsp;y&nbsp;/&nbsp;n</th>
								<th className="text-left"></th>
							</tr>
						</thead>
						<tbody className="">
							{guestProfiles?.guests.map((guest: Guest) => (
								<tr className="border-b border-[#ddd]" key={guest.name}>
									<td>
										<input
											type="radio"
											name={guest.name}
											value={1}
											className="mr-2"
											onChange={(e) => handleRadioChange(e, guest)}
										/>
										<input
											type="radio"
											name={guest.name}
											value={0}
											className="mr-2"
											onChange={(e) => handleRadioChange(e, guest)}
										/>
									</td>
									<td className="py-2 font-parisienne">{guest.name}</td>
								</tr>
							))}
						</tbody>
					</table>
					<div className=" mt-2">
						<button className="bg-[#000] text-[#fff] rounded-sm px-4 py-1 flex flex-row items-center" onClick={resolveRSVP}>
							RSVP
							{isLoading && (
								<div className="ml-2 h-full flex items-center">
									<Loader w="16px" h="16px" />
								</div>
							)}
						</button>
					</div>
					{error && <div className="text-red-500 text-sm mt-2">{error}</div>}
				</div>
				<div
					className={"flex flex-col items-center absolute mt-12 transition-all w-[60%]"}
					style={{
						left: rsvpStep === 2 ? "20%" : "100%",
						transition: "2s",
					}}
				>
					<div className="text-[15px] mt-5">
						<div className="font-parisienne text-3xl mt-5">Thank you</div>
						<p className="mt-2">We're so glad you'll be joining us.</p>
						<p>We can't wait to celebrate with you in paradise!</p>
					</div>
				</div>
				<div className="flex justify-center items-center absolute bottom-6">
					<div
						className="w-2 h-2 rounded-full bg-[#ddd] mx-1"
						style={{ backgroundColor: rsvpStep === 0 ? "#aaa" : "#ddd" }}
					/>
					<div
						className="w-2 h-2 rounded-full bg-[#ddd] mx-1"
						style={{ backgroundColor: rsvpStep === 1 ? "#aaa" : "#ddd" }}
					/>
					<div
						className="w-2 h-2 rounded-full bg-[#ddd] mx-1"
						style={{ backgroundColor: rsvpStep === 2 ? "#aaa" : "#ddd" }}
					/>
				</div>
			</div>
		</div>
	);
}
