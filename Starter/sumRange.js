//Sums the first n elements of the number list

function sumRange(list, n){

    let sum = 0;

    for (let i = 0; i < n; i++)
    {
        sum += list[i];
    }

    return sum;

}

console.log(sumRange([1,2,3], 2))