//System Module
/* const color = require("cli-color");
console.log(color.red("Suyog"));
console.log(color.black("Chaitali")); */

//Local Module
/* const auth = require("./Auth");

auth.register("Suyog");
auth.login("Chaitali"); */

//Core Module

const path = require("path");

//dirname- It will give path of directory
// console.log("Filename:", path.dirname(__dirname));

//basename - It will give filename
//console.log("Basename:", path.basename(__filename));

//extname - It will return extention of path
//console.log("Extention:", path.extname(__filename));

//Parse- It will return formate of file
// console.log("Format:", path.parse(__filename));

//Join - It will return absolute path of file
// console.log("Join", path.join(__dirname, "order", "app.js"));

//File system

const fs = require("fs");

//Make Directory
/* fs.mkdir(path.join(__dirname, "/test"), (err) => {
  if (err) {
    console.log("Something went wrong...:" + err);
    return;
  }
  console.log("Folder Created");
});
 */

//Create File
/* fs.writeFile(
  path.join(__dirname, "test", "test.txt"),
  "Hello NodeJs File Created",
  (err) => {
    if (err) {
      console.log("Something went wrong:" + err);
      return;
    }
    fs.appendFile(
      path.join(__dirname, "test", "test.txt"),
      "more data appended",
      (err) => {
        if (err) {
          throw err;
        }

        console.log("Data added");
      }
    );
    console.log("File created");
  }
);
 */

//Read File

/* fs.readFile(path.join(__dirname, "test", "test.txt"), (err, data) => {
  if (err) {
    throw err;
  }
  const content = Buffer.from(data);
  console.log(content.toString());
}); */

//second method of data reading

/* fs.readFile(path.join(__dirname, "test", "test.txt"), "utf-8", (err, data) => {
  if (err) {
    throw err;
  }

  console.log(data);
});
 */

//OS module

const os = require("os");

// console.log("OS type:", os.type());
// console.log("Platform:", os.platform());

// console.log("CPU archituecture", os.arch());
// console.log("CPU Details", os.cpus());

// console.log("Free memory", os.freemem());
// console.log("Total memory", os.totalmem());
// console.log("Total Uptime", os.uptime());

//Event Module
