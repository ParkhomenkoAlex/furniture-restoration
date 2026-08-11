import Image from "next/image";

import type { AboutItem } from "@/app/types/AboutItem";

type AboutFurnitureGridProps = {
    eyebrow: string;
    titleLines: string[];
    italicTitle: string;
    description: string;
    items: AboutItem[];
};

export default function AboutFurnitureGrid({
                                               eyebrow,
                                               titleLines,
                                               italicTitle,
                                               description,
                                               items,
                                           }: AboutFurnitureGridProps) {
    return (
        <section className="border-y border-neutral-200 bg-white">
            <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
                <div className="mb-14 max-w-[800px]">
                    <div className="flex items-center gap-4">
                        <span className="h-px w-8 bg-neutral-400" />

                        <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-neutral-500">
                            {eyebrow}
                        </span>
                    </div>

                    <h2 className="mt-6 text-5xl font-medium leading-[0.92] tracking-[-0.045em] sm:text-6xl">
                        {titleLines.map((line) => (
                            <span key={line}>
                                {line} <br />
                            </span>
                        ))}

                        <span className="font-serif italic">
                            {italicTitle}
                        </span>
                    </h2>

                    <p className="mt-7 max-w-[650px] text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                        {description}
                    </p>
                </div>

                <div className="grid gap-px bg-neutral-200 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((item) => (
                        <article key={item.id} className="bg-white">
                            <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                                <Image
                                    src={item.image}
                                    alt={item.imageAlt}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover"
                                />
                            </div>

                            <div className="p-8 sm:p-10">
                                <span className="text-[11px] tracking-[0.18em] text-neutral-400">
                                    {item.number}
                                </span>

                                <h3 className="mt-16 text-2xl font-medium tracking-[-0.03em]">
                                    {item.title}
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-neutral-600">
                                    {item.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}