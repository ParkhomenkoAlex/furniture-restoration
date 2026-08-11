"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { TransitionEvent } from "react";

import type { Service } from "@/app/types/Service";

type ServiceModalProps = {
    service: Service | null;
    onClose: () => void;
};

export function ServiceModal({
                                 service,
                                 onClose,
                             }: ServiceModalProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!service) {
            return;
        }

        // Wait one frame before triggering the transition
        requestAnimationFrame(() => {
            setIsVisible(true);
        });

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                handleClose();
            }
        };

        const originalOverflow = document.body.style.overflow;

        document.body.style.overflow = "hidden";
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = originalOverflow;
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [service, onClose]);

    const handleClose = () => {
        setIsVisible(false);
    };

    const handleTransitionEnd = (
        event: TransitionEvent<HTMLDivElement>,
    ) => {
        if (
            !isVisible &&
            event.propertyName === "opacity"
        ) {
            onClose();
        }
    };

    if (!service) {
        return null;
    }

    return (
        <div
            className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-10 ${
                isVisible
                    ? "bg-neutral-950/50"
                    : "bg-neutral-950/0"
            } backdrop-blur-sm transition-colors duration-300 ease-out`}
            role="presentation"
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) {
                    handleClose();
                }
            }}
        >
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="service-modal-title"
                onTransitionEnd={handleTransitionEnd}
                className={`relative flex max-h-[calc(100vh-2rem)] w-full max-w-[960px] flex-col overflow-hidden bg-[#f4f2ed] shadow-2xl sm:max-h-[calc(100vh-3rem)] lg:max-h-[calc(100vh-5rem)] ${
                    isVisible
                        ? "translate-y-0 scale-100 opacity-100"
                        : "translate-y-4 scale-[0.98] opacity-0"
                } transition-all duration-300 ease-out`}
            >
                <button
                    type="button"
                    onClick={handleClose}
                    aria-label="Close service details"
                    className="absolute right-4 top-4 z-10 flex h-10 w-10 cursor-pointer items-center justify-center border border-neutral-300 bg-[#f4f2ed]/90 text-xl text-neutral-700 backdrop-blur-sm transition-colors duration-300 hover:bg-neutral-950 hover:text-white"
                >
                    ×
                </button>

                <div className="overflow-y-auto">
                    {/* IMAGE — TOP */}
                    <div className="relative h-[280px] w-full bg-neutral-200 sm:h-[380px] lg:h-[460px]">
                        <Image
                            src={service.image}
                            alt={service.imageAlt}
                            fill
                            sizes="(max-width: 1024px) 100vw, 960px"
                            className="object-cover"
                        />
                    </div>

                    {/* CONTENT */}
                    <div className="px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
                        <div className="flex items-center gap-4">
                            <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-400">
                                {service.number}
                            </span>

                            <span className="h-px w-8 bg-neutral-300" />

                            <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-400">
                                Our services
                            </span>
                        </div>

                        <h2
                            id="service-modal-title"
                            className="mt-6 max-w-[520px] text-4xl font-medium leading-[0.95] tracking-[-0.04em] text-neutral-950 sm:text-5xl"
                        >
                            {service.title}
                        </h2>

                        <p className="mt-6 text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                            {service.description}
                        </p>

                        <div className="mt-10 grid gap-8 border-t border-neutral-300 pt-8 sm:grid-cols-2">
                            <div>
                                <h3 className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-400">
                                    Suitable for
                                </h3>

                                <ul className="mt-4 space-y-2">
                                    {service.suitableFor.map(
                                        (item) => (
                                            <li
                                                key={item}
                                                className="text-sm text-neutral-700"
                                            >
                                                {item}
                                            </li>
                                        ),
                                    )}
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-400">
                                    Materials
                                </h3>

                                <ul className="mt-4 space-y-2">
                                    {service.materials.map(
                                        (item) => (
                                            <li
                                                key={item}
                                                className="text-sm text-neutral-700"
                                            >
                                                {item}
                                            </li>
                                        ),
                                    )}
                                </ul>
                            </div>
                        </div>

                        <div className="mt-10 border-t border-neutral-300 pt-8">
                            <h3 className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-400">
                                Typical process
                            </h3>

                            <div className="mt-5 space-y-4">
                                {service.process.map(
                                    (step, index) => (
                                        <div
                                            key={step}
                                            className="flex items-center gap-4"
                                        >
                                            <span className="flex h-7 w-7 shrink-0 items-center justify-center border border-neutral-300 text-[10px] text-neutral-500">
                                                {String(
                                                    index + 1,
                                                ).padStart(
                                                    2,
                                                    "0",
                                                )}
                                            </span>

                                            <span className="text-sm text-neutral-700">
                                                {step}
                                            </span>
                                        </div>
                                    ),
                                )}
                            </div>
                        </div>

                        <div className="mt-10 border-t border-neutral-300 pt-8">
                            <button
                                type="button"
                                onClick={handleClose}
                                className="group inline-flex w-full cursor-pointer items-center justify-between bg-neutral-950 px-6 py-4 text-[11px] font-medium uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:bg-neutral-800"
                            >
                                <span>
                                    Start a restoration
                                </span>

                                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                                    ↗
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}