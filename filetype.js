var fs = require("fs");

console.log("Going to open file info!");

// Ensure file exists before checking its stats
if (!fs.existsSync('input.txt')) {
    console.error("File does not exist. Please create 'input.txt' first.");
} else {
    fs.stat('input.txt', function (err, stats) {
        if (err) {
            console.error("Error retrieving file info:", err);
            return;
        }

        console.log(stats);
        console.log("Got file info successfully!");

        console.log("isFile? " + stats.isFile());
        console.log("isDirectory? " + stats.isDirectory());
    });
}
