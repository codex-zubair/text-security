// *given messages
var ch = "ami tumake valo bashi tumi ki amae chino?";
index = 0;
forEncrypt = [];



// *Converting Data into Ascii
for (i of ch) {

    // console.log(i.charCodeAt(index));


    //* Storing ASCII values
    forEncrypt.push(i.charCodeAt(index));

}


// console.log(forEncrypt);




// *Convert into whole array into string.
let forEncryptString = String(forEncrypt);






// * Print out all string value now...
for (asciValue of forEncryptString) {
    console.log()
}




