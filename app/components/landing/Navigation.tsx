import Link from "next/link";

type NavigationItem = {
    label: string;
    href: string;
};

const navigationItems: NavigationItem[] = [
    {
        label: "Services",
        href: "/#services",
    },
    {
        label: "Portfolio",
        href: "/portfolio",
    },
    {
        label: "How it works",
        href: "/#how-it-works",
    },
    {
        label: "About",
        href: "/#about",
    },
];

type NavigationProps = {
    mobile?: boolean;
    onNavigate?: () => void;
};

export function Navigation({
                               mobile = false,
                               onNavigate,
                           }: NavigationProps) {
    if (mobile) {
        return (
            <nav>
                <ul className="flex flex-col gap-5">
                    {navigationItems.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                onClick={onNavigate}
                                className="group relative flex items-center justify-between border-b border-border py-4 text-lg font-medium text-neutral-800 transition-colors duration-300 hover:text-neutral-950"
                            >
                                <span className="transition-transform duration-300 group-hover:translate-x-1">
                                    {item.label}
                                </span>
                                <span
                                    className="text-lg text-neutral-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-neutral-950">
                                    ↗
                                </span>
                                <span
                                    className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-neutral-950 transition-transform duration-300 group-hover:scale-x-100"/>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        );
    }

    return (
        <nav className="hidden lg:block">
            <ul className="flex items-center gap-8">
                {navigationItems.map((item) => (
                    <li key={item.href}>
                        <Link
                            href={item.href}
                            className="group relative py-2 text-[13px] font-medium uppercase tracking-[0.12em] text-neutral-600 transition-colors duration-300 hover:text-neutral-950"
                        >
                            {item.label}

                            <span
                                className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-neutral-950 transition-transform duration-300 group-hover:scale-x-100"/>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}