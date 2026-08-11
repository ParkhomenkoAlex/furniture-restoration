import { Header } from "./components/landing/Header";
import { Hero } from "./components/landing/Hero";
import { Services } from "./components/landing/Services";
import {HowItWorks} from "@/app/components/landing/HowItWorks";
import {About} from "@/app/components/landing/About";

export default function HomePage() {
    return (
        <>
            <Header />

            <main>
                <Hero />
                <Services />
                <HowItWorks />
                <About />
            </main>
        </>
    );
}