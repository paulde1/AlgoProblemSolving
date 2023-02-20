const UndergroundSystem = function () {
  // table to keep customerid and  check in time
  // table to keep track of station checkout time
  this.checkInMap = {};
  this.checkOutMap = {};
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function (id, stationName, t) {
  //update table with station name, time by id
  this.checkInMap[id] = {
    startStation: stationName,
    startTime: t,
  };
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function (id, stationName, t) {
  //create a path from start station to end station
  //create a startime variable by from checkin
  // check to see if the path is already in the checkout
  //if not the path define with 'frequency' = 1 and path 'totalTime' = difference in end and start
  //else increase frequency and increase total time by difference
  const path = `${this.checkInMap[id]["startStation"]}-${stationName}`;
  const startTime = this.checkInMap[id]["startTime"];
  if (!this.checkOutMap[path]) {
    this.checkOutMap[path] = {
      frequency: 1,
      totalTime: t - startTime,
    };
  } else {
    this.checkOutMap[path]["frequency"]++;
    this.checkOutMap[path]["totalTime"] += t - startTime;
  }
};

/**
 * @param {string} startStation
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function (
  startStation,
  endStation
) {
  //set a path using arguments
  //return path total time / path freqeuncy (from checkOutMap obj)
  let path = `${startStation}-${endStation}`;
  return (
    this.checkOutMap[path]["totalTime"] / this.checkOutMap[path]["frequency"]
  );
};

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */
// using class constructor and reducer
class UndergroundSystem {
  constructor() {
    this.idMap = new Map();
    this.durationMap = new Map();
  }
  checkIn(id, stationName, t) {
    this.idMap.set(id, { stationName, checkInTime: t });
  }
  checkOut(id, stationName, t) {
    const startStation = this.idMap.get(id);
    const stationRoute = `${startStation.stationName}, ${stationName}`;
    const duration = t - startStation.checkInTime;
    if (this.durationMap.has(stationRoute)) {
      this.durationMap.get(stationRoute).push(duration);
    } else {
      this.durationMap.set(stationRoute, [duration]);
    }
  }
  getAverageTime(startStation, endStation) {
    const durationList = this.durationMap.get(`${startStation}, ${endStation}`);
    return durationList.reduce((a, b) => a + b) / durationList.length;
  }
}
