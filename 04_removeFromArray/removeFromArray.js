const removeFromArray = function(array, value, value2, value3, value4) {
    let i = array.length - 1;
    while (i >= 0) {
 	    if ([value, value2, value3, value4].indexOf(array[i]) > (-1)) {
    	    array.splice(i, 1);
  	    }
  	    i -= 1;
    }
    return array;
};


// Do not edit below this line
module.exports = removeFromArray;
