// This function modifies a string so that a P is placed ahead of every word

function translate(str){

    let arr = str.split(' ');
    let newStr = "";

    for (let i = 0; i < arr.length; i++){
        word = Array.from(arr[i])
        word.unshift("P")
        newStr += word.join('') + " ";
    }

    return(newStr)



}

console.log(translate("The quick brown fox jumps over the lazy dog"))