//This function get's the average value in a list of numbers

numbers = [1, 2, 3, 4, 5]

function getAverage(arr){

    sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum / arr.length;
}

console.log(getAverage(numbers));