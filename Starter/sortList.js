//Given an array of strings, sort it from smallest to largest word


//Using bubble sort

function sortList(list) {

    for (let j = 0; j < list.length; j++)
    {

        for (let i = 0; i < list.length - 1; i++)
        {   

            if(list[i].length > list[i+1].length)
            {
                let tmp = list[i+1]
                list[i+1] = list[i]
                list[i] = tmp;

            }

        }

    }

    return list;

}


console.log(sortList(['Eye', 'mouse', 'a']))