import Image from "next/image";
import Link from "next/link";

export function CallToActionSection() {
    return (
        <section className="relative overflow-hidden border-t border-border">
            <div className="relative mx-auto flex min-h-[420px] max-w-[1600px] items-center justify-center px-5 py-24 sm:px-8 lg:min-h-[520px] lg:px-12">
                <Image
                    src="https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1800&q=80"
                    alt=""
                    fill
                    sizes="100vw"
                    className="object-cover"
                />

                <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-black/45"
                />

                <div className="relative z-10 max-w-[700px] text-center text-white">
                    <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-white/70">
                        Start a restoration
                    </span>

                    <h2 className="mt-6 text-4xl font-medium leading-[0.95] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                        Have a piece that deserves
                        <br />
                        <span className="font-serif italic">
                            a second life?
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-[480px] text-sm leading-6 text-white/80 sm:text-base">
                        Send us a few photos. We'll take a look.
                    </p>

                    <Link
                        href="/request"
                        className="mt-8 inline-flex bg-white px-7 py-4 text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-950 transition-colors duration-300 hover:bg-neutral-200"
                    >
                        Start a restoration
                    </Link>
                </div>
            </div>
        </section>
    );
}
