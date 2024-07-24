
// let arr = [2,4,6,8,9,12,15,20];
// console.log(arr[0]);
// let result;
// result = arr.filter((item)=>{
//    return item>10;
// })

// console.log(result);

// how to create file 

// const fs = require('fs');
// fs.writeFileSync("new_file1.txt"," helllo pankaj");



// console.log("-->",__dirname);
// console.log("--->",__filename);
// console.log(20+50);


// Server building and APi making
/*
const http = require("http");
const api_data = require("./api_data");
http.createServer((req,resp)=>{
resp.writeHead(200,{'Content-Type':'application\json'});
resp.write(JSON.stringify(api_data));
resp.end();
}).listen(2000);
*/


// file creation 
/*
const fs = require('fs');
const input  = process.argv;
if(input[2]=='add'){
    fs.writeFileSync(input[3],input[4]);
}
else if(input[2]== 'remove'){
    fs.unlinkSync(input[3]);
}
else{
    console.log("invalid input");
}
*/


// loop file creation 

