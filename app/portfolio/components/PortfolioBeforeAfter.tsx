import Image from "next/image";

import type { Project } from "../data/projects";

type PortfolioBeforeAfterProps = {
    project: Project;
};

export default function PortfolioBeforeAfter({
    project,
}: PortfolioBeforeAfterProps) {
    if (!project.beforeAfter) {
        return null;
    }

    return (
        <section className="border-t border-border px-6 py-20">
            <div className="mx-auto max-w-7xl">
                <p className="mb-10 text-[10px] font-medium uppercase tracking-[0.22em] text-muted">
                    Before & after
                </p>

                <div className="grid gap-8 md:grid-cols-2">
                    {/* Before */}
                    <div>
                        <div className="overflow-hidden bg-surface">
                            <Image
                                src={project.beforeAfter.before}
                                alt={`${project.title} before restoration`}
                                width={1000}
                                height={750}
                                className="h-auto w-full object-cover"
                            />
                        </div>

                        <p className="mt-4 text-[10px] uppercase tracking-[0.22em] text-muted">
                            Before
                        </p>
                    </div>

                    {/* After */}
                    <div>
                        <div className="overflow-hidden bg-surface">
                            <Image
                                src={project.beforeAfter.after}
                                alt={`${project.title} after restoration`}
                                width={1000}
                                height={750}
                                className="h-auto w-full object-cover"
                            />
                        </div>

                        <p className="mt-4 text-[10px] uppercase tracking-[0.22em] text-muted">
                            After
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
