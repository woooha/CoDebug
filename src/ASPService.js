var Service = require("Service")
var Log = require("Log")
var path = require("path")
var process = require("process")
var child_process = require("child_process")

var ASPService = function(path) {
	this.path = path.resolve(path)
}

ASPService.fn = ASPService.prototype

ASPService.prototype = new Service()

ASPService.fn.start = function() {
	child_process.exec("./bin/asp &", {
		cwd : this.path
	}, function(err, stdout, stderr) {
	})
}

ASPService.fn.stop = function() {
	child_process.exec("pkill -9 asp", {
		cwd : this.path
	}, function(err, stdout, stderr) {
	})
}

//ASPService.fn.logs.access = new Log()