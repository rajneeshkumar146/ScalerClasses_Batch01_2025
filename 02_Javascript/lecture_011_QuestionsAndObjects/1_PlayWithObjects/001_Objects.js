// const config = {
//     appName: "scaler.com",
//     database: {
//         host: "127.0.0.1",
//         name: "mainDb",
//         user: "root",
//         pwd: "admin"
//     }
// }

/**
 * mutation/changes we can do on object ->
 * 1. reassign -> const,
 * 2. create a prop -> object.preventExtension
 * 4. remove and create -> Object.seal
 * 3. prevent create , update , delete -> Object.freeze
 * **/

// config = 10;  // this line will throw error. `TypeError: Assignment to constant variable.`
// console.log(config);

// config.tempServer = "127.0.0.18";
// delete config.database.pwd;
// config.appName = "interviewbit.com";
// console.log(config);

/*************Reassignment -> const variable****/
/***const -> only the address of object is freezed but not it's properties**/
// const config = {
//     appName: "scaler.com",
//     database: {
//         host: "127.0.0.1",
//         name: "mainDb",
//         user: "root",
//         pwd: "admin"
//     },
//     extra : 10
// }

// config = 10;
// console.log(config);

/***************************
 * new property should not  be added on the first level -> update and delete
 *
 * -> update is allowed
 * -> Adding a new key-value pair is not allowed.
 * -> Deletion is allowed.

 * **************************/

// let notExtendableObj = Object.preventExtensions(config);
// notExtendableObj.database = Object.preventExtensions(notExtendableObj.database);

// notExtendableObj.tempServer = "127.0.0.18";  // Addition of new key-value pair which is not allowed at first level.
// notExtendableObj.database.tempServer = "127.0.0.18"; // Addition of new key-value pair which is not allowed at first level.
// notExtendableObj.appName = "interviewbit.com";  // This is allowed.
// delete notExtendableObj.extra;  // this is allowed as well.

// console.log(notExtendableObj);


/*******
 * Object.seal ->
 * -> adding and deletion is not allowed.
 * -> updation is allowed.
 * ->  It applied at current level only
 * **/

// const config = {
//     appName: "scaler.com",
//     database: {
//         host: "127.0.0.1",
//         name: "mainDb",
//         user: "root",
//         pwd: "admin"
//     },
//     extra: 10
// }

// let notExtendableObj = Object.seal(config);
// notExtendableObj.database = Object.seal(notExtendableObj.database);

// // notExtendableObj.tempServer = "127.0.0.18";   // this line will skipped.
// // notExtendableObj.database.newpwd = "fake"; // this line will skipped.
// delete notExtendableObj.extra;  // this line will skipped.
// notExtendableObj.appName = "interviewbit.com";  // this line is allowed.

// console.log(notExtendableObj);


/*******
 * Object.freeze -> you cannot update/ delete / add
 * -> Updation, adding and deletion is not allowed.
 * ->  It applied at current level only
 * **/

// const config = {
//     appName: "scaler.com",
//     database: {
//         host: "127.0.0.1",
//         name: "mainDb",
//         user: "root",
//         pwd: "admin"
//     },
//     extra: 10
// }

// let notExtendableObj = Object.freeze(config);
// notExtendableObj.database = Object.freeze(notExtendableObj.database);

// notExtendableObj.tempServer = "127.0.0.18";   // this line will skipped.
// notExtendableObj.database.newpwd = "fake";   // this line will skipped.
// delete notExtendableObj.extra;   // this line will skipped.
// notExtendableObj.appName = "interviewbit.com";   // this line will skipped.


// console.log(notExtendableObj);


// HW : n-level : freeze, seal and preventExtension
// st1
// st2

// Answer: Use recusrion to apply the asked behaviour at all level.
