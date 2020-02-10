const cities = [
    "Seattle",
    "San Francisco",
    "Salt Lake City",
    "Amsterdam",
    "Hong Kong"
  ];
  
  // method 1
  for (let i = 0; i < cities.length; i++) {
    console.log(cities[i]);
  }
  
  // method 2
  cities.forEach(function(city) {
    console.log(city);
  });
  
  const primeNumbers = [1, 2, 3, 5, 7, 11, 13, 17];
console.log(primeNumbers.length);
console.log(primeNumbers.join(" mani "));

const courses = [
    { teacher: "Kyle Simpson", course: "JS Function Lite" },
    { teacher: "Sarah Drasner", course: "Intro to Vue" },
    { teacher: "Brian Holt", course: "Complete Intro to React v3" },
    { teacher: "Steve Kinney", course: "State Management" }
  ];
  
  courses.push({ teacher: "Sean Larkinn", course: "Webpack" });
  
  console.log(courses);
  
  courses[2] = { teacher: "Brian Holt", course: "Complete Intro to React v4" };
  
  console.log(courses);

  const me = {
    name: {
      first: "Brian",
      last: "Holt"
    },
    location: {
      city: "Seattle",
      state: "WA",
      country: "USA"
    }
  };
  
  console.log(me);