// function test() {
// 	console.log('Manisha,s first functiom');
// }

// function second() {
// 	console.log('second function');
// }

// test();
// second()
// console.log(document.getElementById('manisha'))
//             document.getElementById('manisha').addEventListener('click', function() {
//                 console.log('button clicked');
//             })


function sum (a, b) {
    return a + b;
}
console.log(process.argv);
let ash = parseInt(process.argv[2], 10);
let man = parseInt(process.argv[3], 10);
console.log(sum(ash,man));