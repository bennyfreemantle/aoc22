import { readFile } from "node:fs/promises";
const rawInput = await readFile("./input.txt", { encoding: "utf-8" });
const data = rawInput.split("\n");

const stacks = {
  s1: ["Z", "T", "F", "R", "W", "J", "G"],
  s2: ["G", "W", "M"],
  s3: ["J", "N", "H", "G"],
  s4: ["J", "R", "C", "N", "W"],
  s5: ["W", "F", "S", "B", "G", "Q", "V", "M"],
  s6: ["S", "R", "T", "D", "V", "W", "C"],
  s7: ["H", "B", "N", "C", "D", "Z", "G", "V"],
  s8: ["S", "J", "N", "M", "G", "C"],
  s9: ["G", "P", "N", "W", "C", "J", "D", "L"],
};

const refinedList = data.map((line) => line.replace(/[^0-9.]/g, ""));

// 1 - how many to move - can be greater than 9, ie 11,15 etc
// check how big the string is, if its greater than 3 characters we know the above
// requires to move double digits
// 2 - from what stack - only 1-9
// 3 - to which stack - only 1-9

refinedList.forEach((instruction) => {
  let amountToMove;
  let fromStack;
  let toStack;
  if (instruction.length > 3) {
    // we know the amount to move is double digits
    amountToMove = instruction.slice(0, 2);
    fromStack = instruction.slice(2, 3);
    toStack = instruction.slice(3, 4);
  } else {
    // only single digit to move
    amountToMove = instruction.slice(0, 1);
    fromStack = instruction.slice(1, 2);
    toStack = instruction.slice(2, 3);
  }

  // pt1
  // pop off the end of the stack how many we need to move from what stack
  // add to end of stack where we need to move from, what ever the value was we popped off
  // for (let i = 0; i < amountToMove; i++) {
  //   // keep track of the thing we're trying to remove and add
  //   // Create a variable to store what array we are moving from
  //   let toMoveFromArray = "s" + fromStack;
  //   // create a variable of the array we are moving to
  //   let toMoveToArray = "s" + toStack;

  //   // add to the array
  //   stacks[toMoveToArray].push(
  //     stacks[toMoveFromArray][stacks[toMoveFromArray].length - 1]
  //   );
  //   // remove from the array
  //   stacks[toMoveFromArray].pop();
  // }

  // pt2
  let toMoveFromArray = "s" + fromStack;
  let toMoveToArray = "s" + toStack;

  // slice from our array to move, reverse a temp array and slice from that
  let reversedArray = stacks[toMoveFromArray].slice().reverse();
  let slicedSection = reversedArray.slice(0, amountToMove).reverse();

  for (let i = 0; i < amountToMove; i++) {
    stacks[toMoveFromArray].pop();
  }
  stacks[toMoveToArray] = [...stacks[toMoveToArray], ...slicedSection];

  // console.log(slicedSection);
});

console.log(
  stacks.s1[stacks.s1.length - 1],
  stacks.s2[stacks.s2.length - 1],
  stacks.s3[stacks.s3.length - 1],
  stacks.s4[stacks.s4.length - 1],
  stacks.s5[stacks.s5.length - 1],
  stacks.s6[stacks.s6.length - 1],
  stacks.s7[stacks.s7.length - 1],
  stacks.s8[stacks.s8.length - 1],
  stacks.s9[stacks.s9.length - 1]
);
