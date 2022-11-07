//This function changes the vowels in a string so that they represent their respective number in the vowel order

function swapVowels(word) {

    array = Array.from(word)

    for(let i = 0; i<array.length; i++)
    {

        switch (array[i])
        {
            case 'a':
                array[i] = 1;
                break;
            case 'e':
                array[i] = 2;
                break;
            case 'i':
                array[i] = 3;
                break;
            case 'o':
                array[i] = 4;
                break;
            case 'u':
                array[i] = 5;
                break;
            default:
                continue;
        }
    }

    let swappedWord = array.join('');

    return swappedWord;

}

console.log(swapVowels('Orangotango'));

