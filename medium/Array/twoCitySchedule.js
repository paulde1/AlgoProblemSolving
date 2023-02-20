/**
 * @param {number[][]} costs
 * @return {number}
 */
const twoCitySchedCost = function (costs) {
  //set results sum
  //sort in decending order sort(a) => Math.abs(b[0] - b[1]) - Math.abs(a[0] -a[1]))
  //set a cap variable = costs.length/2
  //set sum, counterA, counterb variable = 0
  //loop through sorted array
  //set city a and city b variable according to costs[i][0] and costs[i][1]
  //if citya is > city b && counterA < cap
  //  sum += costs[i][0] counterA++
  //else sum += costs[i][1] counterB++

  //return results sum
  costs.sort((a, b) => Math.abs(b[0] - b[1]) - Math.abs(a[0] - a[1]));
  let sum = 0;
  let counterA = 0;
  let counterB = 0;
  let cap = costs.length / 2;

  for (let i = 0; i < costs.length; i++) {
    let cityA = costs[i][0];
    let cityB = costs[i][1];

    if (cityA <= cityB) {
      if (counterA < cap) {
        sum += cityA;
        counterA++;
      } else {
        sum += cityB;
        counterB++;
      }
    } else {
      if (counterB < cap) {
        sum += cityB;
        counterB++;
      } else {
        sum += cityA;
        counterA++;
      }
    }
  }
  return sum;
};

//o(log n) - time
//o(1) - space

//using heap will not modify input but will add o(n) - space
//with heap it would be 0(n)

//to improve , use heap
/**
 * @param {number[][]} costs
 * @return {number}
 */
// const twoCitySchedCost = function(costs) {
//     //set results sum
// //sort in decending order sort(a) => Math.abs(b[0] - b[1]) - Math.abs(a[0] -a[1]))
// //set a cap variable = costs.length/2
// //set sum, counterA, counterb variable = 0
// //loop through sorted array
// //set city a and city b variable according to costs[i][0] and costs[i][1]
// //if citya is > city b && counterA < cap
// //  sum += costs[i][0] counterA++
// //else sum += costs[i][1] counterB++

// //return results sum
// costs.sort((a, b) =>  Math.abs(b[0] - b[1]) - Math.abs(a[0] -a[1]));
// let sum = 0
// let counterA = 0
// let counterB= 0
// let cap = costs.length/2

// for(let i = 0; i < costs.length; i++) {
//     let cityA = costs[i][0];
//     let cityB = costs[i][1];

//     if(cityA <= cityB ){
//         if(counterA < cap){
//         sum+= cityA;
//         counterA++;
//         }else {
//          sum+= cityB;
//          counterB++
//         }
//    } else {
//        if(counterB < cap) {
//          sum+= cityB;
//          counterB++
//        } else {
//         sum+= cityA;
//         counterA++;
//        }
//     }
//  }
// return sum;
// }

// //o(log n) - time
// //o(1) - space

// //using heap will not modify input but will add o(n) - space
// //with heap it would be 0(n)

// //to improve , use heap for time but will use more space
// /**

var twoCitySchedCost = function (costs) {
  costs.sort((a, b) => a[0] - a[1] - (b[0] - b[1]));
  let sum = 0;
  for (let i = 0; i < costs.length; i++) {
    if (i < Math.floor(costs.length / 2)) sum += costs[i][0];
    else sum += costs[i][1];
  }
  return sum;
};

//simpler solition
