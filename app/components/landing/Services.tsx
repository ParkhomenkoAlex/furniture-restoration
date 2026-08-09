const services = [
    {
        number: "01",
        title: "Furniture Restoration",
        description:
            "Careful restoration that brings worn furniture back to life while preserving its original character.",
    },
    {
        number: "02",
        title: "Wood Repair",
        description:
            "Structural repairs, refinishing, and detailed woodwork carried out with respect for the original piece.",
    },
    {
        number: "03",
        title: "Upholstery",
        description:
            "Thoughtful upholstery work using carefully selected fabrics, materials, and traditional techniques.",
    },
    {
        number: "04",
        title: "Furniture Conservation",
        description:
            "Sensitive conservation for valuable and historic pieces where preserving authenticity matters most.",
    },
    {
        number: "03",
        title: "Upholstery",
        description:
            "Thoughtful upholstery work using carefully selected fabrics, materials, and traditional techniques.",
    },
    {
        number: "04",
        title: "Furniture Conservation",
        description:
            "Sensitive conservation for valuable and historic pieces where preserving authenticity matters most.",
    },
];

export function Services() {
    return (
        <section
            id="services"
            className="scroll-mt-20 border-t border-neutral-200 bg-[#f4f2ed]"
        >
            <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
                {/* Header */}
                <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
                    <div className="flex items-start gap-3">
                        <span className="mt-2 h-px w-8 bg-neutral-950" />

                        <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-neutral-600">
                            Services
                        </span>
                    </div>

                    <div>
                        <h2 className="max-w-[850px] text-[clamp(3rem,6vw,6.5rem)] font-medium leading-[0.9] tracking-[-0.05em] text-neutral-950">
                            Restoration with{" "}
                            <span className="font-serif italic">
                                intention.
                            </span>
                        </h2>

                        <p className="mt-8 max-w-[560px] text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                            From careful repairs to complete restoration, we
                            bring character and beauty back to furniture worth
                            preserving.
                        </p>
                    </div>
                </div>

                {/* Services */}
                <div className="mt-20 border-t border-neutral-300 lg:mt-28">
                    <div className="grid lg:grid-cols-2">
                        {services.map((service) => (
                            <article
                                key={service.number}
                                className="group relative border-b border-neutral-300 py-8 transition-colors duration-500 lg:min-h-[300px] lg:px-8 lg:py-10 lg:odd:border-r"
                            >
                                <div className="flex h-full flex-col justify-between">
                                    <div className="flex items-start justify-between">
                                        <span className="text-[11px] font-medium tracking-[0.18em] text-neutral-400">
                                            {service.number}
                                        </span>

                                        <span className="text-xl text-neutral-400 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-neutral-950">
                                            ↗
                                        </span>
                                    </div>

                                    <div className="mt-16 max-w-[460px]">
                                        <h3 className="text-2xl font-medium tracking-[-0.025em] text-neutral-950 transition-transform duration-500 group-hover:translate-x-2 sm:text-3xl">
                                            {service.title}
                                        </h3>

                                        <p className="mt-4 max-w-[420px] text-sm leading-6 text-neutral-500 transition-colors duration-500 group-hover:text-neutral-700 sm:text-base sm:leading-7">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>

                                <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-neutral-950 transition-transform duration-700 group-hover:scale-x-100" />
                            </article>
                        ))}
                    </div>
                </div>

                {/* Bottom information */}
                <div className="mt-8 flex flex-col gap-3 text-[10px] uppercase tracking-[0.22em] text-neutral-400 sm:flex-row sm:items-center sm:justify-between">
                    <span>Crafted by hand</span>

                    <span>Every piece is different</span>

                    <span>Made to last</span>
                </div>
            </div>
        </section>
    );
}