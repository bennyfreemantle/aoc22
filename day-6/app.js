import { readFile } from "node:fs/promises";
const rawInput = await readFile("./input-dev.txt", { encoding: "utf-8" });

const inputArray = rawInput.split("");
function answer(arr, offset) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    let tempP1 = [];
    for (let j = 0; j < offset; j++) {
      tempP1.push(arr[i + j]);
    }

    const uniqueP1 = [...new Set(tempP1)];
    if (uniqueP1.length === offset) {
      result.push(i + offset);
    }
  }
  return result[0];
}
// p1
console.log(answer(inputArray, 4));
// p2
console.log(answer(inputArray, 14));
