import "./globals.css";
import { Parisienne, Lora, Libre_Baskerville } from "next/font/google";
// Parisienne and Libre Baskerville
// Parisienne and Lora
// Sacramento and Montserrat
import Header from "./Header";
import Footer from "./Footer";

const lora = Lora({
	weight: ["400", "700"],
	style: ["normal", "italic"],
	subsets: ["latin"],
	variable: "--font-lora",
});

const parisienne = Parisienne({
	weight: ["400"],
	style: ["normal"],
	subsets: ["latin"],
	variable: "--font-parisienne",
});

const libreBaskerville = Libre_Baskerville({
	weight: ["400"],
	style: ["normal"],
	subsets: ["latin"],
	variable: "--font-libreBaskerville",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<link rel="shortcut icon" href="/heart.png" />
				<title>Natasha & Derek</title>
			</head>
			<body className={`${parisienne.variable} ${lora.variable} relative`}>
				<Header />
				<div className="min-w-full flex justify-center min-h-[calc(100vh-160px)]">{children}</div>
				<Footer />
			</body>
		</html>
	);
}
