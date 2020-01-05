function test() {
	console.log('Manisha,s first functiom');
}

function second() {
	console.log('second function');
}

console.log(document.getElementById('manisha'))
            document.getElementById('manisha').addEventListener('click', function() {
                console.log('button clicked');
            })