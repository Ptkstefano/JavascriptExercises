//This function returns the length of the shortest word in a string

function findShortest(str){

    let arr = str.split(' ');
     let shortest = 100;

    for (let i = 0; i < arr.length; i++){
        if (arr[i].length < shortest){
            shortest = arr[i].length;
        }

    }

    return shortest;

}

console.log(findShortest("The quick brown fox jumps over the lazy dog"))