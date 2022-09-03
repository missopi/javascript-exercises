const reverseString = function(string) {
    let newString = string.split('').reverse().join('');
    return newString;
};

reverseString('hello');
reverseString('helle there');
reverseString('123! abc!');
reverseString('');

// Do not edit below this line
module.exports = reverseString;
