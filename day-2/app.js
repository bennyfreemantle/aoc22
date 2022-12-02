import { promises as fsPromises } from "fs";

async function readData(filename) {
  const data = await fsPromises.readFile(filename, "utf-8");
  const arr = data.split(/\r?\n/);
  return arr;
}

// A - Rock
// B - Paper
// C - Scissors

// X - Rock 1
// Y - Paper 2
// Z - Scissors 3

// win = 6
// draw = 3
// lose = 0

async function calculateRPS() {
  const data = await readData("data.txt");
  let scoreP1 = 0;
  let scoreP2 = 0;

  // pt1
  for (let i = 0; i < data.length; i++) {
    if (data[i] === "A Y") scoreP1 += 6 + 2; // win
    if (data[i] === "A Z") scoreP1 += 0 + 3; // loss
    if (data[i] === "A X") scoreP1 += 3 + 1; //draw

    if (data[i] === "B Z") scoreP1 += 6 + 3; // win
    if (data[i] === "B X") scoreP1 += 0 + 1; // loss
    if (data[i] === "B Y") scoreP1 += 3 + 2; // draw

    if (data[i] === "C X") scoreP1 += 6 + 1; // win
    if (data[i] === "C Y") scoreP1 += 0 + 2; // loss
    if (data[i] === "C Z") scoreP1 += 3 + 3; // draw
  }

  // pt2
  for (let i = 0; i < data.length; i++) {
    if (data[i] === "A Y") scoreP2 += 4; // draw
    if (data[i] === "A X") scoreP2 += 3; // lose
    if (data[i] === "A Z") scoreP2 += 8; // win

    if (data[i] === "B Y") scoreP2 += 5; // draw
    if (data[i] === "B X") scoreP2 += 1; // lose
    if (data[i] === "B Z") scoreP2 += 9; // win

    if (data[i] === "C Y") scoreP2 += 6; // draw
    if (data[i] === "C X") scoreP2 += 2; // lose
    if (data[i] === "C Z") scoreP2 += 7; // win
  }

  console.log("pt1 - ", scoreP1);
  console.log("pt2 - ", scoreP2);
}
calculateRPS();
