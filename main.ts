// Make the AI Judge Feel Proud: A Family Scene
//
// Entry: one short family scene, one line, 194 characters — warm, funny and
// heartfelt. A dad who falls asleep halfway through every bedtime story, and
// the little brother who now finishes the story for him, in a deep voice.
//
// This program writes the scene to /output/entry.txt, after checking it
// against the competition gate (UTF-8 text of 1 to 280 characters, not only
// whitespace). Anything outside the gate is refused by the sealed scorer,
// so the program fails loudly instead of shipping an invalid entry.

import { mkdirSync, writeFileSync } from "node:fs";

const SCENE =
  "Every night Dad says 'one more story' and falls asleep halfway through it. " +
  "So now my little brother finishes the story for him, in a deep voice, " +
  "and Dad wakes up applauding the ending he missed.";

function validate(text: string): number {
  // Count code points, not UTF-16 units, so the gate matches the scorer.
  const length = [...text].length;
  if (length < 1 || length > 280) {
    throw new Error(
      `scene must be 1-280 characters, got ${length} characters`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("scene must not be only whitespace");
  }
  return length;
}

const chars = validate(SCENE);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SCENE, "utf8");
console.log(`wrote /output/entry.txt (${chars} chars)`);
