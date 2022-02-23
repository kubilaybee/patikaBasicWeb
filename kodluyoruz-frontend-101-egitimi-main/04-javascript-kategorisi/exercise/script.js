// let title = document.getElementById("title");
// let link = document.getElementById("link");

// console.log(title);
// console.log(link);

// link.innerHTML = "test";

// let fullName = prompt("Enter your name");
// console.log(fullName);

// filter exercise

const person = [
  {
    name: "Adem",
    age: 25,
    languages: ["JavaScript", "CSS"],
  },
  {
    name: "Oğuz",
    age: 33,
    languages: ["Java", "HTML"],
  },
];

// firstTask age bigger than 30
let firstTask = person.filter((person) => person.age > 30);
console.log(firstTask);
// secondTask who know js
let secondTask = person.filter((person) =>
  person.languages.includes("JavaScript")
);
console.log(secondTask);
