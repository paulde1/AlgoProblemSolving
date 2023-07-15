/**
 * @param {number[][]} intervals
 * @return {number}
 */
const minMeetingRooms = function (intervals) {
  // O(nlogn) time | O(n) space
  //sort the input by index 0 ( a[0] - b[0])
  //create a new MinPriorityQueue as a variable
  //define starting rooms
  // loop through intervals
  // grtab the value of each interval
  //if minPriorityQueue.size is not defined increment rooms needed
  //otherwise grab queues front.element( queue.front().element)
  // check if front is less or equal to first element in interval, if so queue.deque()
  // else increment rooms

  //queue.enqueue(interval[1])

  //return the rooms needed
  intervals.sort((a, b) => a[0] - b[0]);
  let queue = new MinPriorityQueue();
  let rooms = 0;
  for (let i = 0; i < intervals.length; i++) {
    let interval = intervals[i];
    if (!queue.size()) rooms++;
    else {
      const top = queue.front().element;
      if (top <= interval[0]) queue.dequeue();
      else rooms++;
    }
    queue.enqueue(interval[1]);
  }
  return rooms;
};
