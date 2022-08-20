const removeFromArray = function(array, value, value2) {
    let i = array.length - 1;
    while (i >= 0) {
 	    if ([value, value2].indexOf(array[i]) > (-1)) {
    	    array.splice(i, 1);
  	    }
  	    i -= 1;
    }
    return array;
};


// Do not edit below this line
module.exports = removeFromArray;
