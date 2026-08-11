import Link from "next/link";
import type { ReactNode } from "react";
import type { NavigationItem } from "@/app/types/NavigationItem";

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