import Image from "next/image";
import Link from "next/link";

type LogoProps = {
    onClick?: () => void;
};

export function Logo({ onClick }: LogoProps) {
    return (
        <Link
            href="/"
            onClick={onClick}
            aria-label="Furniture Restoration"
            className="inline-flex items-center"
        >
            <Image
                src="/images/logo.png"
                alt="Furniture Restoration"
                width={510}
                height={140}
                priority
                className="h-auto w-32 md:w-40 lg:w-48"
            />
        </Link>
    );
}
