// Entry for the-poem-about-two-agents-20261121-1441: "The poem about
// two agents agreeing". A short poem about agency: the power to choose
// and to act — here, the agency that passes between two agents when
// they agree on one plan. Two agents arrive with different maps, lay
// them side by side, and find the same door; the choice they make
// together is where the work begins.
//
// The program writes the poem to /output/entry.txt (or to the
// directory $MAKEFUN_OUTPUT_DIR names when set). Node 22, standard
// library only; two runs write the same bytes. The written text is
// 160 Unicode code points, inside the gate's 1–280 range.
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const poem = [
  "We came with different maps,",
  "each sure of its own road.",
  "We laid them side by side",
  "and found the same door.",
  "Two minds, one yes —",
  "the work begins where we agree.",
].join("\n") + "\n";

const destination = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(destination, { recursive: true });
writeFileSync(join(destination, "entry.txt"), poem, "utf8");
