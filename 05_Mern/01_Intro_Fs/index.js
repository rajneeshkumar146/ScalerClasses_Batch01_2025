// fs module is used tp readwrite in files.
const fs = require("fs"); // Library which we need to import.  `import * as fs from 'node:fs'; 


// // readFile will perform its operation in async way. 
// fs.readFile('file.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.log("Error: ", err);
//     } else {
//         console.log("Data in file:", data);
//     }
// });

// Write file.
// const contentToBeWritten = "Hello World!!!!";
// fs.writeFile('example.txt', contentToBeWritten, 'utf-8', (err) =>{
//     if(err){
//         console.log("Error: ", err);
//     }else{
//         console.log("File is created with provided content!!");
//     }
// });

// // Rename a file: first Argu: current file name, second Argu: new name of file.
// fs.rename('example.txt', 'example2.txt', (err) => {
//     if (err) {
//         console.log("Error: ", err);
//     } else {
//         console.log("File name is changed.");
//     }
// });


// // Delete a file from system.
// fs.unlink('example2.txt', (err) => {
//     if (err) {
//         console.log("Error: ", err);
//     } else {
//         console.log("File has been deleted!!");
//     }
// });

// // Stat of a file/package
// fs.stat('dir', (err, stats) => {
//     if (err) {
//         console.log("Error: ", err);
//     } else {
//         console.log("File Size: ", stats.size);
//         console.log("isDirectory: ", stats.isDirectory());
//     }
// });

// Node.js also allows you to watch for changes to files and directories 
// using fs.watch() and fs.watchFile() methods, which can be useful for 
// real-time monitoring of file system changes.

// // Creating a directory
// const directoryName = "my-directory";
// fs.mkdir(directoryName, (err) => {
//     if (err) {
//         console.log("Error: ", err);
//     } else {
//         console.log("Directory has been created!!");
//     }
// });

// // Delting a directory
// fs.rmdir(directoryName, (err) => {
//     if (err) {
//         console.log("Error: ", err);
//     } else {
//         console.log("Directory has been deleted!!");
//     }
// });


// const directoryPath = "./dir2";
// if(fs.existsSync(directoryPath)){
//     console.log("Directory Exist");
// }else{
//     console.log("The Directory does not exist!");
// }

const path = require("path");

// const fullPath = path.join("folder", "subfolder", 'file.txt');
// console.log("Full path of file is: ", fullPath);

// const absolutePath = path.resolve("folder", "subfolder", 'file.txt');
// console.log("Absolute Path of file is: ",absolutePath);

// const fileName = path.basename('./dir/file.txt');
// console.log("BaseName is: ", fileName);

// const dirName = path.dirname('/path/to/file.txt');
// console.log("Directory name: ", dirName);

// const pathInfo = path.parse('/path/to/file.txt');
// console.log("Path Info: ", pathInfo);

// Problem: "/path/to/../file.txt"   -> "/path/file.txt"
// const normalizedPath = path.normalize("/path/to/../file.txt");
// console.log(normalizedPath);

const fs = require("fs");
const sourceFilePath = "./dir/file1.txt";
const destinationFilePath = "./file2.txt";