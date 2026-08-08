"use client";

import { useState } from "react";

type Material = {
    id: number;
    name: string;
};

export default function Home() {
    const appEnv = process.env.NEXT_PUBLIC_APP_ENV;

    const [materials, setMaterials] = useState<Material[]>([]);
    const [loading, setLoading] = useState(false);

    const messages: Record<string, string> = {
        LOCAL: "🖥️ You are running the LOCAL environment.",
        PREVIEW: "🧪 You are viewing a PREVIEW deployment.",
        DEV: "🚧 This is the DEVELOPMENT environment.",
        PROD: "🚀 Welcome to the PRODUCTION environment.",
    };

    async function loadItems() {
        try {
            setLoading(true);

            const response = await fetch("/api/materials");

            const data: Material[] = await response.json();

            setMaterials(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <main
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
                minHeight: "100vh",
                fontFamily: "sans-serif",
            }}
        >
            <h1>
                {messages[appEnv ?? ""] ?? "❌ Unknown environment."}
            </h1>

            <button onClick={loadItems}>
                {loading ? "Loading..." : "Load items"}
            </button>

            {materials.length > 0 && (
                <table
                    style={{
                        borderCollapse: "collapse",
                    }}
                >
                    <thead>
                    <tr>
                        <th
                            style={{
                                border: "1px solid black",
                                padding: "8px",
                            }}
                        >
                            ID
                        </th>

                        <th
                            style={{
                                border: "1px solid black",
                                padding: "8px",
                            }}
                        >
                            Name
                        </th>
                    </tr>
                    </thead>

                    <tbody>
                    {materials.map((item) => (
                        <tr key={item.id}>
                            <td
                                style={{
                                    border: "1px solid black",
                                    padding: "8px",
                                }}
                            >
                                {item.id}
                            </td>

                            <td
                                style={{
                                    border: "1px solid black",
                                    padding: "8px",
                                }}
                            >
                                {item.name}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </main>
    );
}