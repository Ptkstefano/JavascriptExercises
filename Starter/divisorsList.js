//Return all divisors of a given int

function divisors(n){

    let divisors = [];

    for (let i = 0; i <= n; i++){

        if(n%i == 0)
        {
            divisors.push(i)
        }

    }

    return divisors;

}

console.log(divisors(8));