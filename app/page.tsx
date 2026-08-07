export default function Home() {
    const appEnv = process.env.NEXT_PUBLIC_APP_ENV;

    const messages: Record<string, string> = {
        LOCAL: "🖥️ You are running the LOCAL environment.",
        PREVIEW: "🧪 You are viewing a PREVIEW deployment.",
        DEV: "🚧 This is the DEVELOPMENT environment.",
        PROD: "🚀 Welcome to the PRODUCTION environment.",
    };

    return (
        <main
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                fontFamily: "sans-serif",
            }}
        >
            <h1>{messages[appEnv ?? ""] ?? "❌ Unknown environment."}</h1>
        </main>
    );
}