import Image from "next/image";
import Link from "next/link";

import type { Project } from "../data/projects";

type PortfolioHeaderProps = {
    project: Project;
};

export default function PortfolioHeader({ project }: PortfolioHeaderProps) {
    return (
        <>
            <section className="px-6 py-12">
                <div className="mx-auto max-w-7xl">
                    <Link
                        href="/portfolio"
                        className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                        ← Back to portfolio
                    </Link>
                </div>
            </section>

            <section className="px-6 pb-24">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
                        {/* Image */}
                        <div className="overflow-hidden bg-surface">
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={1200}
                                height={900}
                                priority
                                className="h-auto w-full object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div className="lg:sticky lg:top-28">
                            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
                                {project.category}
                            </p>

                            <h1 className="mt-4 text-5xl font-medium leading-[0.9] tracking-[-0.04em] text-foreground">
                                {project.title}
                            </h1>

                            <div className="mt-4 flex gap-8">
                                <p className="text-sm text-muted">
                                    {project.year}
                                </p>

                                {project.location && (
                                    <p className="text-sm text-muted">
                                        {project.location}
                                    </p>
                                )}
                            </div>

                            {/* The story */}
                            <div className="mt-8 border-t border-border pt-8">
                                <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-muted">
                                    The story
                                </p>

                                <p className="mt-5 leading-7 text-muted">
                                    {project.longDescription}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
