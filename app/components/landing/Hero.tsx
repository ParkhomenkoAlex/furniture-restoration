import Image from "next/image";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative overflow-hidden">
            {/* Content */}
            <div className="mx-auto grid max-w-[1600px] items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-20">
                <div>
                    <div className="mb-6 flex items-center gap-3">
                        <span className="h-px w-8 bg-neutral-950" />

                        <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-neutral-600">
                            Furniture Restoration
                        </span>
                    </div>

                    <h1 className="max-w-[680px] text-[clamp(3.5rem,7vw,7.5rem)] font-medium leading-[0.88] tracking-[-0.055em] text-neutral-950">
                        Give old
                        <br />
                        furniture
                        <br />
                        <span className="font-serif italic">a second life.</span>
                    </h1>

                    <p className="mt-8 max-w-[480px] text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                        Thoughtful restoration of furniture with respect for its
                        original materials, character, and history.
                    </p>

                    <div className="mt-10 flex flex-wrap items-center gap-4">
                        <Link
                            href="/request"
                            className="group inline-flex items-center gap-5 bg-neutral-950 px-6 py-4 text-[12px] font-medium uppercase tracking-[0.12em] text-white transition-all duration-300 hover:bg-neutral-800"
                        >
                            <span>Start a restoration</span>

                            <span className="transition-transform duration-300 group-hover:translate-x-1">
                                ↗
                            </span>
                        </Link>

                        <Link
                            href="/portfolio"
                            className="group inline-flex items-center gap-3 px-4 py-4 text-[12px] font-medium uppercase tracking-[0.12em] text-neutral-950"
                        >
                            <span>View our work</span>

                            <span className="h-px w-8 bg-neutral-950 transition-all duration-300 group-hover:w-12" />
                        </Link>
                    </div>
                </div>

                {/* Image */}
                <div className="hero-image-in relative ml-auto w-full max-w-[760px]">
                    <div className="relative aspect-[4/5] overflow-hidden bg-neutral-200 sm:aspect-[5/6] lg:aspect-[4/5]">
                        <Image
                            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1600&q=85"
                            alt="Beautifully restored vintage furniture"
                            fill
                            priority
                            className="object-cover transition-transform duration-[1200ms] hover:scale-[1.025]"
                            sizes="(max-width: 1024px) 100vw, 55vw"
                        />

                        <div className="absolute inset-0 bg-black/[0.03]" />
                    </div>

                    <div className="absolute -bottom-5 left-5 bg-[#f4f2ed] px-5 py-4 sm:left-8">
                        <p className="text-[10px] uppercase tracking-[0.22em] text-neutral-500">
                            Crafted with care
                        </p>

                        <p className="mt-1 text-sm font-medium text-neutral-950">
                            Every piece has a story.
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom information */}
            <div className="mx-auto hidden max-w-[1440px] px-5 pb-8 sm:px-8 lg:block lg:px-12">
                <div className="flex items-center justify-between border-t border-neutral-200 pt-5">
                    <span className="text-[10px] uppercase tracking-[0.22em] text-neutral-400">
                        Est. 2012
                    </span>

                    <span className="text-[10px] uppercase tracking-[0.22em] text-neutral-400">
                        Hand restoration · Furniture conservation
                    </span>

                    <span className="text-[10px] uppercase tracking-[0.22em] text-neutral-400">
                        Scroll to explore
                    </span>
                </div>
            </div>
        </section>
    );
}