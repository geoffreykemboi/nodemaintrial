var fs = require("fs");

// Asynchronous read
fs.readFile('input.txt', 'utf8', function (err, data) {
   if (err) {
      console.error("Error reading file asynchronously:", err);
      return;
   }
   console.log("Asynchronous read: " + data);
});

// Synchronous read
try {
   var data = fs.readFileSync('input.txt', 'utf8');
   console.log("Synchronous read: " + data);
} catch (err) {
   console.error("Error reading file synchronously:", err);
}

console.log("Program Ended");
