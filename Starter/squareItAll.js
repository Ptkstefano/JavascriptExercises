//Given an integer, return the concatenation of the result of the square of each digit

function squareItAll(n) {

    let nString = n.toString();
    let stringArray = Array.from(nString)
    let newArray = []


    for(let i = 0; i < stringArray.length; i++)
    {
        let digit = parseInt(stringArray[i]);
        let squared = Math.pow(digit, 2);
        newArray[i] = squared.toString();
    }

    
    return newArray.join('');


}

console.log(squareItAll(428))