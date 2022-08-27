
//This functions gets the initials from a person name
//Example - Elvis Presley returns EP

function getInitials(name){

    let initials = "";
    initials = name.charAt(0)

    for (let i = 0; i < name.length; i++){
        if (name.charAt(i) == " "){
            initials += "."
            initials += name.charAt(i+1);
        }
    }
    return initials;
}

console.log(getInitials("Elvis Presley"));
