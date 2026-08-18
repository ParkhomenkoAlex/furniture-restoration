import type { Project } from "../data/projects";

type PortfolioDetailsProps = {
    project: Project;
};

export default function PortfolioDetails({ project }: PortfolioDetailsProps) {
    if (
        (!project.materials || project.materials.length === 0) &&
        !project.restoration
    ) {
        return null;
    }

    return (
        <section className="border-t border-border px-6 py-20">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-12 md:grid-cols-2">
                    {/* Materials */}
                    {project.materials && project.materials.length > 0 && (
                        <div>
                            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-muted">
                                Materials
                            </p>

                            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                                {project.materials.map((material) => (
                                    <span
                                        key={material}
                                        className="text-sm text-foreground"
                                    >
                                        {material}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Restoration */}
                    {project.restoration && (
                        <div>
                            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-muted">
                                Restoration
                            </p>

                            <div className="mt-5 space-y-5">
                                {project.restoration.structuralRepair && (
                                    <div>
                                        <h2 className="text-sm font-medium text-foreground">
                                            Structural repair
                                        </h2>

                                        <p className="mt-1 text-sm leading-6 text-muted">
                                            {
                                                project.restoration
                                                    .structuralRepair
                                            }
                                        </p>
                                    </div>
                                )}

                                {project.restoration.woodwork && (
                                    <div>
                                        <h2 className="text-sm font-medium text-foreground">
                                            Woodwork
                                        </h2>

                                        <p className="mt-1 text-sm leading-6 text-muted">
                                            {project.restoration.woodwork}
                                        </p>
                                    </div>
                                )}

                                {project.restoration.upholstery && (
                                    <div>
                                        <h2 className="text-sm font-medium text-foreground">
                                            Upholstery
                                        </h2>

                                        <p className="mt-1 text-sm leading-6 text-muted">
                                            {project.restoration.upholstery}
                                        </p>
                                    </div>
                                )}

                                {project.restoration.finishing && (
                                    <div>
                                        <h2 className="text-sm font-medium text-foreground">
                                            Finishing
                                        </h2>

                                        <p className="mt-1 text-sm leading-6 text-muted">
                                            {project.restoration.finishing}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
