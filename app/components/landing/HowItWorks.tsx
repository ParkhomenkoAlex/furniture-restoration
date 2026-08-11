import { howItWorksSteps } from "@/app/data/howItWorksSteps";

export function HowItWorks() {
    return (
        <section
            id="how-it-works"
            className="border-t border-neutral-200 bg-[#f4f2ed]"
        >
            <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
                <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
                    {/* Section intro */}
                    <div className="lg:sticky lg:top-24 lg:self-start">
                        <div className="flex items-center gap-4">
                            <span className="h-px w-8 bg-neutral-400" />

                            <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-neutral-500">
                                How it works
                            </span>
                        </div>

                        <h2 className="mt-6 max-w-[520px] text-5xl font-medium leading-[0.92] tracking-[-0.045em] text-neutral-950 sm:text-6xl lg:text-7xl">
                            A considered
                            <br />
                            <span className="font-serif italic">
                                process.
                            </span>
                        </h2>

                        <p className="mt-7 max-w-[440px] text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                            From the first conversation to the finished
                            piece, every restoration is approached with
                            patience, care and respect for its history.
                        </p>
                    </div>

                    {/* Steps */}
                    <div>
                        {howItWorksSteps.map((step, index) => (
                            <div
                                key={step.number}
                                className={`group relative py-8 sm:py-10 ${
                                    index === 0
                                        ? "border-t border-neutral-300"
                                        : "border-t border-neutral-300"
                                }`}
                            >
                                <div className="grid gap-6 sm:grid-cols-[56px_1fr] sm:gap-8">
                                    <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-400 transition-colors duration-300 group-hover:text-neutral-700">
                                        {step.number}
                                    </span>

                                    <div>
                                        <div className="flex items-start justify-between gap-6">
                                            <h3 className="max-w-[560px] text-2xl font-medium leading-[1.05] tracking-[-0.03em] text-neutral-950 transition-transform duration-300 group-hover:translate-x-1 sm:text-3xl lg:text-4xl">
                                                {step.title}
                                            </h3>

                                            <span className="hidden shrink-0 text-xl text-neutral-300 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-neutral-950 sm:block">
                                                ↗
                                            </span>
                                        </div>

                                        <p className="mt-4 max-w-[500px] text-sm leading-6 text-neutral-500 transition-colors duration-300 group-hover:text-neutral-700 sm:text-base sm:leading-7">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}