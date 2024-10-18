import Image from "next/image";
import React from "react";
import Map from "./Map";

export default function Travel() {
	return (
		<div
			className="w-full flex flex-col items-center font-lora px-3 mb-5"
			style={{ boxShadow: "0 3px 3px #00000033 inset" }}
		>
			<h1 className="text-5xl mt-5 text-center font-roseritta">Travel Information</h1>
			<h1 className="text-xl mt-1 font-lora">Booking your journey</h1>
			<Image alt="Plane Trail" src="/plane-trail2.svg" className="-rotate-[27deg] -mt-10 ml-16 " width={200} height={200} />
			<div className="mt-5 max-w-3xl bg-white ">
				<div className="">
					<h3 className="text-2xl font-[500]">Overview</h3>
					<p className="text-md mt-2">
						In the interest of keeping travel options flexible and economical, travel has not been predefined. Instead, will
						be providing you with the best available options we have found, and will leave it up to you to create your own
						vacation!
					</p>
				</div>
				<div className="mt-5">
					<h3 className="text-2xl font-[500]">Location</h3>
					<p className="text-md mt-2">
						The wedding will be held at Iberostar Paraiso Beach Resort (Also known as "Iberostar Waves Paraiso Beach") in
						Riviera Maya. Paraiso Beach is located on the Playa Paraíso complex grounds, which includes a total of 5
						Iberostar All-Inclusive resorts. Remember when booking that to attend the wedding you must be staying
						specifically at Iberostar Paraiso Beach! (Not Del Mar, Lindo, Maya, or Grand)
					</p>
				</div>

				<div className="h-80 my-5">
					<Map />
					<p className="text-xs ">Avenida del Sol Km 309, Playa Paraiso, 77710 Riviera Maya, Q.R., Mexico</p>
				</div>

				<div className="mt-5">
					<h3 className="text-2xl font-[500] pt-5">Timeline</h3>
					<p className="text-md mt-2">
						We hope that everybody will be able to join us for a week from{" "}
						<span className="font-bold">Wednesday November 20th</span> to{" "}
						<span className="font-bold">Wednesday November 27th</span>. However, we understand that this may not be possible
						for everyone. Please feel free to customize your dates however you'd like, just remember that the ceremony will
						be held on <span className="font-bold">Saturday November 23rd</span>.
					</p>
				</div>

				<div className="mt-5">
					<h3 className="text-2xl font-[500]">Booking Information</h3>
					<p className="text-md mt-2">
						When booking, you have two options. You can book your flight and resort together through a vacation package
						provider such as Sunwing or AirTransat, or you can book the flight and resort separately.
					</p>
					<p className="text-md text-red-600 mt-5">
						*Note that we advise waiting to book your reservation until later in the year. Prices are high right now, and
						will most likely come down as the year progresses.
					</p>
					<div className="mt-5">
						<h3 className="text-xl font-[500]">Seperate</h3>
						<div className="text-md mt-2">
							Booking your flight and resort stay separately will give you the most flexibility in your travel plans, and
							will likely be more economical. This will require you to do the following:
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
								<li>
									Book your airport transfer. We recommend{" "}
									<a className="underline" href="https://www.canadatransfers.com/" target="_blank">
										Canada Transfers
									</a>
									. If you know other guests who will be arriving at the same time, we suggest booking your transfer
									together.
								</li>
							</ul>
							<div className="mt-2">
								From what we've seen, this option usually falls in the $1400 - $1800 pp range for a 7 night stay.
							</div>
						</div>
					</div>
					<div className="mt-5">
						<h3 className="text-xl font-[500]">Vacation Package</h3>
						<div className="text-md mt-2">
							Booking your stay through a vacation package provider can be more convenient, and will typically provide you
							with a complete travel itinerary. This will require you to do the following:
							<ul className="list-decimal list-inside">
								<li>
									Choose your desired vacation package provider. Ensure they offer packages specifically for Iberostar
									Paraiso Beach - We suggest using{" "}
									<a
										className="underline"
										href="https://www.sunwing.ca/en/hotel/mexico/riviera-maya/iberostar-paraiso-beach"
										target="_blank"
									>
										Sunwing
									</a>{" "}
									or{" "}
									<a
										className="underline"
										href="https://www.transat.com/en-CA/hotels/iberostar-paraiso-beach?date=2024-11-20"
										target="_blank"
									>
										Air Transat
									</a>
									!
								</li>

								<li>
									Book your vacation. Ensure the flight, resort stay, and airport transfer are all included in the package.
								</li>
							</ul>
							<div className="mt-2">
								From what we've seen, this option usually falls in the $1700 - $2100 pp range for a 7 night stay.
							</div>
						</div>
					</div>
					<div className="mt-5">
						<h3 className="text-2xl font-[500]">Finishing Steps</h3>
						<div className="text-md mt-2">
							<div>
								Once you have completed your booking, please let us know what your travel plans are! We will be putting
								together a list of everyone's booking details and submitting it to the resort in efforts to put all of our
								rooms in the same area. Please send me an email at{" "}
								<a className="underline" href="mailto:reidwids@gmail.com">
									reidwids@gmail.com
								</a>{" "}
								with the following information:
								<ul className="list-disc list-inside">
									<li>The primary name associated to your booking with the resort</li>
									<li>The dates you will be staying at the resort</li>
									<li>Your flight arrival and departure times</li>
								</ul>
							</div>
						</div>
					</div>
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
