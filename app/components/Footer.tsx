import Link from "next/link";

import { Logo } from "./Logo";

export function Footer() {
    return (
        <footer className="border-t border-border bg-background">
            <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
                <div className="grid gap-12 py-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-16 lg:py-14">
                    <div>
                        <Logo />

                        <p className="mt-6 max-w-[220px] text-sm leading-6 text-muted">
                            Restoration with care.
                        </p>

                        <div className="mt-7 flex items-center gap-4">
                            <a
                                href="#"
                                aria-label="Instagram"
                                className="text-xs text-muted transition-colors hover:text-foreground"
                            >
                                Instagram
                            </a>

                            <a
                                href="#"
                                aria-label="Facebook"
                                className="text-xs text-muted transition-colors hover:text-foreground"
                            >
                                Facebook
                            </a>

                            <a
                                href="mailto:hello@furniture.studio"
                                aria-label="Email"
                                className="text-xs text-muted transition-colors hover:text-foreground"
                            >
                                Email
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-[11px] font-medium uppercase tracking-[0.16em] text-foreground">
                            Services
                        </h3>

                        <ul className="mt-5 space-y-2">
                            <li>
                                <Link
                                    href="/#services"
                                    className="text-sm text-muted transition-colors hover:text-foreground"
                                >
                                    Upholstery
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/#services"
                                    className="text-sm text-muted transition-colors hover:text-foreground"
                                >
                                    Wood restoration
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/#services"
                                    className="text-sm text-muted transition-colors hover:text-foreground"
                                >
                                    Refinishing
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/#services"
                                    className="text-sm text-muted transition-colors hover:text-foreground"
                                >
                                    Repair
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/#services"
                                    className="text-sm text-muted transition-colors hover:text-foreground"
                                >
                                    Custom restoration
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-[11px] font-medium uppercase tracking-[0.16em] text-foreground">
                            Portfolio
                        </h3>

                        <ul className="mt-5 space-y-2">
                            <li>
                                <Link
                                    href="/portfolio"
                                    className="text-sm text-muted transition-colors hover:text-foreground"
                                >
                                    All projects
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/portfolio"
                                    className="text-sm text-muted transition-colors hover:text-foreground"
                                >
                                    Before / After
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/portfolio"
                                    className="text-sm text-muted transition-colors hover:text-foreground"
                                >
                                    Categories
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-[11px] font-medium uppercase tracking-[0.16em] text-foreground">
                            About
                        </h3>

                        <ul className="mt-5 space-y-2">
                            <li>
                                <Link
                                    href="/about"
                                    className="text-sm text-muted transition-colors hover:text-foreground"
                                >
                                    Our story
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/#how-it-works"
                                    className="text-sm text-muted transition-colors hover:text-foreground"
                                >
                                    How it works
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/about"
                                    className="text-sm text-muted transition-colors hover:text-foreground"
                                >
                                    Materials & care
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-[11px] font-medium uppercase tracking-[0.16em] text-foreground">
                            Contact
                        </h3>

                        <ul className="mt-5 space-y-2">
                            <li>
                                <a
                                    href="mailto:hello@furniture.studio"
                                    className="text-sm text-muted transition-colors hover:text-foreground"
                                >
                                    hello@furniture.studio
                                </a>
                            </li>

                            <li>
                                <a
                                    href="tel:+15551234667"
                                    className="text-sm text-muted transition-colors hover:text-foreground"
                                >
                                    +1 (555) 123-4567
                                </a>
                            </li>

                            <li className="text-sm text-muted">
                                City, Country
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border py-5">
                    <p className="text-center text-[11px] text-muted">
                        © 2026 Furniture Studio. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
