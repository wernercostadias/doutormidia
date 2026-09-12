import { copyFile, mkdir, rm } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outputDirectory = resolve(projectRoot, "dist");
const staticFiles = [
  "index.html",
  "regras.html",
  "foto.jpg",
  "jbl.webp",
  "doutormidia.webp",
  "iphone.webp",
  "jblcomiphone.webp"
];

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });

for (const file of staticFiles) {
  await copyFile(resolve(projectRoot, file), resolve(outputDirectory, file));
}

console.log(`Build concluído: ${staticFiles.length} arquivos em dist/`);
