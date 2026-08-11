import Image from "next/image";

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
                                About the workshop
                            </span>
                        </div>

                        <h1 className="mt-6 max-w-[650px] text-6xl font-medium leading-[0.88] tracking-[-0.055em] sm:text-7xl lg:text-[6.5rem]">
                            Furniture
                            <br />
                            with a
                            <br />
                            <span className="font-serif italic">
                                memory.
                            </span>
                        </h1>

                        <p className="mt-8 max-w-[500px] text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                            We believe furniture can carry something that
                            cannot be replaced — the marks of time, the work
                            of the hands that made it, and the memories of the
                            people who lived with it.
                        </p>
                    </div>

                    <div className="relative ml-auto w-full max-w-[620px]">
                        <div className="relative aspect-[4/5] overflow-hidden bg-neutral-200">
                            <Image
                                src="https://images.unsplash.com/photo-1613270481280-3413ff307a94?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                                traditional craft, thoughtful decisions, and
                                a genuine respect for old furniture.
                            </p>
                        </div>

                        <div>
                            <h2 className="max-w-[850px] text-4xl font-medium leading-[0.95] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                                It started with a simple question:
                                <br />
                                <span className="font-serif italic">
                                    why replace something worth saving?
                                </span>
                            </h2>

                            <div className="mt-10 grid gap-8 sm:grid-cols-2">
                                <div>
                                    <p className="text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                                        Our workshop grew from a fascination
                                        with furniture that had already lived
                                        a life. We found ourselves drawn to
                                        old chairs, tables, cabinets, and
                                        objects whose imperfections made them
                                        more interesting, not less.
                                    </p>

                                    <p className="mt-5 text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                                        What began with individual pieces
                                        gradually became a practice: studying
                                        how furniture was made, learning the
                                        techniques used to repair it, and
                                        understanding when the best thing to
                                        do is simply preserve what is already
                                        there.
                                    </p>
                                </div>

                                <div>
                                    <p className="text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                                        Today, every piece that enters the
                                        workshop is treated as its own
                                        project. There is no universal
                                        formula. The age, construction,
                                        materials, condition, and history all
                                        influence the decisions we make.
                                    </p>

                                    <p className="mt-5 text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                                        The result should not feel like a
                                        different piece of furniture. It
                                        should feel like the same piece,
                                        understood, repaired, and given the
                                        opportunity to continue.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 03. What we believe */}
            <section className="border-y border-neutral-200 bg-white">
                <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
                    <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
                        <div>
                            <div className="flex items-center gap-4">
                                <span className="h-px w-8 bg-neutral-400" />

                                <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-neutral-500">
                                    03 — What we believe
                                </span>
                            </div>

                            <h2 className="mt-6 text-5xl font-medium leading-[0.92] tracking-[-0.045em] sm:text-6xl">
                                A few things
                                <br />
                                we won't
                                <br />
                                <span className="font-serif italic">
                                    compromise.
                                </span>
                            </h2>
                        </div>

                        <div className="border-t border-neutral-300">
                            {/* Preservation */}
                            <article className="grid gap-6 border-b border-neutral-300 py-8 sm:grid-cols-[160px_1fr] sm:gap-8">
                                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                                    <Image
                                        src="https://images.unsplash.com/photo-1566097127420-26750d93591e?q=80&w=1534&auto=format&fit=crop"
                                        alt="Furniture being carefully preserved"
                                        fill
                                        sizes="160px"
                                        className="object-cover"
                                    />
                                </div>

                                <div>
                                    <div className="flex items-start justify-between gap-6">
                                        <h3 className="text-xl font-medium">
                                            Preservation over replacement
                                        </h3>

                                        <span className="text-[11px] tracking-[0.18em] text-neutral-400">
                                            01
                                        </span>
                                    </div>

                                    <p className="mt-4 max-w-[650px] text-sm leading-7 text-neutral-600 sm:text-base">
                                        If an original component can be
                                        repaired, we prefer repairing it.
                                        Replacing something simply because it
                                        is easier rarely respects the history
                                        of a well-made piece.
                                    </p>
                                </div>
                            </article>

                            {/* Original materials */}
                            <article className="grid gap-6 border-b border-neutral-300 py-8 sm:grid-cols-[160px_1fr] sm:gap-8">
                                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                                    <Image
                                        src="https://images.unsplash.com/photo-1697507695420-04623ccff2af?q=80&w=1740&auto=format&fit=crop"
                                        alt="Natural wood material"
                                        fill
                                        sizes="160px"
                                        className="object-cover"
                                    />
                                </div>

                                <div>
                                    <div className="flex items-start justify-between gap-6">
                                        <h3 className="text-xl font-medium">
                                            Original materials
                                        </h3>

                                        <span className="text-[11px] tracking-[0.18em] text-neutral-400">
                                            02
                                        </span>
                                    </div>

                                    <p className="mt-4 max-w-[650px] text-sm leading-7 text-neutral-600 sm:text-base">
                                        Original wood, hardware, finishes, and
                                        fabrics can tell an important part of
                                        a piece's story. We preserve them
                                        whenever their condition allows.
                                    </p>
                                </div>
                            </article>

                            {/* Visible craftsmanship */}
                            <article className="grid gap-6 border-b border-neutral-300 py-8 sm:grid-cols-[160px_1fr] sm:gap-8">
                                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                                    <Image
                                        src="https://images.unsplash.com/photo-1626081063434-79a2169791b1?q=80&w=1752&auto=format&fit=crop"
                                        alt="Craftsman working by hand"
                                        fill
                                        sizes="160px"
                                        className="object-cover"
                                    />
                                </div>

                                <div>
                                    <div className="flex items-start justify-between gap-6">
                                        <h3 className="text-xl font-medium">
                                            Visible craftsmanship
                                        </h3>

                                        <span className="text-[11px] tracking-[0.18em] text-neutral-400">
                                            03
                                        </span>
                                    </div>

                                    <p className="mt-4 max-w-[650px] text-sm leading-7 text-neutral-600 sm:text-base">
                                        We believe good restoration should
                                        show care without showing off. The
                                        quality should be felt in the way a
                                        joint fits, a surface feels, or a
                                        drawer moves.
                                    </p>
                                </div>
                            </article>

                            {/* Patience */}
                            <article className="grid gap-6 py-8 sm:grid-cols-[160px_1fr] sm:gap-8">
                                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                                    <Image
                                        src="https://images.unsplash.com/photo-1497218770144-3fea6dbc33fe?q=80&w=2232&auto=format&fit=crop"
                                        alt="Hand tools used in furniture restoration"
                                        fill
                                        sizes="160px"
                                        className="object-cover"
                                    />
                                </div>

                                <div>
                                    <div className="flex items-start justify-between gap-6">
                                        <h3 className="text-xl font-medium">
                                            Patience over speed
                                        </h3>

                                        <span className="text-[11px] tracking-[0.18em] text-neutral-400">
                                            04
                                        </span>
                                    </div>

                                    <p className="mt-4 max-w-[650px] text-sm leading-7 text-neutral-600 sm:text-base">
                                        Some materials need time. Some
                                        decisions need thought. We would
                                        rather spend another hour understanding
                                        a piece than rush a decision that
                                        cannot be undone.
                                    </p>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

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
                                One piece.
                                <br />
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
                                    src="https://images.unsplash.com/photo-1685612213152-b995e1641013?q=80&w=918&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                                    src="https://images.unsplash.com/photo-1763279934323-edb3735f6a6e?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                                interventions, materials, wear, and the
                                details that make the piece distinctive.
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
            <section className="border-y border-neutral-200 bg-white">
                <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
                    <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
                        <div>
                            <div className="flex items-center gap-4">
                                <span className="h-px w-8 bg-neutral-400" />

                                <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-neutral-500">
                                    05 — Materials & details
                                </span>
                            </div>

                            <h2 className="mt-6 text-5xl font-medium leading-[0.92] tracking-[-0.045em] sm:text-6xl">
                                The material
                                <br />
                                tells part of
                                <br />
                                <span className="font-serif italic">
                                    the story.
                                </span>
                            </h2>
                        </div>

                        <div className="border-t border-neutral-300">
                            {/* Wood */}
                            <article className="grid gap-6 border-b border-neutral-300 py-8 sm:grid-cols-[180px_1fr] sm:gap-10">
                                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                                    <Image
                                        src="https://images.unsplash.com/photo-1515446134809-993c501ca304?q=80&w=1740&auto=format&fit=crop"
                                        alt="Natural wood grain"
                                        fill
                                        sizes="180px"
                                        className="object-cover"
                                    />
                                </div>

                                <div>
                                    <h3 className="text-xl font-medium">
                                        Wood
                                    </h3>

                                    <p className="mt-4 max-w-[620px] text-sm leading-7 text-neutral-600 sm:text-base">
                                        Walnut, oak, ash, mahogany, beech, and
                                        other timbers all age differently.
                                        Their grain, colour, movement, and
                                        previous finishes help determine how
                                        they should be treated.
                                    </p>

                                    <p className="mt-4 max-w-[620px] text-sm leading-7 text-neutral-600 sm:text-base">
                                        We aim to preserve the character of
                                        the timber rather than flattening it
                                        into a uniform new surface.
                                    </p>
                                </div>
                            </article>

                            {/* Finishes */}
                            <article className="grid gap-6 border-b border-neutral-300 py-8 sm:grid-cols-[180px_1fr] sm:gap-10">
                                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                                    <Image
                                        src="https://images.unsplash.com/photo-1629976828074-c248d94c82ea?w=900&auto=format&fit=crop&q=60"
                                        alt="Furniture finishing process"
                                        fill
                                        sizes="180px"
                                        className="object-cover"
                                    />
                                </div>

                                <div>
                                    <h3 className="text-xl font-medium">
                                        Finishes
                                    </h3>

                                    <p className="mt-4 max-w-[620px] text-sm leading-7 text-neutral-600 sm:text-base">
                                        Oil, wax, shellac, lacquer, and other
                                        finishes create very different
                                        relationships with wood. The right
                                        choice depends on the furniture, its
                                        age, and the result we are trying to
                                        preserve.
                                    </p>
                                </div>
                            </article>

                            {/* Fabrics */}
                            <article className="grid gap-6 border-b border-neutral-300 py-8 sm:grid-cols-[180px_1fr] sm:gap-10">
                                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                                    <Image
                                        src="https://images.unsplash.com/photo-1781495140807-a033e49840e4?q=80&w=1740&auto=format&fit=crop"
                                        alt="Furniture upholstery fabric"
                                        fill
                                        sizes="180px"
                                        className="object-cover"
                                    />
                                </div>

                                <div>
                                    <h3 className="text-xl font-medium">
                                        Fabrics
                                    </h3>

                                    <p className="mt-4 max-w-[620px] text-sm leading-7 text-neutral-600 sm:text-base">
                                        Upholstery is more than a colour
                                        choice. Texture, weight, pattern, and
                                        construction all influence how a
                                        finished piece feels and how closely
                                        it relates to its original character.
                                    </p>
                                </div>
                            </article>

                            {/* Hardware */}
                            <article className="grid gap-6 py-8 sm:grid-cols-[180px_1fr] sm:gap-10">
                                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                                    <Image
                                        src="https://images.unsplash.com/photo-1783701074987-c8f4aa07c48b?q=80&w=1740&auto=format&fit=crop"
                                        alt="Furniture hardware and fittings"
                                        fill
                                        sizes="180px"
                                        className="object-cover"
                                    />
                                </div>

                                <div>
                                    <h3 className="text-xl font-medium">
                                        Hardware
                                    </h3>

                                    <p className="mt-4 max-w-[620px] text-sm leading-7 text-neutral-600 sm:text-base">
                                        Handles, hinges, locks, screws, and
                                        other small components are easy to
                                        overlook. They are often some of the
                                        strongest clues to how a piece was
                                        originally made.
                                    </p>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            {/* 06. How we work */}
            <section>
                <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
                    <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
                        <div>
                            <div className="flex items-center gap-4">
                                <span className="h-px w-8 bg-neutral-400" />

                                <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-neutral-500">
                                    06 — How we work
                                </span>
                            </div>

                            <h2 className="mt-6 text-5xl font-medium leading-[0.92] tracking-[-0.045em] sm:text-6xl">
                                Five stages.
                                <br />
                                <span className="font-serif italic">
                                    One careful process.
                                </span>
                            </h2>
                        </div>

                        <div className="border-t border-neutral-300">
                            {/* Inspection */}
                            <article className="grid gap-6 border-b border-neutral-300 py-8 sm:grid-cols-[180px_1fr] sm:gap-10">
                                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                                    <Image
                                        src="https://images.unsplash.com/photo-1647426994723-ab685e4b8c77?q=80&w=1823&auto=format&fit=crop"
                                        alt="Furniture inspection"
                                        fill
                                        sizes="180px"
                                        className="object-cover"
                                    />
                                </div>

                                <div>
                                    <div className="flex items-start justify-between gap-6">
                                        <h3 className="text-xl font-medium">
                                            Inspection
                                        </h3>

                                        <span className="text-[11px] tracking-[0.18em] text-neutral-400">
                                            01
                                        </span>
                                    </div>

                                    <p className="mt-3 max-w-[650px] text-sm leading-7 text-neutral-600 sm:text-base">
                                        We begin with a close examination of
                                        the piece. We look at its construction,
                                        condition, materials, previous repairs,
                                        and the problems that need attention.
                                    </p>
                                </div>
                            </article>

                            {/* Research */}
                            <article className="grid gap-6 border-b border-neutral-300 py-8 sm:grid-cols-[180px_1fr] sm:gap-10">
                                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                                    <Image
                                        src="https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?q=80&w=1806&auto=format&fit=crop"
                                        alt="Furniture details being studied"
                                        fill
                                        sizes="180px"
                                        className="object-cover"
                                    />
                                </div>

                                <div>
                                    <div className="flex items-start justify-between gap-6">
                                        <h3 className="text-xl font-medium">
                                            Research
                                        </h3>

                                        <span className="text-[11px] tracking-[0.18em] text-neutral-400">
                                            02
                                        </span>
                                    </div>

                                    <p className="mt-3 max-w-[650px] text-sm leading-7 text-neutral-600 sm:text-base">
                                        When a piece calls for it, we research
                                        its period, construction, materials,
                                        and previous treatment. Understanding
                                        where something came from helps us
                                        decide where it should go next.
                                    </p>
                                </div>
                            </article>

                            {/* Conservation */}
                            <article className="grid gap-6 border-b border-neutral-300 py-8 sm:grid-cols-[180px_1fr] sm:gap-10">
                                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                                    <Image
                                        src="https://images.unsplash.com/photo-1501087063833-3773ee886f20?q=80&w=1740&auto=format&fit=crop"
                                        alt="Careful furniture conservation"
                                        fill
                                        sizes="180px"
                                        className="object-cover"
                                    />
                                </div>

                                <div>
                                    <div className="flex items-start justify-between gap-6">
                                        <h3 className="text-xl font-medium">
                                            Conservation
                                        </h3>

                                        <span className="text-[11px] tracking-[0.18em] text-neutral-400">
                                            03
                                        </span>
                                    </div>

                                    <p className="mt-3 max-w-[650px] text-sm leading-7 text-neutral-600 sm:text-base">
                                        We stabilise what can be preserved,
                                        retain original materials where
                                        possible, and avoid unnecessary
                                        intervention.
                                    </p>
                                </div>
                            </article>

                            {/* Reconstruction */}
                            <article className="grid gap-6 border-b border-neutral-300 py-8 sm:grid-cols-[180px_1fr] sm:gap-10">
                                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                                    <Image
                                        src="https://images.unsplash.com/photo-1497219055242-93359eeed651?q=80&w=2298&auto=format&fit=crop"
                                        alt="Furniture reconstruction and joinery"
                                        fill
                                        sizes="180px"
                                        className="object-cover"
                                    />
                                </div>

                                <div>
                                    <div className="flex items-start justify-between gap-6">
                                        <h3 className="text-xl font-medium">
                                            Reconstruction
                                        </h3>

                                        <span className="text-[11px] tracking-[0.18em] text-neutral-400">
                                            04
                                        </span>
                                    </div>

                                    <p className="mt-3 max-w-[650px] text-sm leading-7 text-neutral-600 sm:text-base">
                                        When something is missing or beyond
                                        repair, we recreate it carefully,
                                        matching the original construction,
                                        proportions, and materials as closely
                                        as practical.
                                    </p>
                                </div>
                            </article>

                            {/* Finishing */}
                            <article className="grid gap-6 py-8 sm:grid-cols-[180px_1fr] sm:gap-10">
                                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                                    <Image
                                        src="https://images.unsplash.com/photo-1463082459669-fd1ca1692fea?q=80&w=1738&auto=format&fit=crop"
                                        alt="Furniture finishing by hand"
                                        fill
                                        sizes="180px"
                                        className="object-cover"
                                    />
                                </div>

                                <div>
                                    <div className="flex items-start justify-between gap-6">
                                        <h3 className="text-xl font-medium">
                                            Finishing
                                        </h3>

                                        <span className="text-[11px] tracking-[0.18em] text-neutral-400">
                                            05
                                        </span>
                                    </div>

                                    <p className="mt-3 max-w-[650px] text-sm leading-7 text-neutral-600 sm:text-base">
                                        The final stage brings everything
                                        together — surfaces, colour, finish,
                                        upholstery, and hardware — so the
                                        restored piece feels coherent and
                                        ready for another chapter.
                                    </p>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            {/* 07. The pieces we work with */}
            <section className="border-y border-neutral-200 bg-white">
                <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
                    <div className="mb-14 max-w-[800px]">
                        <div className="flex items-center gap-4">
                            <span className="h-px w-8 bg-neutral-400" />

                            <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-neutral-500">
                                07 — The pieces we work with
                            </span>
                        </div>

                        <h2 className="mt-6 text-5xl font-medium leading-[0.92] tracking-[-0.045em] sm:text-6xl">
                            Different forms.
                            <br />
                            <span className="font-serif italic">
                                Different histories.
                            </span>
                        </h2>

                        <p className="mt-7 max-w-[650px] text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                            From a single well-loved chair to a complete set
                            of period furniture, we work with pieces that
                            benefit from thoughtful restoration and careful
                            attention.
                        </p>
                    </div>

                    <div className="grid gap-px bg-neutral-200 sm:grid-cols-2 lg:grid-cols-3">
                        {/* Chairs */}
                        <article className="bg-white">
                            <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                                <Image
                                    src="https://images.unsplash.com/photo-1510568192-5cd6e7a47edd?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Restored wooden chair"
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover"
                                />
                            </div>

                            <div className="p-8 sm:p-10">
                                <span className="text-[11px] tracking-[0.18em] text-neutral-400">
                                    01
                                </span>

                                <h3 className="mt-16 text-2xl font-medium tracking-[-0.03em]">
                                    Chairs
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-neutral-600">
                                    Dining chairs, lounge chairs, armchairs, and
                                    traditional seating with structural or
                                    upholstery needs.
                                </p>
                            </div>
                        </article>

                        {/* Tables */}
                        <article className="bg-white">
                            <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                                <Image
                                    src="https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=1200&q=85"
                                    alt="Vintage wooden table"
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover"
                                />
                            </div>

                            <div className="p-8 sm:p-10">
                                <span className="text-[11px] tracking-[0.18em] text-neutral-400">
                                    02
                                </span>

                                <h3 className="mt-16 text-2xl font-medium tracking-[-0.03em]">
                                    Tables
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-neutral-600">
                                    Dining tables, occasional tables, desks, and
                                    other wooden surfaces affected by wear,
                                    damage, or age.
                                </p>
                            </div>
                        </article>

                        {/* Cabinets */}
                        <article className="bg-white">
                            <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                                <Image
                                    src="https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=1200&q=85"
                                    alt="Vintage wooden cabinet"
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover"
                                />
                            </div>

                            <div className="p-8 sm:p-10">
                                <span className="text-[11px] tracking-[0.18em] text-neutral-400">
                                    03
                                </span>

                                <h3 className="mt-16 text-2xl font-medium tracking-[-0.03em]">
                                    Cabinets
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-neutral-600">
                                    Storage pieces, sideboards, cupboards, and
                                    cabinets where structure, hardware, and
                                    finishes all matter.
                                </p>
                            </div>
                        </article>

                        {/* Mid-century furniture */}
                        <article className="bg-white">
                            <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                                <Image
                                    src="https://images.unsplash.com/photo-1631510083755-11ecb5172d81?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Mid-century furniture"
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover"
                                />
                            </div>

                            <div className="p-8 sm:p-10">
                                <span className="text-[11px] tracking-[0.18em] text-neutral-400">
                                    04
                                </span>

                                <h3 className="mt-16 text-2xl font-medium tracking-[-0.03em]">
                                    Mid-century furniture
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-neutral-600">
                                    Pieces from the mid-century period where
                                    original materials, finishes, proportions,
                                    and details deserve particular attention.
                                </p>
                            </div>
                        </article>

                        {/* Antique pieces */}
                        <article className="bg-white">
                            <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                                <Image
                                    src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=85"
                                    alt="Antique furniture"
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover"
                                />
                            </div>

                            <div className="p-8 sm:p-10">
                                <span className="text-[11px] tracking-[0.18em] text-neutral-400">
                                    05
                                </span>

                                <h3 className="mt-16 text-2xl font-medium tracking-[-0.03em]">
                                    Antique pieces
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-neutral-600">
                                    Older furniture requiring a measured approach
                                    to materials, construction, previous repairs,
                                    and preservation.
                                </p>
                            </div>
                        </article>

                        {/* Upholstered furniture */}
                        <article className="bg-white">
                            <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                                <Image
                                    src="https://images.unsplash.com/photo-1550226891-ef816aed4a98?auto=format&fit=crop&w=1200&q=85"
                                    alt="Upholstered furniture"
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover"
                                />
                            </div>

                            <div className="p-8 sm:p-10">
                                <span className="text-[11px] tracking-[0.18em] text-neutral-400">
                                    06
                                </span>

                                <h3 className="mt-16 text-2xl font-medium tracking-[-0.03em]">
                                    Upholstered furniture
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-neutral-600">
                                    Sofas, benches, stools, and upholstered chairs
                                    where comfort, structure, fabric, and original
                                    proportions all need to work together.
                                </p>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

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