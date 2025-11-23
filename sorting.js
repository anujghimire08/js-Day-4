let strings = ["ram", "shayam", "hari", "gita"];
strings.sort();
console.log(strings);
strings.sort().reverse();
console.log(strings);

let numbers = [1, 3, 5, 2, 7, 9, 4, 10, 20, 8];
numbers.sort((a, b) => a - b).reverse();
console.log(numbers);

let objArr = [
  {
    name: "ram",
    age: 1500,
  },
  {
    name: "anuj",
    age: 15,
  },
  {
    name: "hanuman",
    age: 10000,
  },
];
// objArr.sort((a, b) => a.age - b.age).reverse();
objArr.sort((a, b) => a.name.localeCompare(b.name));
console.log(objArr);
