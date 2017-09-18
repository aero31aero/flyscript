var concat = require('concat-stream')
var data = null;
var concatStream = concat(function(chunk) {
    // console.log("Data:", chunk);
    data = chunk;
    // replmode();
})

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.pipe(concatStream)
var repl = require("repl");

process.stdin.on("end", function(){
	// console.log("Ended");
	// console.log(data);
	// data = data.replace("\n","");
	// data = data.toString()
	// console.log(data,"x");
	// var done = console.log;
	var done = function(log){
		// console.log(log);
		process.stdout.write(log);
	}
	eval(process.argv[2]);
})

process.stdin.on("close", function(){
	// console.log("Closed");
})



// var command = process.argv[2];
// console.log(command);

// var replmode = function(data) {
// 	var replServer = repl.start({
// 	    prompt: "flyscript > ",
// 	});
// 	// console.log("Started REPL");
//     replServer.context.exit = process.exit;
//     replServer.context.data = data;
//     console.log("DATA GOT", data);
// };
// replmode()