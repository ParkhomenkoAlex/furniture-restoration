import Image from "next/image";
import { AboutItem } from "@/app/types/AboutItem";

interface AboutItemSectionProps {
    eyebrow: string;
    titleLines: string[];
    italicTitle: string;
    items: AboutItem[];
    bordered?: boolean;
}

export default function AboutItemSection({
    eyebrow,
    titleLines,
    italicTitle,
    items,
    bordered = false,
}: AboutItemSectionProps) {
    return (
        <section
            className={bordered ? "border-y border-neutral-200 bg-white" : ""}
        >
            <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
                <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
                    <div>
                        <div className="flex items-center gap-4">
                            <span className="h-px w-8 bg-neutral-400" />

                            <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-neutral-500">
                                {eyebrow}
                            </span>
                        </div>

                        <h2 className="mt-6 text-5xl font-medium leading-[0.92] tracking-[-0.045em] sm:text-6xl">
                            {titleLines.map((line) => (
                                <span key={line} className="block">
                                    {line}
                                </span>
                            ))}

                            <span className="block font-serif italic">
                                {italicTitle}
                            </span>
                        </h2>
                    </div>

                    <div className="border-t border-neutral-300">
                        {items.map((item) => (
                            <article
                                key={item.id}
                                className="grid gap-6 border-b border-neutral-300 py-8 last:border-b-0 sm:grid-cols-[180px_1fr] sm:gap-10"
                            >
                                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                                    <Image
                                        src={item.image}
                                        alt={item.imageAlt}
                                        fill
                                        sizes="180px"
                                        className="object-cover"
                                    />
                                </div>

                                <div>
                                    <div className="flex items-start justify-between gap-6">
                                        <h3 className="text-xl font-medium">
                                            {item.title}
                                        </h3>

                                        <span className="text-[11px] tracking-[0.18em] text-neutral-400">
                                            {item.number}
                                        </span>
                                    </div>

                                    {Array.isArray(item.description) ? (
                                        item.description.map(
                                            (paragraph, index) => (
                                                <p
                                                    key={index}
                                                    className="mt-4 max-w-[620px] text-sm leading-7 text-neutral-600 sm:text-base"
                                                >
                                                    {paragraph}
                                                </p>
                                            ),
                                        )
                                    ) : (
                                        <p className="mt-4 max-w-[650px] text-sm leading-7 text-neutral-600 sm:text-base">
                                            {item.description}
                                        </p>
                                    )}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
