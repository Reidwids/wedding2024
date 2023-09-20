import Image from "next/image";
import CountdownTimer from "./components/countdown/Countdown";
import planeTrail from "@/public/plane-trail.svg";

export default function Home() {
	return (
		<main className="flex flex-col w-full mb-10 items-center relative">
			<div
				className="w-full relative flex justify-center h-[650px] md:h-[800px] -mt-[80px] -z-10
				bg-scroll md:bg-fixed bg-cover bg-custom-pos1 md:bg-bottom bg-no-repeat"
				style={{
					backgroundImage: "url('/CoverPhoto3.jpg')",
					boxShadow:
						"rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
				}}
			>
				<div className="absolute top-28 md:top-40 left-3 md:left-5 font-roseritta text-[29px] md:text-[55px] fade-in-text">
					<span>We're</span>&nbsp;
					<span>Getting</span>
					<br />
					<span>Married</span>
				</div>
			</div>
			<div className="max-w-4xl flex flex-col items-center my-6 ">
				<div className="font-roseritta text-[35px] md:text-[70px] flex flex-row " style={{ letterSpacing: "2px" }}>
					<div>SAVE</div>&nbsp;<div className="font-motherland text-[55px] md:text-[70px] -rotate-12 mt-6 md:mt-14">the</div>
					&nbsp;
					<div className="mt-14 md:mt-20">Date</div>
				</div>
				<div className="font-lora w-full text-center mt-5" style={{ letterSpacing: "2px" }}>
					<div className="text-lg md:text-2xl">RIVIERIA MAYA, MEXICO</div>
					<div className="text-sm md:text-lg mt-3 md:mt-5">
						<div>NOVEMBER 20 - 26 2024</div>
						<div>CEREMONY NOV 23</div>
					</div>
				</div>
			</div>
			<div
				className="w-full flex justify-center h-[450px] md:h-[800px] -z-10
				bg-scroll md:bg-fixed bg-cover bg-custom-pos2 bg-no-repeat"
				style={{
					backgroundImage: "url('/bwVert1.jpg')",
					boxShadow:
						"rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
				}}
			/>

			<div className="max-w-4xl flex flex-col items-center my-6 ">
				<div className="font-roseritta text-[35px] md:text-[70px] text-center" style={{ letterSpacing: "2px" }}>
					<div className="">Meet Us In Mexico</div>
					<div className=""></div>
				</div>
				<div className="font-lora w-full text-center mt-3" style={{ letterSpacing: "2px" }}>
					<div className="text-lg md:text-5xl font-motherland">See you in paradise</div>
					<Image alt="Plane with trail" src={planeTrail} className="w-32 absolute -top-10 -right-5 -rotate-23 md:hidden" />
				</div>
			</div>

			<div
				className="w-full flex h-[400px] md:h-[800px] -z-10
				bg-scroll md:bg-fixed bg-cover bg-custom-pos3 bg-no-repeat "
				style={{
					backgroundImage: "url('/feetPic1.jpg')",
					boxShadow:
						"rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
				}}
			>
				<div
					className="flex w-full items-center h-full text-center text-white font-roseritta text-[80px]"
					style={{ letterSpacing: "4px" }}
				>
					<div className="w-full flex justify-center bg-[#00000088]">
						<div className="w-full max-w-2xl">
							<div>11.23.24</div>
							<CountdownTimer />
						</div>
					</div>
				</div>
			</div>

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
