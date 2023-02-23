const Leaderboard = function () {
  //create leaderboard obj
  this.leaderboard = {};
};

/**
 * @param {number} playerId
 * @param {number} score
 * @return {void}
 */
Leaderboard.prototype.addScore = function (playerId, score) {
  //if this.leaderboard at player id is defined already then interate by score
  //otherwise this.leaderboard at player id is = score
  if (!this.leaderboard[playerId]) {
    this.leaderboard[playerId] = score;
  } else {
    this.leaderboard[playerId] += score;
  }
};

/**
 * @param {number} K
 * @return {number}
 */
Leaderboard.prototype.top = function (K) {
  //take the entries from leaderboard and sort them by b[1]- a[1];
  //slice the sorted entries from 0 to k and reduce it with 0 as the accum, accum = accum += current[1]
  let orderedScores = Object.entries(this.leaderboard).sort(
    (a, b) => b[1] - a[1]
  );
  return orderedScores.slice(0, K).reduce((accum, current) => {
    accum += current[1];
    return accum;
  }, 0);
};

/**
 * @param {number} playerId
 * @return {void}
 */
Leaderboard.prototype.reset = function (playerId) {
  //set player to 0 in leaderboard
  this.leaderboard[playerId] = 0;
};

/**
 * Your Leaderboard object will be instantiated and called as such:
 * var obj = new Leaderboard()
 * obj.addScore(playerId,score)
 * var param_2 = obj.top(K)
 * obj.reset(playerId)
 */
