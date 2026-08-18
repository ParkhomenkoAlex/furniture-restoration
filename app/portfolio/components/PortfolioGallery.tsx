import Image from "next/image";

import type { Project } from "../data/projects";

type PortfolioGalleryProps = {
    project: Project;
};

export default function PortfolioGallery({ project }: PortfolioGalleryProps) {
    if (!project.images || project.images.length <= 1) {
        return null;
    }

    return (
        <section className="px-6 py-20">
            <div className="mx-auto max-w-7xl">
                <p className="mb-10 text-[10px] font-medium uppercase tracking-[0.22em] text-muted">
                    A closer look
                </p>

                <div className="grid gap-8 md:grid-cols-2">
                    {project.images.slice(1).map((image) => (
                        <div
                            key={image.src}
                            className="overflow-hidden bg-surface"
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                width={1000}
                                height={750}
                                className="h-auto w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
