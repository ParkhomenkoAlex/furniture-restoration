export default function Home() {
    const appEnv = process.env.NEXT_PUBLIC_APP_ENV;

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
            <h1>This is {appEnv} after setup Vercel and update variables for non-prod</h1>
        </main>
    );
}