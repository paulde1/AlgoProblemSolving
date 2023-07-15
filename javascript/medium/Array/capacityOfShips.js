/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
const shipWithinDays = function (weights, days) {
  //find the max weight and compare it to total weight
  //create some pointers
  //while loop as long as the total weight is less than max weight
  //find the midpoint if the the items can shit within the given days
  //return totaldays neede
  //create a callback that takes in the days, midpoint and weights and returns a boolean
  let totalWeight = 0;
  let maxWeight = 0;

  for (let weight of weights) {
    totalWeight += weight;
    maxWeight = Math.max(maxWeight, weight);
  }
  let leftPointer = maxWeight;
  let rightPointer = totalWeight;

  while (leftPointer < rightPointer) {
    let middle = Math.floor((leftPointer + rightPointer) / 2);
    if (canShip(weights, middle, days)) {
      rightPointer = middle;
    } else {
      leftPointer = middle + 1;
    }
  }
  return leftPointer;
};

function canShip(weights, middle, days) {
  let daysCount = 1;
  let load = 0;
  for (let weight of weights) {
    load += weight;
    if (load > middle) {
      daysCount++;
      load = weight;
    }
  }
  return daysCount <= days;
}

let weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let days = 5;
//expect 15
console.log(shipWithinDays(weights, days));
