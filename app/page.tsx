import { HeroSection } from "./(landing)/HeroSection";
import { Services } from "./(landing)/Services";
import { HowItWorksSection } from "@/app/(landing)/HowItWorksSection";
import { AboutSection } from "@/app/(landing)/AboutSection";

export default function HomePage() {
    return (
        <>
            <main>
                <HeroSection />
                <Services />
                <HowItWorksSection />
                <AboutSection />
            </main>
        </>
    );
}
