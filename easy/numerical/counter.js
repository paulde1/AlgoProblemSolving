const createCounter = function(n) {
    let counter = 0;
    return function() {
        if(counter > 0) {
            n = n +1 
        }
        counter++
        return n;
    };
};