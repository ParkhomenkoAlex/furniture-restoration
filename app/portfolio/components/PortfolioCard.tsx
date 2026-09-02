import Image from "next/image";
import Link from "next/link";

import type { Project } from "../data/projects";

type PortfolioCardProps = {
    project: Project;
};

export default function PortfolioCard({ project }: PortfolioCardProps) {
    return (
        <Link href={`/portfolio/${project.slug}`} className="group block">
            <div className="flex h-full flex-col">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col pt-6">
                    <div className="flex items-start justify-between">
                        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted transition-colors duration-300 group-hover:text-foreground">
                            {project.category}
                        </span>

                        <span className="text-xl text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-foreground">
                            ↗
                        </span>
                    </div>

                    <div className="mt-5">
                        <h2 className="text-2xl font-medium tracking-[-0.03em] text-foreground transition-transform duration-300 group-hover:translate-x-1 sm:text-3xl">
                            {project.title}
                        </h2>

                        <p className="mt-3 max-w-[460px] text-sm leading-6 text-muted transition-colors duration-300 group-hover:text-foreground sm:text-base sm:leading-7">
                            {project.shortDescription}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
}
