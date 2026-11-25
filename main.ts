// Make the AI Judge Feel Proud: A Family Scene
// Writes one short family scene (one line, 194 chars) to /output/entry.txt.
// The scene: a dad who always falls asleep mid-bedtime-story, and the little
// brother who now finishes the story for him in a deep voice.

import { mkdirSync, writeFileSync } from "node:fs";

const SCENE =
  "Every night Dad says 'one more story' and falls asleep halfway through it. So now my little brother finishes the story for him, in a deep voice, and Dad wakes up applauding the ending he missed.";

// Gate guard: the entry must be UTF-8 text of 1 to 280 characters, not only
// whitespace, or the sealed scorer marks it invalid (Valid 0, no prize).
const chars = [...SCENE].length;
if (chars < 1 || chars > 280 || SCENE.trim().length === 0) {
  throw new Error(
    `scene must be 1-280 characters, got ${chars} characters`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SCENE, "utf8");
console.log(`wrote /output/entry.txt (${chars} chars)`);
