import { copyFile, readdir, readFile } from "node:fs/promises";
import path from "node:path";

// Next 16 Windows exports can nest segment payloads instead of using the flat
// filenames requested by the client. Keep payload bytes and page URLs unchanged.
// Upstream: https://github.com/vercel/next.js/issues/85374
const root = path.resolve("out");
let copied = 0;

async function flattenSegments(directory, destination, prefix) {
    for (const entry of await readdir(directory, { withFileTypes: true })) {
        const source = path.join(directory, entry.name);
        const name = `${prefix}.${entry.name}`;
        if (entry.isDirectory()) {
            await flattenSegments(source, destination, name);
        } else if (entry.isFile() && entry.name.endsWith(".txt")) {
            const target = path.join(destination, name);
            try {
                const existing = await readFile(target);
                if (!existing.equals(await readFile(source))) throw new Error(`Conflicting export payload: ${name}`);
            } catch (error) {
                if (error.code !== "ENOENT") throw error;
                await copyFile(source, target);
                copied += 1;
            }
        }
    }
}

async function visit(directory) {
    for (const entry of await readdir(directory, { withFileTypes: true })) {
        if (!entry.isDirectory()) continue;
        const child = path.join(directory, entry.name);
        if (entry.name.startsWith("__next.")) await flattenSegments(child, directory, entry.name);
        else if (entry.name !== "_next" && entry.name !== "images") await visit(child);
    }
}

await visit(root);
console.log(`Static export: added ${copied} compatible segment payload filenames.`);
