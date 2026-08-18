import Image from "next/image";

import type { Project } from "../data/projects";
import PortfolioHeader from "./PortfolioHeader";

type PortfolioHeroProps = {
    project: Project;
};

export default function PortfolioHero({ project }: PortfolioHeroProps) {
    return (
        <section className="px-6 py-12">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
                    {/* Image */}
                    <div className="overflow-hidden bg-surface lg:sticky lg:top-28">
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={1200}
                            height={900}
                            priority
                            className="h-auto w-full object-cover"
                        />
                    </div>

                    {/* Project introduction */}
                    <PortfolioHeader project={project} />
                </div>
            </div>
        </section>
    );
}
