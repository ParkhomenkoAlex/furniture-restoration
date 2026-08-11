import Image from "next/image";

import AboutItemSection from "./components/AboutItemSection";
import AboutFurnitureGrid from "./components/AboutFurnitureGrid";
import {aboutBeliefs} from "@/app/about/data/aboutBeliefs";
import {aboutMaterials} from "@/app/about/data/aboutMaterials";
import {aboutProcess} from "@/app/about/data/aboutProcess";
import {aboutFurnitureTypes} from "@/app/about/data/aboutFurnitureTypes";

export default function AboutPage() {
    return (
        <main className="bg-[#f4f2ed] text-neutral-950">
            {/* 01. Hero */}
            <section className="border-b border-neutral-200">
                <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-12 lg:py-28">
                    <div>
                        <div className="flex items-center gap-4">
                            <span className="h-px w-8 bg-neutral-400" />

                            <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-neutral-500">
                                01 — About the workshop
                            </span>
                        </div>

                        <h1 className="mt-6 max-w-[650px] text-6xl font-medium leading-[0.88] tracking-[-0.055em] sm:text-7xl lg:text-[6.5rem]">
                            Furniture <br />
                            with a <br />
                            <span className="font-serif italic">
                                memory.
                            </span>
                        </h1>

                        <p className="mt-8 max-w-[500px] text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                            We believe furniture can carry something that
                            cannot be replaced — the marks of time, the work of
                            the hands that made it, and the memories of the
                            people who lived with it.
                        </p>
                    </div>

                    <div className="relative ml-auto w-full max-w-[620px]">
                        <div className="relative aspect-[4/5] overflow-hidden bg-neutral-200">
                            <Image
                                src="https://images.unsplash.com/photo-1613270481280-3413ff307a94?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1hfHx8fA%3D%3D"
                                alt="Vintage furniture in a warm interior"
                                fill
                                priority
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </div>

                        <div className="absolute -bottom-5 left-5 bg-[#f4f2ed] px-5 py-4 sm:left-8">
                            <p className="text-[10px] uppercase tracking-[0.22em] text-neutral-500">
                                Est. 2012
                            </p>

                            <p className="mt-1 text-sm font-medium text-neutral-950">
                                Made to be remembered.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 02. The workshop */}
            <section>
                <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
                    <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
                        <div>
                            <div className="flex items-center gap-4">
                                <span className="h-px w-8 bg-neutral-400" />

                                <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-neutral-500">
                                    02 — The workshop
                                </span>
                            </div>

                            <p className="mt-8 max-w-[320px] text-sm leading-7 text-neutral-500">
                                A small restoration studio built around
                                traditional craft, thoughtful decisions, and a
                                genuine respect for old furniture.
                            </p>
                        </div>

                        <div>
                            <h2 className="max-w-[850px] text-4xl font-medium leading-[0.95] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                                It started with a simple question: <br />
                                <span className="font-serif italic">
                                    why replace something worth saving?
                                </span>
                            </h2>

                            <div className="mt-10 grid gap-8 sm:grid-cols-2">
                                <div>
                                    <p className="text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                                        Our workshop grew from a fascination
                                        with furniture that had already lived a
                                        life. We found ourselves drawn to old
                                        chairs, tables, cabinets, and objects
                                        whose imperfections made them more
                                        interesting, not less.
                                    </p>

                                    <p className="mt-5 text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                                        What began with individual pieces
                                        gradually became a practice: studying
                                        how furniture was made, learning the
                                        techniques used to repair it, and
                                        understanding when the best thing to do
                                        is simply preserve what is already
                                        there.
                                    </p>
                                </div>

                                <div>
                                    <p className="text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                                        Today, every piece that enters the
                                        workshop is treated as its own project.
                                        There is no universal formula. The age,
                                        construction, materials, condition, and
                                        history all influence the decisions we
                                        make.
                                    </p>

                                    <p className="mt-5 text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                                        The result should not feel like a
                                        different piece of furniture. It should
                                        feel like the same piece, understood,
                                        repaired, and given the opportunity to
                                        continue.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 03. What we believe */}
            <AboutItemSection
                eyebrow="03 — What we believe"
                titleLines={["A few things", "we won't"]}
                italicTitle="compromise."
                items={aboutBeliefs}
                bordered
            />

            {/* 04. Before / After */}
            <section>
                <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
                    <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
                        <div>
                            <div className="flex items-center gap-4">
                                <span className="h-px w-8 bg-neutral-400" />

                                <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-neutral-500">
                                    04 — Before / After
                                </span>
                            </div>

                            <h2 className="mt-6 text-5xl font-medium leading-[0.92] tracking-[-0.045em] sm:text-6xl">
                                One piece. <br />
                                <span className="font-serif italic">
                                    Two chapters.
                                </span>
                            </h2>
                        </div>

                        <p className="max-w-[440px] text-sm leading-7 text-neutral-600 sm:text-base">
                            Restoration is a conversation between what a piece
                            was, what happened to it, and what it can become
                            next.
                        </p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                        <div>
                            <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                                <Image
                                    src="https://images.unsplash.com/photo-1685612213152-b995e1641013?q=80&w=918&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1hfHx8fA%3D%3D"
                                    alt="Furniture before restoration"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover"
                                />

                                <div className="absolute bottom-4 left-4 bg-[#f4f2ed] px-4 py-2">
                                    <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-600">
                                        Before
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                                <Image
                                    src="https://images.unsplash.com/photo-1763279934323-edb3735f6a6e?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1hfHx8fA%3D%3D"
                                    alt="Furniture after restoration"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover"
                                />

                                <div className="absolute bottom-4 left-4 bg-[#f4f2ed] px-4 py-2">
                                    <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-600">
                                        After
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
                        <div>
                            <span className="text-[10px] uppercase tracking-[0.22em] text-neutral-400">
                                A closer look
                            </span>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2">
                            <p className="text-sm leading-7 text-neutral-600 sm:text-base">
                                A restoration begins long before the first
                                repair. We look at the construction, previous
                                interventions, materials, wear, and the details
                                that make the piece distinctive.
                            </p>

                            <p className="text-sm leading-7 text-neutral-600 sm:text-base">
                                The finished result should feel natural —
                                stronger and more functional, but still
                                connected to the object that arrived at the
                                workshop.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 05. Materials & details */}
            <AboutItemSection
                eyebrow="05 — Materials & details"
                titleLines={["The material", "tells part of"]}
                italicTitle="the story."
                items={aboutMaterials}
                bordered
            />

            {/* 06. How we work */}
            <AboutItemSection
                eyebrow="06 — How we work"
                titleLines={["Five stages."]}
                italicTitle="One careful process."
                items={aboutProcess}
            />

            {/* 07. The pieces we work with */}
            <AboutFurnitureGrid
                eyebrow="07 — The pieces we work with"
                titleLines={["Different forms."]}
                italicTitle="Different histories."
                description="From a single well-loved chair to a complete set of period furniture, we work with pieces that benefit from thoughtful restoration and careful attention."
                items={aboutFurnitureTypes}
            />

            {/* 08. Closing statement */}
            <section>
                <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
                    <div className="mx-auto max-w-[1000px] text-center">
                        <div className="flex items-center justify-center gap-4">
                            <span className="h-px w-8 bg-neutral-400" />

                            <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-neutral-500">
                                08 — Our philosophy
                            </span>

                            <span className="h-px w-8 bg-neutral-400" />
                        </div>

                        <p className="mt-8 text-4xl font-medium leading-[0.95] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                            Good furniture doesn't need a new identity.
                        </p>

                        <p className="mx-auto mt-8 max-w-[680px] text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                            Sometimes it simply needs someone willing to look
                            closely, work carefully, and understand what is
                            already there.
                        </p>

                        <p className="mt-8 font-serif text-2xl italic text-neutral-700">
                            That is what we do.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}