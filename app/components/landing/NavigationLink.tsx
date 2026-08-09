import Link from "next/link";
import type { ReactNode } from "react";
import {NavigationItem} from "@/app/types/NavigationItem";

type NavigationLinkProps = {
    item: NavigationItem;
    children: ReactNode;
    onClick?: () => void;
    className?: string;
};

export function NavigationLink({
                                   item,
                                   children,
                                   onClick,
                                   className,
                               }: NavigationLinkProps) {
    if (item.href.startsWith("#")) {
        return (
            <a
                href={item.href}
                onClick={onClick}
                className={className}
            >
                {children}
            </a>
        );
    }

    return (
        <Link
            href={item.href}
            onClick={onClick}
            className={className}
        >
            {children}
        </Link>
    );
}