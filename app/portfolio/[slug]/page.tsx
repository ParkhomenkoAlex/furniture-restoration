import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

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
                    <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:items-start">
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

                        <div className="lg:sticky lg:top-28">
                            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
                                {project.category}
                            </p>

                            <h1 className="mt-4 text-5xl font-medium leading-[0.9] tracking-[-0.04em] text-foreground">
                                {project.title}
                            </h1>

                            <p className="mt-4 text-sm text-muted">
                                {project.year}
                            </p>

                            <div className="mt-8 border-t border-border pt-8">
                                <p className="leading-7 text-muted">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
