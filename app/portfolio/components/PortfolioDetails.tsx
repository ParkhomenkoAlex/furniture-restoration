import type { Project } from "../data/projects";

type PortfolioDetailsProps = {
    project: Project;
};

export default function PortfolioDetails({ project }: PortfolioDetailsProps) {
    return (
        <section className="border-t border-border px-6 py-20">
            <div className="mx-auto max-w-7xl">
                <div className="max-w-3xl">
                    {/* Materials */}
                    {project.materials && project.materials.length > 0 && (
                        <div>
                            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-muted">
                                Materials
                            </p>

                            <div className="mt-5 flex flex-wrap gap-2">
                                {project.materials.map((material) => (
                                    <span
                                        key={material}
                                        className="border border-border px-3 py-2 text-xs text-foreground"
                                    >
                                        {material}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Restoration */}
                    {project.restoration && (
                        <div className="mt-14 border-t border-border pt-10">
                            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-muted">
                                Restoration
                            </p>

                            <div className="mt-8 space-y-8">
                                {project.restoration.structuralRepair && (
                                    <div>
                                        <h2 className="text-sm font-medium text-foreground">
                                            Structural repair
                                        </h2>

                                        <p className="mt-2 text-sm leading-6 text-muted">
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

                                        <p className="mt-2 text-sm leading-6 text-muted">
                                            {project.restoration.woodwork}
                                        </p>
                                    </div>
                                )}

                                {project.restoration.upholstery && (
                                    <div>
                                        <h2 className="text-sm font-medium text-foreground">
                                            Upholstery
                                        </h2>

                                        <p className="mt-2 text-sm leading-6 text-muted">
                                            {project.restoration.upholstery}
                                        </p>
                                    </div>
                                )}

                                {project.restoration.finishing && (
                                    <div>
                                        <h2 className="text-sm font-medium text-foreground">
                                            Finishing
                                        </h2>

                                        <p className="mt-2 text-sm leading-6 text-muted">
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
