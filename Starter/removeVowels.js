//Remove vowels from a given string



function remove(str) {

    let array = Array.from(str)
    

    let filtered = array.filter(checkVowel);

    return filtered.join('');

}

function checkVowel(index)
{
    let vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']

    for (let i = 0; i < vowels.length; i++)
    {

        if (index == vowels[i])
        {
            return false;
        }

    }

    return true;
}

console.log(remove('vowels'))
