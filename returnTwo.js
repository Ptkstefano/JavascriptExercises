//This function returns an array with the smallest number in [0] and largest number of an array in [1]

function returnTwo(arr){

    let smallest = arr[0];
    let largest = arr[0];

    for (let i = 0; i < arr.length; i++){
        if (arr[i] < smallest){
            smallest = arr[i];
        }
        if (arr[i] > largest){
            largest = arr[i];
        }

    }
    return numbers = [smallest, largest];
}

let arr = [2, 6, 8, 40, 640]
console.log(returnTwo(arr))