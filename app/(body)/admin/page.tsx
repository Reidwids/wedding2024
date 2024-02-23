"use client";
import Loader from "@/app/components/Loader";
import { Guest } from "@prisma/client";
import React, { useEffect, useState } from "react";
// test commit
export default function Admin() {
	const [guests, setGuests] = useState<Guest[]>([]);
	const [isLoading, setLoading] = useState(true);
	const [password, setPassword] = useState("");
	const [passwordValidated, setPasswordValidated] = useState(false);
	const [error, setError] = useState("");

	const resolvePassword = async () => {
		fetch("/api/admin/password", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ password }),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.validated) {
					setPasswordValidated(true);
				} else {
					setError("Incorrect Password");
				}
			});
	};

	useEffect(() => {
		if (passwordValidated) {
			fetch("/api/guests/all")
				.then((res) => res.json())
				.then((data: Guest[]) => {
					setGuests(data);
					setLoading(false);
				});
		}
	}, [passwordValidated]);

	return (
		<div
			className="w-full flex flex-col items-center font-lora px-3 mb-5"
			style={{ boxShadow: "0 3px 3px #00000033 inset" }}
		>
			<div className=" text-5xl mt-5 text-center font-roseritta">Admin Panel</div>
			<div className=" mt-5 flex justify-center w-full">
				{!passwordValidated ? (
					<div className="mt-3 flex flex-col items-center">
						<div>
							<input
								type="text"
								className="border border-[#ddd] rounded-sm px-3 py-2 w-full text-center text-lg"
								placeholder="Email"
								onChange={(e) => setPassword(e.target.value)}
								onKeyDown={(e) => {
									if (e.key === "Enter") {
										resolvePassword();
									}
								}}
							/>
						</div>
						<div className="mt-4">
							<button
								className="bg-[#000] text-[#fff] rounded-sm px-4 py-1 flex flex-row items-center"
								onClick={resolvePassword}
							>
								Submit
							</button>
						</div>
						{error && <div className="text-red-500 text-sm mt-2">{error}</div>}
					</div>
				) : isLoading ? (
					<Loader />
				) : (
					<table className="table-auto w-full max-w-3xl ">
						<thead>
							<tr className="text-md font-semibold border-b-2">
								<td>#</td>
								<td>Name</td>
								<td>RSVP Status</td>
								<td>RSVP Date</td>
							</tr>
						</thead>
						<tbody>
							{guests
								.sort((a, b) =>
									a.rspvDate === b.rspvDate && !a.rspvDate && !b.rspvDate
										? 0
										: !a.rspvDate || a.rspvDate < b.rspvDate!
										? 1
										: -1
								)
								.sort((a, b) => (a.rsvp === b.rsvp ? 0 : a.rsvp && !b.rsvp ? -1 : 1))
								.map((guest, i) => {
									return (
										<tr className={i % 2 ? "bg-[#eee]" : "#fff"} key={i}>
											<td className="text-sm">{i + 1}</td>
											<td className="text-md">{guest.name}</td>
											<td className="text-xs">
												{guest.rsvp ? "Confirmed" : !guest.rsvp && guest.rspvDate ? "Decline" : "Pending..."}
											</td>
											<td className="text-xs">{guest.rspvDate?.toLocaleString().slice(0, 10) ?? "-"}</td>
										</tr>
									);
								})}
						</tbody>
					</table>
				)}
			</div>
		</div>
	);
}
