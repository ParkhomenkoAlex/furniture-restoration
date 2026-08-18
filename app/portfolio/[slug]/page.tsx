import { notFound } from "next/navigation";

import PortfolioBeforeAfter from "../components/PortfolioBeforeAfter";
import PortfolioDetails from "../components/PortfolioDetails";
import PortfolioGallery from "../components/PortfolioGallery";
import PortfolioHero from "../components/PortfolioHero";
import { projects } from "../data/projects";

type ProjectPageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;

    const project = projects.find((project) => project.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <main>
            {/* Image + project header + story */}
            <PortfolioHero project={project} />

            {/* Materials + restoration */}
            <PortfolioDetails project={project} />

            {/* Before / After */}
            <PortfolioBeforeAfter project={project} />

            {/* Gallery */}
            <PortfolioGallery project={project} />
        </main>
    );
}
