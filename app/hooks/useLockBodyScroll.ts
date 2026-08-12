"use client";

import { useEffect } from "react";

export function useLockBodyScroll(isLocked: boolean) {
    useEffect(() => {
        if (!isLocked) {
            return;
        }

        document.body.classList.add("overflow-hidden");

        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [isLocked]);
}
