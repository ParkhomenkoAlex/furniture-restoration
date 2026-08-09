import {Header} from "@/app/components/landing/Header";
import {Hero} from "@/app/components/landing/Hero";
import {Services} from "@/app/components/landing/Services";

export default function HomePage() {
    return (
        <>
            <Header />

            <main>
                <Hero />
                <Services />
            </main>
        </>
    );
}