//require('dotenv').config(); 
//console.log(process.env.secretkey);   // MUST লাগবে

const newman = require('newman');

newman.run({
    collection: `https://api.postman.com/collections/38568115-7b9b1aab-9951-4fda-b5b3-d33a3a6b2ed8?access_key=${process.env.secretKey}`,

    reporters: ['htmlextra'],
    iterationCount: 1,

    reporter: {
        htmlextra: {
            export: './Reports/report.html',
        }
    }

}, function (err) {
    if (err) { throw err; }
    console.log('Collection run complete');
});