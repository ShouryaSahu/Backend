const fs = require('node:fs');

// We need to study 
// writeFile
// appendFile
// copyFile
// rename
// unlink
// rmdir (remove directory) in this directory must be empty as it remove folder so folder should be empty


// fs.writeFile("hey.txt", "Hey hello kaise ho!!", function(err){
//     if(err) console.error(err);
//     else console.log("Done");
// })


// fs.appendFile("hey.txt", "I use node to append in text file", function(err){
//     if(err) console.error(err);
//     else console.log("Done");
// })

// fs.rename("hey.txt", "renamed.txt", function(err){
//     if(err) console.error(err);
//     else console.log("Done");
// })

// fs.copyFile("renamed.txt", "./copy/copy.txt", function(err){
//     if(err) console.error(err);
//     else console.log("Done");
// })
// fs.copyFile("renamed.txt", "./new.txt", function(err){
//     if(err) console.error(err);
//     else console.log("Done");
// })


// fs.unlink("new.txt", function(err){
//     if(err) console.error(err);
//     else console.log("removed");
// })

// fs.rmdir("./copy", function(err){ 
//     // this give error as directory is not empty 
//     if(err) console.error(err);
//     else console.log("removed");
// })

// so to properly remove directory we have to give option which is an object (recursive)
// fs.rmdir("./copy",{recursive: true} , function(err){ 
//     // we alse use fs.rm()
//     if(err) console.error(err);
//     else console.log("removed");
// })

fs.readFile("renamed.txt", 'utf8' , function(err, data){
    if(err) console.error(err);
    else console.log(data);  
})