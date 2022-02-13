//Implement an algorithm to determine if a string has all unique characters.
//What if you cannot use additional data structures?

const isUniqueChars = (str) => {
    // Hashset
    // create an big array w/ ASCII capacity length 
    let hashArr = new Array(128);
    //alternatively, in JS we don't need to set the array length.
    hashArr = [];
    console.log(hashArr);

    for (let i = 0; i < str.length; i++) {
        const val = str.charCodeAt(i);
        console.log(val);
        if (hashArr[val]) {
            return false
        }

        hashArr[val] = true;
    }

    return true;
}


console.log(isUniqueChars("Hola"));
console.log(isUniqueChars("Hhello"));
console.log(isUniqueChars("uncopyrightable"));