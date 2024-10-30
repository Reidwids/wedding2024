"use client";
import Loader from "@/app/components/Loader";
import TextDivider from "@/app/components/TextDivider";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

export default function Photos() {
	const galleryImages = [
		"/gallery/gallery-2.jpg",
		"/gallery/gallery-1.jpg",
		"/gallery/gallery-3.jpg",
		"/gallery/gallery-4.jpg",
		"/gallery/gallery-6.jpg",
		"/gallery/gallery-7.jpg",
		"/gallery/gallery-8.jpg",
		"/gallery/gallery-9.jpg",
		"/gallery/gallery-10.jpg",
		"/gallery/gallery-5.jpg",
		"/gallery/gallery-11.jpg",
		"/gallery/gallery-12.jpg",
		"/gallery/gallery-13.jpg",
		"/gallery/gallery-14.jpg",
		"/gallery/gallery-15.jpg",
		"/gallery/gallery-16.jpg",
		"/gallery/gallery-17.jpg",
		"/gallery/gallery-18.jpg",
		"/gallery/gallery-20.jpg",
		"/gallery/gallery-21.jpg",
		"/gallery/gallery-22.jpg",
		"/gallery/gallery-24.jpg",
		"/gallery/gallery-25.jpg",
		"/gallery/gallery-26.jpg",
		"/gallery/gallery-28.jpg",
		"/gallery/gallery-29.jpg",
		"/gallery/gallery-30.jpg",
		"/gallery/gallery-31.jpg",
		"/gallery/gallery-27.jpg",
		"/gallery/gallery-33.jpg",
		"/gallery/gallery-34.jpg",
		"/gallery/gallery-35.jpg",
		"/gallery/gallery-36.jpg",
		"/gallery/gallery-37.jpg",
		"/gallery/gallery-38.jpg",
		"/gallery/gallery-19.jpg",
	];

	const [selectedImage, setSelectedImage] = useState<StaticImageData | string | null>(null);
	const [loaded, setLoaded] = useState(false);
	let counter = 0;
	return (
		<div
			className="w-full flex flex-col items-center font-lora px-3 mb-5 text-md"
			style={{ boxShadow: "0 3px 3px #00000033 inset" }}
		>
			<div className="flex flex-col items-center w-full ">
				<h1 className="text-5xl mt-5 text-center font-roseritta">Wedding Memories</h1>
				<p className="max-w-2xl mt-5 text-center">
					If you'd like to share any photos with us that you've collected throughout the trip, or see photos that others have
					uploaded - please click below!
				</p>
				<a
					href="https://drive.google.com/drive/folders/1OgD28HUr6Dqq8Af7RI_TGco-SPUDo7En?usp=sharing"
					target="_blank"
					className="w-40 h-12 border-black border-[2px] will-change-transform rounded-md flex items-center p-2 mt-10 mb-16"
				>
					<Image alt="Google Drive Upload" src="/googleDrive.svg" width={40} height={40} className="cursor-pointer" />
					<div className="flex flex-col">
						<div className="ml-2 -mb-1 text-xs font-semibold">Upload to</div>
						<div className="ml-2 text-[15px] font-bold whitespace-nowrap">Google Drive</div>
					</div>
				</a>
				<TextDivider className={"mb-5"} />
				<h1 className="text-5xl text-center font-roseritta">Our Memories</h1>
				<div style={{ display: !loaded ? "flex" : "none" }} className="w-full justify-center mt-20">
					<Loader />
				</div>
				<div
					className="columns-2 md:columns-4 gap-3 px-3 space-y-3 mb-20 mt-5"
					style={{ visibility: loaded ? "visible" : "hidden" }}
				>
					{galleryImages.map((image, index) => (
						<Image
							onLoad={(e) => {
								counter++;
								if (counter === galleryImages.length) {
									setLoaded(true);
								}
							}}
							key={index}
							width={400}
							height={300}
							src={image}
							alt={`gallery-${index}`}
							className="w-full rounded-md shadow-picture cursor-pointer"
							onClick={(e) => {
								const imageSrc = e.currentTarget.getAttribute("src");
								setSelectedImage(imageSrc);
							}}
						/>
					))}
					<div
						style={{ display: selectedImage ? "flex" : "none" }}
						className="w-full h-[100%] fixed z-50 -top-3 left-0 bg-[#000000aa] justify-center items-center"
						onClick={() => {
							setSelectedImage(null);
						}}
					>
						{selectedImage && (
							<Image
								key={"selected-image"}
								src={selectedImage}
								alt="selected-image"
								width={600}
								height={800}
								className="w-auto h-fit px-2 rounded-xl cursor-pointer md:max-w-[800px] max-h-[500px] md:max-h-[600px]"
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
