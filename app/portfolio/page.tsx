import PortfolioCard from "./components/PortfolioCard";
import { projects } from "./data/projects";

export default function PortfolioPage() {
    return (
        <main>
            <section className="border-b border-border px-6 py-24">
                <div className="mx-auto max-w-7xl">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
                        Our work
                    </p>

                    <h1 className="mt-4 max-w-3xl text-5xl font-medium leading-[0.9] tracking-[-0.04em] text-foreground md:text-6xl">
                        Furniture restored with care and respect for its
                        history.
                    </h1>

                    <p className="mt-6 max-w-2xl text-base leading-7 text-muted">
                        Explore a selection of furniture restoration projects,
                        from complete refinishing to upholstery and structural
                        repairs.
                    </p>
                </div>
            </section>

            <section className="px-6 py-20">
                <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-16 md:grid-cols-2">
                    {projects.map((project) => (
                        <PortfolioCard key={project.slug} project={project} />
                    ))}
                </div>
            </section>
        </main>
    );
}
