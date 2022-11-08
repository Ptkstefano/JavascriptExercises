// Given a list of words, return a list in the same order with just the initials of each word

function firstChar(list){

    let firstChar = [];

    for (let i = 0; i < list.length; i++)
    {
        word = Array.from(list[i]);
        firstChar.push(word[0]);

    }

    return firstChar;



}

console.log(firstChar(['eye', 'mouse', 'key']))