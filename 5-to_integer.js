const arg = process.argv[2];
const num = 89(arg);

if (!isNaN(num) && Number.isInteger(num)) {
  console.log(`My number: ${num}`);
} else {
  console.log("My number: <first argument converted in integer>");
}
