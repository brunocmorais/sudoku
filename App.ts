import { Generator } from "./Generator";

const startDate = new Date();

for (let i = 0; i < 50; i++)
    console.log(`Puzzle #${i + 1}\n\n${Generator.generate().print()}`);

console.log("Generated in (ms) = " + (new Date().getTime() - startDate.getTime()));