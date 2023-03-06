/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let numerator =
     {
         I : 1,
         V : 5,
         X : 10,
         L : 50,
         C : 100,
         D : 500, 
         M : 1000
      }
    //   let sum = 0;
    //   for(let i = 0; i < s.length; i++) {
    //       if(numerator[s[i + 1]] > numerator[s[i]]) {
    //           sum += numerator[s[i + 1]] - numerator[s[i]]
    //           i++;
    //       } else {
    //           sum += numerator[s[i]];
    //       }
    //   }
    //   return sum

      return s.split('').reduce((accum, number, index) =>{
          if(numerator[s[index + 1]] > numerator[number] && index < s.length -1){
            accum += numerator[number] * -1
          }else {
            accum += numerator[number]
          }
          return accum;
      }, 0)
};