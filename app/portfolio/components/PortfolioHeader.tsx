import Link from "next/link";

import type { Project } from "../data/projects";

type PortfolioHeaderProps = {
    project: Project;
};

export default function PortfolioHeader({ project }: PortfolioHeaderProps) {
    return (
        <div>
            {/* Back */}
            <Link
                href="/portfolio"
                className="text-sm text-muted transition-colors hover:text-foreground"
            >
                ← Back to portfolio
            </Link>

            {/* Project information */}
            <div className="mt-12">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
                    {project.category}
                </p>

                <h1 className="mt-4 text-5xl font-medium leading-[0.9] tracking-[-0.04em] text-foreground">
                    {project.title}
                </h1>

                <div className="mt-6 flex items-center gap-3 text-sm text-muted">
                    <span>{project.year}</span>

                    {project.location && (
                        <>
                            <span aria-hidden="true">·</span>
                            <span>{project.location}</span>
                        </>
                    )}
                </div>
            </div>

            {/* Story */}
            <div className="mt-10 border-t border-border pt-8">
                <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-muted">
                    The story
                </p>

                <p className="mt-5 leading-7 text-muted">
                    {project.longDescription}
                </p>
            </div>
        </div>
    );
}
