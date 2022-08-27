//Find the smallest number given an array of numbers

let arr = [8, 12, 68, 24, 150, 2]

function findTheSmallest(arr){
    let smallest = arr[0];
    for (let i = 1; i < arr.length; i++){
        if (arr [i] < smallest){
            smallest = arr[i]
        }
    }
    return smallest;
}

console.log(findTheSmallest(arr))
