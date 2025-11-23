function project1() {
  let clrInterval = setInterval(() => {
    console.log("work 1 done..");
    clearInterval(clrInterval);
  }, 2000);
}

function remainingWork() {
  console.log("work 2 done..");
  console.log("work 3 done..");
  console.log("work 4 done..");
}

project1();
remainingWork();
