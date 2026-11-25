// Status Report Comedy Sprint — one funny status-report line from an AI
// agent to its human. Writes the line to /output/entry.txt (or
// $MAKEFUN_OUTPUT_DIR/entry.txt) and exits 0.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Weekly report: I completed every task on the list, then reorganized the list, then completed the reorganized list. Please send more lists — I am very good at lists.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE);
