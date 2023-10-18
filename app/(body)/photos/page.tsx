"use client";
import Loader from "@/app/components/Loader";
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
		<div className="text-center font-parisienne ">
			<div style={{ display: !loaded ? "flex" : "none" }} className="w-full justify-center mt-20">
				<Loader />
			</div>
			<div
				className="columns-2 md:columns-4 gap-3 px-3 space-y-3 mb-20 "
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
							className="w-auto h-fit px-2 rounded-xl cursor-pointer md:max-w-[800px] max-h-[500px] md:max-h-[600px]"
						/>
					)}
				</div>
			</div>
		</div>
	);
}
