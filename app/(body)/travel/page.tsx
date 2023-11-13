import Image from "next/image";
import React from "react";
import Map from "./Map";

export default function Travel() {
	return (
		<div className="w-full flex flex-col items-center font-lora px-3" style={{ boxShadow: "0 3px 3px #00000033 inset" }}>
			<h1 className="text-4xl mt-5 font-roseritta">Travel Information</h1>
			<h1 className="text-xl mt-1 font-lora">Booking your journey</h1>
			<Image alt="Text Divider" src="/plane-trail2.svg" className="-rotate-[27deg] -mt-10 ml-16" width={200} height={100} />
			<div className="mt-5">
				<h3 className="text-2xl font-semibold">Overview</h3>
				<p className="text-md max-w-2xl mt-2">
					In the interest of keeping travel options flexible and economical, travel has not been predefined. Instead, will be
					providing you with the best available options we have found, and will leave it up to you to compose your own
					retreat!
				</p>
			</div>
			<div className="mt-5">
				<h3 className="text-2xl font-semibold">Location</h3>
				<p className="text-md max-w-2xl mt-2">
					The wedding will be held at Iberostar Paraiso Beach Resort in Riviera Maya. Paraíso Beach is located on the Playa
					Paraíso complex grounds, which includes a total of 5 Iberostar All-Inclusive resorts. As guests of beach, we have
					access to two resorts, both Paraiso beach and Paraiso Del Mar. Just remember when booking that to attend the
					wedding you must be staying at Paraiso Beach!
				</p>
				<p className="text-md max-w-2xl mt-2">Avenida del Sol Km 309, Playa Paraiso, 77710 Riviera Maya, Q.R., Mexico</p>

				<div className="h-80">
					<Map />
				</div>
			</div>

			<div className="mt-5">
				<h3 className="text-2xl font-semibold">Timeline</h3>
				<p className="text-md max-w-2xl mt-2">
					We hope that everybody will be able to join us for week from{" "}
					<span className="font-bold">Wednesday November 20th</span> to{" "}
					<span className="font-bold">Wednesday November 27th</span>. - However, we understand that this may not be possible
					for everyone. Please feel free to customize your dates however you'd like, just remember that the ceremony will be
					held the afternoon of <span className="font-bold">Saturday November 23rd</span>.
				</p>
			</div>

			<div className="mt-5">
				<h3 className="text-2xl font-semibold">Booking Information</h3>
				<p className="text-md max-w-2xl mt-2">
					When booking, you have two options. You can book your flight and resort together through a vacation package
					provider such as Sunwing, or you can book your flight and resort stay separately.
				</p>
				<div className="mt-5">
					<h3 className="text-xl font-semibold">Seperate</h3>
					<p className="text-md max-w-2xl mt-2">
						Booking your flight and resort stay separately will give you the most flexibility in your travel plans, and will
						likely be more economical. This will require you to do the following:
						<ul className="list-decimal list-inside">
							<li>
								Book your flight. We leave you in the capable hands of{" "}
								<a className="underline" href="https://www.google.com/travel/flights" target="_blank">
									Google Flights
								</a>
								!
							</li>

							<li>
								Book your resort stay. This will be directly on the{" "}
								<a
									className="underline"
									href="https://www.iberostar.com/en-ca/hotels/riviera-maya/iberostar-paraiso-beach/"
									target="_blank"
								>
									Iberostar Paraiso Beach Website
								</a>
								.
							</li>
							<li>Book your airport transfer. </li>
						</ul>
					</p>
				</div>
			</div>

			{/* 

			Title of section: Travel Information
			Sub Title: Booking your journey
			Overview about bookings

			Location:
			Full address of resort with google maps link

			Timeline:

			Booking Information:
			Book with sunwing / airline
			Book with resort and Airline seperate
			Remember to book transit from the airport
			The resorts are located 30 minutes from Cancun
					International Airport. 


		Please email us after you have booked with the name you've booked the trip under
		
		
		*/}
		</div>
	);
}
