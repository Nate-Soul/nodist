const path = require('path');

//base file name
console.log(path.basename(__filename));

//directory name
console.log(path.dirname(__filename));

//extension name
console.log(path.extname(__filename));

//create object from path
console.log(path.parse(__filename));

//concatenate paths
console.log(path.join(__dirname, "test", "hello.html"));