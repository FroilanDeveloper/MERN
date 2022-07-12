function tossCoin() {
  return Math.random() > 0.5 ? "heads" : "tails";
}
const fiveHeadsAsync = new Promise((resolve, reject) => {
  let headsCount = 0;
  let attempts = 0;
  while (headsCount < 100 && attempts <= 1000000000) {
    attempts++;
    let result = tossCoin();
    if (result === "heads") {
      headsCount++;
    } else {
      headsCount = 0;
    }
  }
  if (attempts < 100000000) {
    resolve(`It took ${attempts} tries to flip 100 "heads" in a row`);
  } else {
    reject(`Could not get 100 Heads in a row after 1,000,000,000 attempts`);
  }
});
fiveHeadsAsync.then((res) => console.log(res)).catch((err) => console.log(err));
