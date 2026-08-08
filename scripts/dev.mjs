// Loads environment variables from .env.local.
// This file contains URLs for all three databases:
// Local, Dev and Prod.
import { config } from "dotenv";

// Provides an interactive terminal menu.
import { select } from "@inquirer/prompts";

// Allows us to start Next.js as a child process.
import { spawn } from "node:child_process";

// Load variables from .env.local.
config({ path: ".env.local" });


// Ask the developer which database should be used
// for the current local Next.js session.
const database = await select({
    message: "Which database do you want to use?",
    choices: [
        {
            name: "Local",
            value: "LOCAL",
        },
        {
            name: "Dev",
            value: "DEV",
        },
        {
            name: "Prod",
            value: "PROD",
        },
    ],
});


// Get the corresponding database URL.
//
// For example:
// LOCAL → DATABASE_URL_LOCAL
// DEV   → DATABASE_URL_DEV
// PROD  → DATABASE_URL_PROD
const databaseUrl = process.env[`DATABASE_URL_${database}`];


// Stop the application if the selected database
// does not have a corresponding URL in .env.local.
if (!databaseUrl) {
    console.error(`DATABASE_URL_${database} is not defined`);
    process.exit(1);
}


// Show the selected database in the terminal.
// The actual DATABASE_URL is not printed because
// it contains database credentials.
console.log(`\nConnected to: ${database}\n`);


// Start Next.js development server.
//
// We pass the selected database URL as DATABASE_URL,
// so the application and Prisma connect to the selected database.
//
// We also set NEXT_PUBLIC_APP_ENV so the application
// knows which environment was selected.
const nextProcess = spawn(
    process.platform === "win32" ? "npx.cmd" : "npx",
    ["next", "dev"],
    {
        // Show the Next.js output directly in the current terminal.
        stdio: "inherit",

        // Pass the current environment variables to Next.js
        // and override DATABASE_URL with the selected database.
        env: {
            ...process.env,
            DATABASE_URL: databaseUrl,
            NEXT_PUBLIC_APP_ENV: database,
        },
    },
);


// When Next.js stops, exit this script with the same exit code.
nextProcess.on("exit", (code) => {
    process.exit(code ?? 0);
});