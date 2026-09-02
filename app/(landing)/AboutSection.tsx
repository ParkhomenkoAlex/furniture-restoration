import Image from "next/image";
import Link from "next/link";

export function AboutSection() {
    return (
        <section
            id="about"
            className="border-t border-neutral-200 bg-[#f4f2ed]"
        >
            <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
                <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
                    <div>
                        <div className="flex items-center gap-4">
                            <span className="h-px w-8 bg-neutral-400" />

                            <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-neutral-500">
                                About
                            </span>
                        </div>

                        <h2 className="mt-6 max-w-[560px] text-5xl font-medium leading-[0.92] tracking-[-0.045em] text-neutral-950 sm:text-6xl lg:text-7xl">
                            Furniture has a
                            <br />
                            <span className="font-serif italic">history.</span>
                        </h2>

                        <p className="mt-7 max-w-[520px] text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                            We believe good furniture deserves more than a quick
                            replacement. Our work is about preserving the
                            materials, details, and character that make each
                            piece worth keeping.
                        </p>

                        <p className="mt-5 max-w-[520px] text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                            Every restoration is approached individually,
                            combining traditional craftsmanship with a careful
                            understanding of the piece's history.
                        </p>

                        <Link
                            href="/about"
                            className="group mt-9 inline-flex items-center gap-5 bg-neutral-950 px-6 py-4 text-[12px] font-medium uppercase tracking-[0.12em] text-white transition-all duration-300 hover:bg-neutral-800"
                        >
                            <span>About the workshop</span>

                            <span className="transition-transform duration-300 group-hover:translate-x-1">
                                ↗
                            </span>
                        </Link>
                    </div>

                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-200">
                        <Image
                            src="https://images.unsplash.com/photo-1634141737337-50b2d803d6e5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1hfHx8fA%3D%3D"
                            alt="Beautifully restored vintage furniture"
                            fill
                            sizes="(max-width: 1024px) 100vw, 55vw"
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
