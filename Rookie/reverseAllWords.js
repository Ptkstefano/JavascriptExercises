//This function reverses the order of words in a given string

function reverseAllWords(str){

    //Creates array of individual words in string
    arr = str.split(' ')

    let reversedString = '';

    for (let i = arr.length - 1; i >= 0; i--){
        reversedString += arr[i];
        reversedString += " ";
    }

    return reversedString;

}

console.log(reverseAllWords("The quick brown fox jumps over the lazy dog"))