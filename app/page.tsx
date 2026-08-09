import { Header } from "./components/landing/Header";
import { Hero } from "./components/landing/Hero";

export default function HomePage() {
    return (
        <>
            <Header />

            <main>
                <Hero />
            </main>
        </>
    );
}