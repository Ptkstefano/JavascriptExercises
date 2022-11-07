//Given an array of integers, remove duplicates

function removeDups(list){

    for (let i = 0; i < list.length; i++)
    {
        for (let j = 0; j < i; j++)
        {
            if (list[i] == list[j])
            {
                //remove list [i]
                list.splice(i, 1);
                i = 0;
                break;
            }
        }
    }

    console.log(list)

}

removeDups([1,2,3,4,4,5,5,5,9,9])