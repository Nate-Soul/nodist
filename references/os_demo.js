const os = require('os');


//Platform
console.log(os.platform());

//CPU Architecture
console.log(os.arch());

//CPU Core Info
//console.log(os.cpus());


//CPU Free & Total Memory
console.log(os.freemem());
console.log(os.totalmem());

//Home directory
console.log(os.homedir());

//Uptime
console.log(os.uptime());