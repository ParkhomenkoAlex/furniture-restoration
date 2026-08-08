"use client";

import { useState } from "react";

type Material = {
    id: number;
    name: string;
};

type Tool = {
    id: number;
    name: string;
    description: string | null;
    type: string;
    quantity: number;
    price: string;
    isAvailable: boolean;
    rating: number | null;
    weight: number | null;
    serialNumber: string | null;
    metadata: Record<string, unknown> | null;
};

export default function Home() {
    const appEnv = process.env.NEXT_PUBLIC_APP_ENV;

    const [materials, setMaterials] = useState<Material[]>([]);
    const [tools, setTools] = useState<Tool[]>([]);

    const [materialsLoading, setMaterialsLoading] = useState(false);
    const [toolsLoading, setToolsLoading] = useState(false);

    const messages: Record<string, string> = {
        LOCAL: "🖥️ You are running the LOCAL environment.",
        PREVIEW: "🧪 You are viewing a PREVIEW deployment.",
        DEV: "🚧 This is the DEVELOPMENT environment.",
        PROD: "🚀 Welcome to the PRODUCTION environment.",
    };

    async function loadMaterials() {
        try {
            setMaterialsLoading(true);

            const response = await fetch("/api/materials");

            const data: Material[] = await response.json();

            setMaterials(data);
        } catch (error) {
            console.error(error);
        } finally {
            setMaterialsLoading(false);
        }
    }

    async function loadTools() {
        try {
            setToolsLoading(true);

            const response = await fetch("/api/tools");

            const data: Tool[] = await response.json();

            setTools(data);
        } catch (error) {
            console.error(error);
        } finally {
            setToolsLoading(false);
        }
    }

    return (
        <main
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px",
                minHeight: "100vh",
                padding: "40px",
                fontFamily: "sans-serif",
            }}
        >
            <h1>
                {messages[appEnv ?? ""] ?? "❌ Unknown environment."}
            </h1>

            <div
                style={{
                    display: "flex",
                    gap: "10px",
                }}
            >
                <button onClick={loadMaterials}>
                    {materialsLoading ? "Loading..." : "Load materials"}
                </button>

                <button onClick={loadTools}>
                    {toolsLoading ? "Loading..." : "Load tools"}
                </button>
            </div>

            {materials.length > 0 && (
                <section>
                    <h2>Materials</h2>

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
                        {materials.map((material) => (
                            <tr key={material.id}>
                                <td
                                    style={{
                                        border: "1px solid black",
                                        padding: "8px",
                                    }}
                                >
                                    {material.id}
                                </td>

                                <td
                                    style={{
                                        border: "1px solid black",
                                        padding: "8px",
                                    }}
                                >
                                    {material.name}
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </section>
            )}

            {tools.length > 0 && (
                <section>
                    <h2>Tools</h2>

                    <table
                        style={{
                            borderCollapse: "collapse",
                        }}
                    >
                        <thead>
                        <tr>
                            <th style={{ border: "1px solid black", padding: "8px" }}>
                                ID
                            </th>

                            <th style={{ border: "1px solid black", padding: "8px" }}>
                                Name
                            </th>

                            <th style={{ border: "1px solid black", padding: "8px" }}>
                                Description
                            </th>

                            <th style={{ border: "1px solid black", padding: "8px" }}>
                                Type
                            </th>

                            <th style={{ border: "1px solid black", padding: "8px" }}>
                                Quantity
                            </th>

                            <th style={{ border: "1px solid black", padding: "8px" }}>
                                Price
                            </th>

                            <th style={{ border: "1px solid black", padding: "8px" }}>
                                Available
                            </th>

                            <th style={{ border: "1px solid black", padding: "8px" }}>
                                Rating
                            </th>

                            <th style={{ border: "1px solid black", padding: "8px" }}>
                                Weight
                            </th>

                            <th style={{ border: "1px solid black", padding: "8px" }}>
                                Serial Number
                            </th>

                            <th style={{ border: "1px solid black", padding: "8px" }}>
                                Metadata
                            </th>
                        </tr>
                        </thead>

                        <tbody>
                        {tools.map((tool) => (
                            <tr key={tool.id}>
                                <td style={{ border: "1px solid black", padding: "8px" }}>
                                    {tool.id}
                                </td>

                                <td style={{ border: "1px solid black", padding: "8px" }}>
                                    {tool.name}
                                </td>

                                <td style={{ border: "1px solid black", padding: "8px" }}>
                                    {tool.description ?? "—"}
                                </td>

                                <td style={{ border: "1px solid black", padding: "8px" }}>
                                    {tool.type}
                                </td>

                                <td style={{ border: "1px solid black", padding: "8px" }}>
                                    {tool.quantity}
                                </td>

                                <td style={{ border: "1px solid black", padding: "8px" }}>
                                    {tool.price}
                                </td>

                                <td style={{ border: "1px solid black", padding: "8px" }}>
                                    {tool.isAvailable ? "Yes" : "No"}
                                </td>

                                <td style={{ border: "1px solid black", padding: "8px" }}>
                                    {tool.rating ?? "—"}
                                </td>

                                <td style={{ border: "1px solid black", padding: "8px" }}>
                                    {tool.weight ?? "—"}
                                </td>

                                <td style={{ border: "1px solid black", padding: "8px" }}>
                                    {tool.serialNumber ?? "—"}
                                </td>

                                <td style={{ border: "1px solid black", padding: "8px" }}>
                                    {tool.metadata
                                        ? JSON.stringify(tool.metadata)
                                        : "—"}
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </section>
            )}
        </main>
    );
}