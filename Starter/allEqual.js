// Returns true when all elements in a list are of the same value

function allEqual(list) {

    let i = 1;

    while(true)
    {
        if(i == list.length)
        {
            return true;
        }

        if (list[i-1] === list[i])
        {
            i++
            continue
        }
        else
        {
            return false;
        }

    }

}

console.log(allEqual([1, 1]))