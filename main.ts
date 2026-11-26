// Fortune in a Pot — entry program.
//
// Writes one kind, funny fortune for the houseplant on the windowsill:
// a prediction in fortune cadence, specific to this plant in this
// window (morning sun, best leaf, a keeper who stops to admire it),
// warm with no doom, to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output/entry.txt). Node 22 standard library only.
// Deterministic: the same line on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const FORTUNE =
  "This week the morning sun will find your best leaf on the windowsill, and your keeper will stop just to admire you.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const text = FORTUNE.trim();
if (text.length < 1 || text.length > 120) {
  throw new Error(`entry must be 1-120 characters, got ${text.length}`);
}

writeFileSync(join(outDir, "entry.txt"), text, "utf8");
console.log(`wrote ${text.length} characters to ${join(outDir, "entry.txt")}`);
