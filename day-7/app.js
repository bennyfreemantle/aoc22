const fs = require("fs");
let input = fs.readFileSync(__dirname + "/input.txt", "utf8").split("\n");

let part1 = 0;
let part2 = 0;
let dirSizes = [];

function parseInput(index) {
  let size = 0;
  for (index; index < input.length; index++) {
    const element = input[index].split(" ");
    if (element[2] == "..") {
      break;
    } else if (element[1] == "cd") {
      let [dirSize, i] = parseInput(++index);
      size += dirSize;
      index = i;
    } else if (!isNaN(element[0])) {
      size += Number(element[0]);
    }
  }
  if (size < 100000) part1 += size;
  dirSizes.push(size);
  return [size, index];
}
let totalSize = parseInput(0)[0];
let sizeToDelete = 30000000 - (70000000 - totalSize);
part2 = Math.min(
  ...dirSizes.sort((a, b) => a - b).filter((a) => a > sizeToDelete)
);

console.log(`Part 1: ${part1}\nPart 2: ${part2}`);
