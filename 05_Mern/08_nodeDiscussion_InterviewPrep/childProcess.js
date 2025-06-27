// Exec: can run any shell command.
const { exec } = require("child_process");

// exec("ls -lh", (error, stdout, stderr) => {
//     if (error) {
//         console.log(`error: ${error.message}`);
//     } else {
//         console.log(`stdout: ${stdout}`);
//         console.log(`stderr: ${stderr}`);
//     }
// });

// const { execFile } = require("child_process");

// // Don't forget to give execute acccess: 'chmod +x script.sh'
// const scriptPath = "./script.sh";
// const args = ["args1_Rajneesh", "Ganesh"];

// execFile(scriptPath, args, (error, stdout, stderr) => {
//     if (error) {
//         console.log(`error: ${error.message}`);
//     } else {
//         console.log(`stdout: ${stdout}`);
//         console.log(`stderr: ${stderr}`);
//     }
// });

// const { spawn } = require("child_process");
// spawn("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", [
//   "https://www.facebook.com",
//   "--incognito",
// ]);