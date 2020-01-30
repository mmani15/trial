function addTwo(number) {
    return number + 2;
  }
  
  const finalAnswer = addTwo(8);
  console.log(finalAnswer);
  console.log(addTwo(200));
  function greet(firstName, lastName, honorific, greeting) {
    return `${greeting} ${honorific} ${lastName}! I’m extremely pleased you could join us, ${firstName}! I hope you enjoy your stay, ${honorific} ${lastName}.`;
  }
  
  console.log(greet("Brian", "Holt", "Lord", "Salutations"));
  console.log(greet("Jack", "Sparrow", "Captain", "A-hoy"));
  function addFive(number) {
    
    return number + 5;
  }
  const someVariable = "you can't see me outside this function";
  addFive(10);
  console.log(someVariable);
  const sentence = "ThIs HaS wEiRd CaSiNg On It";
console.log(sentence.toUpperCase());

console.log(Math.round(5.1));

const name = "Brian Holt";
console.log(name.substr(6, 3));