import { notFound } from "next/navigation";

import { projects } from "../data/projects";

import PortfolioBeforeAfter from "../components/PortfolioBeforeAfter";
import PortfolioDetails from "../components/PortfolioDetails";
import PortfolioGallery from "../components/PortfolioGallery";
import PortfolioHeader from "../components/PortfolioHeader";

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
            <PortfolioHeader project={project} />
            <PortfolioDetails project={project} />
            <PortfolioBeforeAfter project={project} />
            <PortfolioGallery project={project} />
        </main>
    );
}
