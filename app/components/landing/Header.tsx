"use client";

import Link from "next/link";
import {useState} from "react";

import {useLockBodyScroll} from "@/app/hooks/useLockBodyScroll";
import {Logo} from "./Logo";
import {Navigation} from "./Navigation";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useLockBodyScroll(isMenuOpen);

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="relative z-50 border-b border-border bg-background">
            <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-6 lg:px-10">
                <Logo onClick={closeMenu}/>

                <div className="hidden lg:block">
                    <Navigation/>
                </div>

                <Link
                    href="/request"
                    className="hidden border border-foreground px-5 py-3 text-xs font-medium uppercase tracking-[0.16em] transition-colors duration-300 hover:bg-foreground hover:text-background lg:block"
                >
                    Request restoration
                </Link>

                <button
                    type="button"
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMenuOpen}
                    onClick={() => setIsMenuOpen((value) => !value)}
                    className="relative z-50 flex h-10 items-center justify-center lg:hidden"
                >
                    <span className="text-xs font-medium uppercase tracking-[0.14em]">
                        {isMenuOpen ? "Close" : "Menu"}
                    </span>
                </button>
            </div>

            <div
                className={`absolute inset-x-0 top-full border-b border-border bg-background transition-all duration-500 lg:hidden ${
                    isMenuOpen
                        ? "visible translate-y-0 opacity-100"
                        : "invisible -translate-y-4 opacity-0"
                }`}
            >
                <div className="px-6 py-8">
                    <Navigation mobile onNavigate={closeMenu}/>

                    <Link
                        href="/request"
                        onClick={closeMenu}
                        className="mt-8 block border border-foreground px-5 py-4 text-center text-xs font-medium uppercase tracking-[0.16em] transition-colors duration-300 hover:bg-foreground hover:text-background"
                    >
                        Request restoration
                    </Link>
                </div>
            </div>
        </header>
    );
}