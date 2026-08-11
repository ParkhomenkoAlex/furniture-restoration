import { Header } from "./components/landing/Header";
import { Hero } from "./components/landing/Hero";
import { Services } from "./components/landing/Services";
import {HowItWorks} from "@/app/components/landing/HowItWorks";

export default function HomePage() {
    return (
        <>
            <Header />

            <main>
                <Hero />
                <Services />
                <HowItWorks />
            </main>
        </>
    );
}