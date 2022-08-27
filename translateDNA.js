//This function translates a DNA string into a RNA string

function translateDNA(dna){

    arr = Array.from(dna)

    for (let i = 0; i < arr.length; i++){
        if (arr[i] == "T"){
            arr[i] = "U";
        }
    }
    let rna = arr.join('');
    return rna;

}

console.log(translateDNA("CGAT"));