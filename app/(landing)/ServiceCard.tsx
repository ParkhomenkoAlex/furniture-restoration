"use client";

import Image from "next/image";

import type { Service } from "@/app/types/Service";

type ServiceCardProps = {
    service: Service;
    onSelect: (service: Service) => void;
};

export function ServiceCard({ service, onSelect }: ServiceCardProps) {
    return (
        <button
            type="button"
            onClick={() => onSelect(service)}
            className="group block w-full cursor-pointer border-b border-neutral-300 text-left md:min-h-[480px] md:border-r md:[&:nth-child(2n)]:border-r-0 lg:min-h-[480px] lg:border-r lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0 lg:px-8 lg:py-8"
        >
            <div className="flex h-full flex-col">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                    <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col pt-6">
                    <div className="flex items-start justify-between">
                        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-400 transition-colors duration-300 group-hover:text-neutral-600">
                            {service.number}
                        </span>

                        <span className="text-xl text-neutral-400 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-neutral-950">
                            ↗
                        </span>
                    </div>

                    <div className="mt-5">
                        <h3 className="text-2xl font-medium tracking-[-0.03em] text-neutral-950 transition-transform duration-300 group-hover:translate-x-1 sm:text-3xl">
                            {service.title}
                        </h3>

                        <p className="mt-3 max-w-[460px] text-sm leading-6 text-neutral-500 transition-colors duration-300 group-hover:text-neutral-700 sm:text-base sm:leading-7">
                            {service.shortDescription}
                        </p>
                    </div>
                </div>
            </div>
        </button>
    );
}
