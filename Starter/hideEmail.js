//Given an e-mail in a string, return the string as 'j********@*******m'

function hideEmail(email){


    let array = Array.from(email);
    let atIndex = 0;

    for(let i = 0; i < array.length; i++)
    {
        if (array[i] == '@')
        {
            atIndex = i;
        }

        if (i != 0 && i != atIndex && i != (array.length - 1))
        {
            array[i] = '*';
        }

    }

    return array.join('');

}

console.log(hideEmail('johndoe@gmail.com'))