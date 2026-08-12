import type { Metadata } from "next";
import { Cormorant_Garamond, Geist } from "next/font/google";

import { Header } from "./components/Header";

import "./globals.css";
import { ScrollToTop } from "@/app/components/navigation/ScrollToTop";

const geist = Geist({
    variable: "--font-geist",
    subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
    variable: "--font-cormorant",
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    style: ["normal", "italic"],
});

export const metadata: Metadata = {
    title: {
        default: "Furniture Restoration Studio",
        template: "%s — Furniture Restoration Studio",
    },
    description:
        "Professional furniture restoration with respect for original materials, craftsmanship, and character.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html
            lang="en"
            className={`${geist.variable} ${cormorant.variable} h-full antialiased`}
        >
            <body>
                <ScrollToTop />
                <Header />
                {children}
            </body>
        </html>
    );
}
