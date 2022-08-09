
function encrypt(key, message) {



    // *given messages
    ch = message;
    index = 0;
    forEncrypt = [];
    encryptedValueAre = [];



    // *Converting Data into Ascii
    for (i of ch) {

        // console.log(i.charCodeAt(index));


        //* Storing ASCII values
        forEncrypt.push(i.charCodeAt(index));

    }


    // console.log(forEncrypt);


    //*Changed Asci Value with Encrypted key...
    for (encryptedValue of forEncrypt) {
        encryptedValueAre.push(encryptedValue * key);
    }



    // *Convert into whole array into string.
    let forEncryptString = String(encryptedValueAre);




    return forEncryptString;


}








// TODO Calling the function.
var messages = encrypt(123456789, "data sending of user");











// TODO data Writing system.

const fs = require('fs')

fs.writeFile('database.txt', messages, err => {
    if (err) {
        console.err;
        return;
    }

});




