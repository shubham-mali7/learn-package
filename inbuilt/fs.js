// fs stands for file sysytem
// write, read, append, and delete files using fs

let fs = require("fs");
//writeFile
// fs.writeFile(
//   "myfile.txt",
//   "this is my file for nodejs, and now its updated",
//   () => {
//     console.log("File Created");
//   }
// );

// fs.appendFile("myText.txt" ,"This is updated \n", () => {
//   console.log("File Created");
// });

// fs.readFile("myText.txt","utf-8", (err, data) => {
//   if (err) {
//     throw err;
//   } else {
//     console.log(data);
//   }
// });

// fs.readFile("data.json","utf-8", (err, data) => {
//   if (err) {
//     throw err;
//   } else {
//     console.log(data);
//   }
// });

// fs.rename("myCodeupdated.txt", "myCode.txt", (err, data) => {
//   if (err) throw err;
//   console.log("File renamed");
// });

// fs.writeFile("delete.txt", "This is gonna be deleted", () => {
//   console.log("File Created");
// });

// fs.unlink("delete.txt", (err, data) => {
//   console.log("File deleted");
// });

fs.unlink("this is my file.txt", (err, data) => {
  if (err) throw err;
  console.log("File deleted");
});
