// A two-part unsent confession: a To: line and the message itself.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "To: My best friend from college\nI still have the voicemail from the night before graduation. I never called back — I didn't know how to say I was scared of losing you.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
