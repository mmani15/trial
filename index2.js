function sum (a, b) {
    return a + b;
}
console.log(process.argv);
let ash = parseInt(process.argv[2], 10);
let man = parseInt(process.argv[3], 10);
console.log(sum(ash,man))