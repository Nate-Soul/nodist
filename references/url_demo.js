const url = require('url');

const myUrl =  new URL("http://mywebsite.com/gallery.html?item=100&status=active");


//serialized url
console.log(myUrl.href)
console.log(myUrl.toString());

//get website host
console.log(myUrl.host);

//get host name (excludes port)
console.log(myUrl.hostname);

//Pathname
console.log(myUrl.pathname);

//search & search params
console.log(myUrl.search);
console.log(myUrl.searchParams);

//add params
myUrl.searchParams.append("abc", "123");
myUrl.searchParams.forEach((value, name) => {
    console.log(`${name}: ${value}`);
});