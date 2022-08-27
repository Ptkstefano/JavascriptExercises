//This function removes first and last characters from given text
//"Hello world" returns "ello worl"

function removeChars(str){

    //turns string into array of chars
    arr = Array.from(str)
    arr.pop()
    arr.shift()
    let newStr = arr.join('');
    return newStr;

}

console.log(removeChars("Hello world"));