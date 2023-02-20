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
  //update table with station name, time
  if ((id, stationName, t)) {
    this.checkInMap[id] = {
      startStation: stationName,
      startTime: t,
    };
  }
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function (id, stationName, t) {
  //create a path from start station to end station
  //create a totaltime from startime to end time (t - start)
  // check to see if the path is already in the checkoutmap
  //if not the path define with 'frequency' = 1 and path 'totalTime' = difference in end and start
  //else increase frequency and increase total time by difference
  let path = `${this.checkInMap[id]["startStation"]}-${stationName}`;
  let checkInTime = this.checkInMap[id]["startTime"];
  if (!this.checkOutMap[path]) {
    this.checkOutMap[path] = {
      frequency: 1,
      totalTime: t - checkInTime,
    };
  } else {
    this.checkOutMap[path]["frequency"]++;
    this.checkOutMap[path]["totalTime"] += t - checkInTime;
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
  //return path total time / path freqeuncy
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
