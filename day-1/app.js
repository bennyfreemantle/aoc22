import { promises as fsPromises } from "fs";

async function readData(filename) {
  const data = await fsPromises.readFile(filename, "utf-8");
  const arr = data.split(/\r?\n/);
  return arr;
}

async function sum() {
  const data = await readData("data.txt");

  console.log(data);
  let tempSum = 0;
  let newArray = [];
  data.forEach((element) => {
    if (element.length !== 0) {
      tempSum += +element;
    } else {
      newArray.push(tempSum);
      tempSum = 0;
    }
  });
  const check = newArray.sort((a, b) => b - a);
  console.log(check[0]); // 67622 pt1
  console.log(check[0] + check[1] + check[2]); // 201491 pt2
}
sum();
