import { HeroSection } from "./(landing)/HeroSection";
import { ServicesSection } from "./(landing)/ServicesSection";
import { HowItWorksSection } from "@/app/(landing)/HowItWorksSection";
import { AboutSection } from "@/app/(landing)/AboutSection";
import { CallToActionSection } from "@/app/(landing)/CallToActionSection";

export default function HomePage() {
    return (
        <>
            <main>
                <HeroSection />
                <ServicesSection />
                <HowItWorksSection />
                <AboutSection />
                <CallToActionSection />
            </main>
        </>
    );
}
