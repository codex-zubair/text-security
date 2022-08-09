// *Asci values Array
var asciValues = [];
let message = [];










// *--------------------------
// * It will read the database
var fs = require('fs');

fs.readFile('database.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(er);
        return;
    }

    // *--------------------------






    // TODO TSFS...
    // * Decrypt Data function
    function decrypt(key) {
        // console.log(data);

        // * Data making array for reading.
        let validData = data.split(",")


        // *Looping for converting ASCI values.
        for (asci of validData) {
            asciValues.push(asci / key);
        }


        // console.log(asciValues);


        // *Looping For converting the value of ASCI To Later




        for (i of asciValues) {
            message.push(String.fromCharCode(i));

            // console.log(asciValues.fromCharCode(later));
        }



        // * Storing the asci value in array for making string line.


        return message;





    }





    // * decrypt system .
    // TODO calling the Function
    decryptResult = decrypt(123456789);






    // * Removed the Comma from text.
    console.log(decryptResult.join(""));







});



