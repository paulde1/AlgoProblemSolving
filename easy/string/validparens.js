/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let container = {}
    for(let i = 0; i < s.length; i++) {
        let value = s[i];
        if(value in container) {
            container[value]++
        } container[value] = 1
    }
    let set = Object.values(container)
    let sum = 0 
    for(let i = 0; i < set.length; i++){
        sum += set[i]
    }
    return sum % 2 !== 0; 
};