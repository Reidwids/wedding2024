import "./globals.css";
import type { Metadata } from "next";
import { Libre_Baskerville } from "next/font/google";
import { Parisienne } from "next/font/google";
import Header from "./Header";
import Footer from "./Footer";

const libreBaskerville = Libre_Baskerville({
	weight: ["400", "700"],
	style: ["normal", "italic"],
	subsets: ["latin"],
	variable: "--font-libre-baskerville",
});

const parisienne = Parisienne({
	weight: ["400"],
	style: ["normal"],
	subsets: ["latin"],
	variable: "--font-parisienne",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<link rel="shortcut icon" href="/cropped-proteus-logo.png" />
			</head>
			<body className={`${parisienne.variable} ${libreBaskerville.variable} relative`}>
				<Header />
				<div className="min-w-full flex justify-center">{children}</div>
				<Footer />
			</body>
		</html>
	);
}
