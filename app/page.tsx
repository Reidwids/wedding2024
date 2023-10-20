import CountdownTimer from "./components/countdown/Countdown";

export default function Home() {
	return (
		<main className="flex flex-col w-full  items-center relative overflow-hidden -mt-[80px]">
			<div
				className="w-full relative flex justify-center h-[650px] md:h-[800px] -z-10
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
						<div>NOVEMBER 20 - 27 2024</div>
						<div>CEREMONY NOV 23</div>
					</div>
				</div>
			</div>
			<div
				className="w-full flex justify-center h-[450px] md:h-[800px] -z-10
				bg-scroll md:bg-fixed bg-cover bg-custom-pos2 md:bg-custom-pos2-1 bg-no-repeat"
				style={{
					backgroundImage: "url('/bwVert1.jpg')",
					boxShadow:
						"rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
				}}
			/>

			<div className="max-w-4xl flex flex-col items-center my-6 md:mb-8 ">
				<div className="font-roseritta text-[35px] md:text-[64px] text-center" style={{ letterSpacing: "2px" }}>
					<div className="">Meet Us In Mexico</div>
					<div className=""></div>
				</div>
				<div className="font-lora w-full text-center mt-3 relative " style={{ letterSpacing: "2px" }}>
					<div className="text-2xl md:text-5xl font-motherland">See you in paradise</div>
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
		</main>
	);
}
