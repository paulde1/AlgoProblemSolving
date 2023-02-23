const RandomizedSet = function () {
  //use array and map
  this.list = [];
  this.map = new Map();
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  //before implementation of insert check map if value = key(map.has(key)) if so return false
  //if not in map, push value into array ,  store the value as a key in map value : this.list.length
  //return true
  if (this.map.has(val)) return false;
  this.list.push(val);
  this.map.set(val, this.list.length);
  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  //first check if the value is in map if false return false(map.has(value)
  //if not , get index of value (this.map.get(value)
  //write swap function(index,this.length - 1){
  //   sets temp at list[index]
  //   sets list[index] = list[list.length - 1]
  //   sets list[list.length-1] = temp
  // }
  // call swap function on index
  //pop list
  //set map[list[index]],index]
  //delete value from map
  //return true
  if (!this.map.has(val)) return false;
  let index = this.map.get(val);
  const swap = (index) => {
    let temp = this.list[index];
    this.list[index] = this.list[this.list.length - 1];
    this.list[this.list.length - 1] = temp;
  };
  swap(index);
  this.list.pop();
  this.map.set(this.list[index], index);
  this.map.delete(val);
  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  //return list[math.floor(Math.random() * list.length]
  return this.list[Math.floor(Math.random() * this.list.length)];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
