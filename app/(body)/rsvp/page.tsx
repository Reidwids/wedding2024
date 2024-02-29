"use client";
import { GetGuestsRes } from "@/app/api/guests/group/route";
import Loader from "@/app/components/Loader";
import { Guest } from "@prisma/client";
import Image from "next/image";
import React, { useState } from "react";

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

		const JSONdata = JSON.stringify({ email: email.toLowerCase() });

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
			setError("Please select a response");
			setIsLoading(false);
			return;
		}
		const JSONdata = JSON.stringify({ guests: selectedGuests, email: email });

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
		<div
			className="w-full flex justify-center items-center font-lora bg-rsvp-bg bg-cover bg-right md:bg-right-top"
			style={{ boxShadow: "0 3px 3px #00000033 inset" }}
		>
			<div className="w-full max-w-[600px] flex flex-col relative h-[350px] shadow-card items-center text-center px-2 mx-2 overflow-hidden bg-[#ffffffee] rounded-lg ">
				<div className="font-roseritta text-5xl md:text-5xl border-b-2 w-full py-2.5 ">R . S . V . P</div>
				{new Date() < new Date("2024-03-15") ? (
					<>
						<div
							className={"flex flex-col items-center absolute mt-8 md:mt-12 transition-all w-[80%]"}
							style={{
								left: rsvpStep === 0 ? "10%" : "-100%",
								transition: "2s",
							}}
						>
							<div className="text-[15px] mt-10">
								<p className="mb-2">We are so excited to celebrate our special day with you!</p>
								<p>Please enter your email to RSVP your party.</p>
							</div>
							<div className="mt-3">
								<input
									type="text"
									className="border border-[#ddd] rounded-sm px-3 py-2 w-full text-center text-lg"
									placeholder="Email"
									onChange={(e) => setEmail(e.target.value)}
									onKeyDown={(e) => {
										if (e.key === "Enter") {
											resolveEmail();
										}
									}}
								/>
							</div>
							<div className="mt-4">
								<button
									className="bg-[#000] text-[#fff] rounded-sm px-4 py-1 flex flex-row items-center"
									onClick={resolveEmail}
								>
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
							className={"flex flex-col items-center absolute mt-12 transition-all w-[80%]"}
							style={{
								left: rsvpStep === 0 ? "100%" : rsvpStep === 1 ? "10%" : "-100%",
								transition: "2s",
							}}
						>
							<div className="text-[15px] mt-6">
								<p>Please select the members of your party you would like to RSVP.</p>
							</div>
							<table className="mt-2">
								<thead>
									<tr>
										<th className="text-left font-parisienne">y&nbsp;/&nbsp;n</th>
										<th className="text-left"></th>
									</tr>
								</thead>
								<tbody className="block max-h-[100px] overflow-auto">
									{guestProfiles?.guests.map((guest: Guest) => (
										<tr className="border-b border-[#ddd] whitespace-nowrap" key={guest.name}>
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
											<td className="py-2 pr-5 font-parisienne text-left">{guest.name}</td>
										</tr>
									))}
								</tbody>
							</table>
							<div className=" mt-2">
								<button
									className="bg-[#000] text-[#fff] rounded-sm px-4 py-1 flex flex-row items-center"
									onClick={resolveRSVP}
								>
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
							<div className="text-[15px] mt-5 flex items-center flex-col">
								<div className="font-parisienne text-3xl mt-3">Thank you</div>
								<p className="mt-2">We're so glad you'll be joining us.</p>
								<p>We can't wait to celebrate with you in paradise!</p>
								{email.toLowerCase() === "sidbhalla@hotmail.com" ? (
									<Image alt="Sid" src="/sid.jpg" className="w-32 mt-2" width={300} height={300} />
								) : (
									<Image alt="Palm Trees" src="/palmTrees.svg" className="w-16 mt-2" width={16} height={16} />
								)}
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
					</>
				) : (
					<div className="flex flex-col items-center w-[80%] h-full justify-center -mt-5">
						<div className="text-[16px]">
							<p>RSVPs have closed. Hope to see you soon!</p>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
