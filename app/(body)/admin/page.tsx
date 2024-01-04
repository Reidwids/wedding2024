"use client";
import Loader from "@/app/components/Loader";
import { Guest } from "@prisma/client";
import React, { useEffect, useState } from "react";

export default function Admin() {
	const [guests, setGuests] = useState<Guest[]>([]);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		fetch("/api/guests/all")
			.then((res) => res.json())
			.then((data: Guest[]) => {
				setGuests(data);
				setLoading(false);
			});
	}, []);

	return (
		<div
			className="w-full flex flex-col items-center font-lora px-3 mb-5"
			style={{ boxShadow: "0 3px 3px #00000033 inset" }}
		>
			<div className=" text-5xl mt-5 text-center font-roseritta">Admin Panel</div>
			<div className=" mt-5 flex justify-center w-full">
				{isLoading ? (
					<Loader />
				) : (
					<table className="table-auto w-full max-w-3xl ">
						<thead>
							<tr className="text-md font-semibold border-b-2">
								<td>Name</td>
								<td>RSVP Status</td>
								<td>RSVP Date</td>
							</tr>
						</thead>
						<tbody>
							{guests
								.sort((a, b) => (a.rsvp === b.rsvp ? 0 : a.rsvp && !b.rsvp ? -1 : 1))
								.map((guest, i) => {
									return (
										<tr className={i % 2 ? "bg-[#eee]" : "#fff"}>
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
