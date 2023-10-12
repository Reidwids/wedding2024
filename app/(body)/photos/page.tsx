"use client";
import TextDivider from "@/app/components/TextDivider";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import Gallery1 from "@/public/gallery/gallery-1.jpg";
import Gallery2L from "@/public/gallery/gallery-2.jpg";
import Gallery3 from "@/public/gallery/gallery-3.jpg";
import Gallery4L from "@/public/gallery/gallery-4.jpg";
import Gallery5 from "@/public/gallery/gallery-5.jpg";
import Gallery6 from "@/public/gallery/gallery-6.jpg";
import Gallery7 from "@/public/gallery/gallery-7.jpg";
import Gallery8 from "@/public/gallery/gallery-8.jpg";
import Gallery9 from "@/public/gallery/gallery-9.jpg";
import Gallery10 from "@/public/gallery/gallery-10.jpg";
import Gallery11 from "@/public/gallery/gallery-11.jpg";
import Gallery12 from "@/public/gallery/gallery-12.jpg";
import Gallery13 from "@/public/gallery/gallery-13.jpg";
import Gallery14 from "@/public/gallery/gallery-14.jpg";
import Gallery15 from "@/public/gallery/gallery-15.jpg";
import Gallery16 from "@/public/gallery/gallery-16.jpg";
import Gallery17 from "@/public/gallery/gallery-17.jpg";
import Gallery18 from "@/public/gallery/gallery-18.jpg";
import Gallery19 from "@/public/gallery/gallery-19.jpg";
import Gallery20 from "@/public/gallery/gallery-20.jpg";
import Gallery21 from "@/public/gallery/gallery-21.jpg";
import Gallery22 from "@/public/gallery/gallery-22.jpg";
import Gallery24 from "@/public/gallery/gallery-24.jpg";
import Gallery25 from "@/public/gallery/gallery-25.jpg";
import Gallery26 from "@/public/gallery/gallery-26.jpg";
import Gallery27 from "@/public/gallery/gallery-27.jpg";
import Gallery28 from "@/public/gallery/gallery-28.jpg";
import Gallery29 from "@/public/gallery/gallery-29.jpg";
import Gallery30 from "@/public/gallery/gallery-30.jpg";
import Gallery31 from "@/public/gallery/gallery-31.jpg";
import Gallery33 from "@/public/gallery/gallery-33.jpg";
import Gallery34 from "@/public/gallery/gallery-34.jpg";
import Gallery35 from "@/public/gallery/gallery-35.jpg";
import Gallery36 from "@/public/gallery/gallery-36.jpg";
import Gallery37 from "@/public/gallery/gallery-37.jpg";
import Gallery38 from "@/public/gallery/gallery-38.jpg";

export default function Photos() {
	const imageList = [
		Gallery2L,
		Gallery1,
		Gallery3,
		Gallery4L,
		Gallery6,
		Gallery7,
		Gallery8,
		Gallery9,
		Gallery10,
		Gallery5,
		Gallery11,
		Gallery12,
		Gallery13,
		Gallery14,
		Gallery15,
		Gallery16,
		Gallery17,
		Gallery18,
		Gallery20,
		Gallery21,
		Gallery22,
		Gallery24,
		Gallery25,
		Gallery26,
		Gallery28,
		Gallery29,
		Gallery30,
		Gallery31,
		Gallery27,
		Gallery33,
		Gallery34,
		Gallery35,
		Gallery36,
		Gallery37,
		Gallery38,
		Gallery19,
	];

	const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(null);
	return (
		<div className="text-center font-parisienne ">
			<TextDivider />
			<div className="columns-2 md:columns-4 gap-3 px-3 space-y-3 mb-20 ">
				{imageList.map((image, index) => (
					<Image
						key={index}
						src={image}
						alt={`gallery-${index}`}
						className="w-full rounded-md shadow-picture cursor-pointer"
						onClick={() => {
							setSelectedImage(image);
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
					<img
						src={selectedImage?.src}
						alt="selected-image"
						className="w-auto h-fit px-2 rounded-xl cursor-pointer md:max-w-[800px] max-h-[500px] md:max-h-[600px]"
					/>
				</div>
			</div>
		</div>
	);
}
