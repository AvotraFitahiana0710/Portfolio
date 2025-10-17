import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Anek_Telugu } from "next/font/google";
// import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import VisitPing from "./_components/VisitPing";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});
const AnekTelugu = Anek_Telugu({
	variable: "--font-caption",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Portfolio RAKOTOARISOA Avotra Fitahiana",
	description: "Développeur Full Stack",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="h-full">
			<body
				className={cn(
					geistSans.variable,
					AnekTelugu.variable,
					geistMono.variable,
					"font-sans h-full bg-background text-foreground",
				)}
			>
				<VisitPing />
				{children}
				<Analytics />
				<SpeedInsights />
				</body>
				</html>
				);
				}
