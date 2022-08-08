// *Asci values Array
var asciValues = [];
let message = [];



// * It will read the database
var fs = require('fs');

fs.readFile('database.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(er);
        return;
    }


// * Decrypt Data function
    function decrypt(key)
    {
        // console.log(data);

        // * Data making array for reading.
        let validData =  data.split(",")


        // *Looping for converting ASCI values.
        for(asci of validData)
        {
            asciValues.push(asci/key);
        }


        console.log(asciValues);


        // *Looping For converting the value of ASCI To Later

        console.log(asciValues[0]);
        
        
        for (i of asciValues)
        {
            message.push(String.fromCharCode(i));   
            
            // console.log(asciValues.fromCharCode(later));
        }



        // * Storing the asci value in array for making string line.


        return message;


        

        
    }


    console.log(decrypt(23423));
    





});












// function encrypt(key, message) {



//     // *given messages



//     // *Converting Data into Ascii
//     for (i of ch) {

//         // console.log(i.charCodeAt(index));


//         //* Storing ASCII values
//         forEncrypt.push(i.charCodeAt(index));

//     }


//     // console.log(forEncrypt);


  









//     // *Convert into whole array into string.
//     let forEncryptString = String(encryptedValueAre);


//     console.log(forEncryptString);


//     return forEncryptString;


// }











// var messages = encrypt(23423, "ami aj tumar sathe dekha korte parbona sorry.");



// const fs = require('fs')

// fs.writeFile('database.txt', messages, err => {
//     if (err) {
//         console.err;
//         return;
//     }

// });