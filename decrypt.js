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


    console.log(forEncryptString);






    // // * Print out all string value now...
    // for (asciValue of forEncryptString) {

    //     // * Convert into number
    //     stringIntoNumber = parseInt(asciValue);
    //     console.log(stringIntoNumber);







    // }





}




encrypt(23423, "ami aj tumar sathe dekha korte parbona sorry.");