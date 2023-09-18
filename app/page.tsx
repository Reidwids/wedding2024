import Image from "next/image";
import CoverPhoto from "@/public/coverPhoto3.jpg";
import PlaneTrail from "@/public/plane-trail.svg";
import PlaneTrail2 from "@/public/plane-trail2.svg";
import Barcode from "@/public/barcode.png";
import { useEffect, useState } from "react";
import Spacer from "./components/Spacer";

export default function Home() {
	return (
		<main className="flex flex-col w-full mb-10 items-center relative">
			<Image
				alt="Cover Photo"
				src={CoverPhoto}
				priority={true}
				style={{
					// boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
					objectFit: "cover",
					objectPosition: "37% 90%",
				}}
				className="h-[550px] md:h-[800px] absolute -top-20 -z-10"
			/>
			{/* <div className="absolute text-sm top-5 left-5 w-full flex flex-row justify-start font-bodoni space-x-8">
				<div className=" font-motherland text-2xl mr-5">Natasha & Derek</div>
				<div>RSVP</div>
				<div>Photos</div>
				<div>Events</div>
				<div>Travel</div>
				<div>FAQ</div>
			</div> */}
			{/* <div
				className="font-lora absolute text-left w-full text-white md:text-black bg-[#00000077] md:bg-transparent p-5"
				style={{ letterSpacing: "2px" }}
			>
				<div className="font-roseritta text-[40px] md:text-[70px] flex flex-row ">
					<div>SAVE</div>&nbsp;<div className="font-motherland text-[70px] -rotate-12 mt-14">the</div>&nbsp;
					<div className="mt-20">Date</div>
				</div>
				<div className="text-2xl mt-10">RIVIERIA MAYA, MEXICO</div>
				<div className="text-md md:text-lg mt-5">
					<div>NOVEMBER 20 - 26 2024</div>
					<div>CEREMONY NOV 23</div>
				</div>
			</div> */}

			{/* <div className="w-full flex justify-center">
				<Image alt="Text Divider" src="/textDividerDainty.svg" className="w-60 md:w-80 my-12" width={200} height={100} />
			</div> */}
			{/* <div
				className="flex flex-row border-[1px] border-[#efefef] rounded-xl mx-5"
				style={{
					boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
				}}
			>
				<div className="w-10 bg-[#efefef] rounded-tl-xl rounded-bl-xl"></div>
				<div className="flex flex-row p-10 border-r-[black] border-r-2 border-dashed min-w-[700px] relative">
					<div className="font-parisienne text-6xl md:text-[70px] relative w-[300px] md:w-fit min-w-[270px] my-2 md:my-0 flex flex-row ">
						Save The <br />
						Date
						<Image alt="Plane with trail" src={PlaneTrail} className="w-32 absolute -top-10 -right-5 -rotate-23 md:hidden" />
					</div>
					<Image alt="Plane with trail" src={PlaneTrail2} className="w-72 rotate-12 mt-20 invisible md:visible" />
					<div className={"font-lora"} style={{ letterSpacing: "3px" }}>
						<div className="text-2xl mt-5 md:mt-48">RIVIERIA MAYA, MEXICO</div>
						<div className="font-lora text-md md:text-lg mt-5">
							<div>NOVEMBER 20 - 26 2024</div>
							<div>CEREMONY NOV 23</div>
						</div>
					</div>
				</div>
				<div className="flex flex-row relative w-64 items items-center justify-between p-4 ">
					<div className="flex flex-col w-full mr-4">
						<div>
							<div className="font-bold">FLIGHT C101</div>
							<div className="">TERMINAL B</div>
						</div>
						<div className="flex flex-row justify-between mt-5">
							<div>
								<div className="font-bold">GATE</div>
								<div className="">12</div>
							</div>
							<div>
								<div className="font-bold">BOARDING</div>
								<div className="">7:00AM</div>
							</div>
						</div>
						<div className="flex flex-row justify-between mt-5">
							<div>
								<div className="font-bold">SEAT</div>
								<div className="">18A</div>
							</div>
						</div>
					</div>
					<div className="font-libreBarcode text-6xl relative h-60 w-12 mr-3">
						<div className="rotate-90 origin-left left-3 -top-6 absolute">DN202024</div>
					</div>
				</div>
			</div> */}
		</main>
	);
}
