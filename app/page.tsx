import Image from "next/image";
import CoverPhoto from "@/public/coverPhoto3.jpg";
import PlaneTrail from "@/public/plane-trail.svg";
import PlaneTrail2 from "@/public/plane-trail2.svg";
import { useEffect, useState } from "react";
import Spacer from "./components/Spacer";

export default function Home() {
	return (
		<main className="mt-5 flex flex-col w-full mb-10 items-center">
			<Image
				alt="Cover Photo"
				src={CoverPhoto}
				priority={true}
				style={{
					boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
					objectFit: "cover",
					objectPosition: "50% 90%",
					height: "600px",
				}}
			/>
			<div className="w-full flex justify-center">
				<Image alt="Text Divider" src="/textDividerDainty.svg" className="w-60 md:w-80 mt-12" width={200} height={100} />
			</div>
			<div
				className="w-full mt-20 text-center max-w-5xl flex flex-col md:flex-row items-center md:items-start md:justify-around "
				style={{}}
			>
				<div className="font-parisienne text-6xl md:text-[70px] relative w-[300px] md:w-fit my-2 md:my-0 flex flex-row ">
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
		</main>
	);
}
