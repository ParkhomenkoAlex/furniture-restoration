"use client";

import { useState } from "react";

import { services } from "@/app/data/services";
import type { Service } from "@/app/types/Service";
import { ServiceCard } from "./ServiceCard";
import { ServiceModal } from "./ServiceModal";

export function Services() {
    const [selectedService, setSelectedService] = useState<Service | null>(null);

    const closeModal = () => {
        setSelectedService(null);
    };

    return (
        <>
            <section
                id="services"
                className="scroll-mt-20 border-t border-neutral-200 bg-[#f4f2ed]"
            >
                <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
                    {/* Section intro */}
                    <div className="max-w-[720px]">
                        <div className="flex items-center gap-4">
                            <span className="h-px w-8 bg-neutral-400" />

                            <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-neutral-500">
                                Services
                            </span>
                        </div>

                        <h2 className="mt-6 text-5xl font-medium leading-[0.92] tracking-[-0.045em] text-neutral-950 sm:text-6xl lg:text-7xl">
                            Crafted to
                            <br />
                            <span className="font-serif italic">
                                last.
                            </span>
                        </h2>

                        <p className="mt-7 max-w-[560px] text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                            From careful repairs to complete restoration,
                            every piece receives the attention its history
                            deserves.
                        </p>

                        <p className="mt-6 text-xs uppercase tracking-[0.16em] text-neutral-400">
                            Click a service to explore
                        </p>
                    </div>

                    {/* Services grid */}
                    <div className="mt-16 grid grid-cols-1 lg:mt-24 lg:grid-cols-2">
                        {services.map((service) => (
                            <ServiceCard
                                key={service.id}
                                service={service}
                                onSelect={setSelectedService}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <ServiceModal
                service={selectedService}
                onClose={closeModal}
            />
        </>
    );
}