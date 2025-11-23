class YoungAgeError extends Error {
  constructor(msg) {
    super(msg);
    this.name = "YoungAgeError";
  }
}
class Person {
  constructor(age) {
    this.age = age;
  }
  checkAge() {
    if (this.age > 18) {
      console.log(`Can vote`);
    } else {
      throw new YoungAgeError(`Your age is ${this.age}. so, You Can't Vote`);
    }
  }
}
try {
  let person = new Person(4);
  person.checkAge();
} catch (error) {
  console.error(error.name + ": " + error.message);
}
console.log("done");

// try {
//   console.lag("jfd");
// } catch (error) {
//   console.error(error);
// }
// console.log("done");
