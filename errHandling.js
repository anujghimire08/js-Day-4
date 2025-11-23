class YoungAgeError {
  constructor(age) {
    this.age = age;
  }
  checkAge() {
    if (this.age > 18) {
      console.log("Can vote");
    } else {
      throw new Error("Can't Vote");
    }
  }
}

try {
  let youngygeerror = new YoungAgeError(4);
  youngygeerror.checkAge();
} catch (error) {
  console.error(error);
}
console.log("done");


// try {
//   console.lag("jfd");
// } catch (error) {
//   console.error(error);
// }
// console.log("done");
