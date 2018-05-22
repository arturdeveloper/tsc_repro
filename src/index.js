import { readline } from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let count = 0;
rl.question("Input some number: ", answer => {
  count = Number(answer);
  startCalculations();
  rl.close();
});

const startCalculations = () => {
  for (let i = 0; i < count; i++) {
    console.log(i);
  }
};
