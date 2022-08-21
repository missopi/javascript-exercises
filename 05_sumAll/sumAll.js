const sumAll = function(value1, value2) {
    let highNum = Math.max(value1, value2);
    let lowNum = Math.min(value1, value2);
    let sum = 0;

    for (let i = lowNum; i <= highNum; i++) { 
        sum += i;
      }

    if (typeof value2 != "number") {
        return 'ERROR'; 
    }
    else if (sum >0) {
        return sum;
    }
    else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;
