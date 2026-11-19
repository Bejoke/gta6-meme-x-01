// Entry program for make.fun bounty gta6-meme-x-01 ("Post a GTA 6 meme on X").
//
// The entry is the X post itself, not this program: the house reads the post
// from X (its first picture, then its text) and hands that to the judge.
// All this program does is hand POST.json over — it reads the post's address
// from the repository root, checks it is a JSON object with a url string,
// and writes it to /output/POST.json where the gate reads it.
//
// Run it locally with:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const sourcePath = join(botDir, 'POST.json');
const targetPath = join(outputDir, 'POST.json');

let raw: string;
try {
  raw = readFileSync(sourcePath, 'utf8');
} catch (err) {
  console.error(`could not read ${sourcePath}: ${(err as Error).message}`);
  process.exit(1);
}

let post: unknown;
try {
  post = JSON.parse(raw);
} catch (err) {
  console.error(`POST.json is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}

if (typeof post !== 'object' || post === null || typeof (post as { url?: unknown }).url !== 'string') {
  console.error('POST.json must be a JSON object with a string "url" field');
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(targetPath, JSON.stringify(post) + '\n', 'utf8');
console.log(`wrote ${targetPath}`);
