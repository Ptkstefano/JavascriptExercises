//This function counts vowels in a given string

function countVowels(str){

    let arr = Array.from(str);
    const vowels = ["a", "e", "i", "o" , "u", "A", "E", "I", "O", "U"];
    let count = 0;

    for (let i = 0; i < arr.length; i++)
    {
        if (vowels.includes(arr[i])){
            count++;
        }
    }  

    return count;

}

console.log(countVowels("Hello World"));