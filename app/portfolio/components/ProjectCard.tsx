import Image from "next/image";
import Link from "next/link";

import type { Project } from "../data/projects";

type ProjectCardProps = {
    project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Link href={`/portfolio/${project.slug}`} className="group block">
            <div className="overflow-hidden bg-surface">
                <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            <div className="mt-5">
                <div className="flex items-center justify-between gap-4">
                    <h2 className="text-2xl font-medium tracking-[-0.03em] text-foreground">
                        {project.title}
                    </h2>

                    <span className="text-sm text-muted">{project.year}</span>
                </div>

                <p className="mt-2 text-sm uppercase tracking-wider text-muted">
                    {project.category}
                </p>

                <p className="mt-3 max-w-xl text-sm leading-6 text-muted">
                    {project.description}
                </p>
            </div>
        </Link>
    );
}
