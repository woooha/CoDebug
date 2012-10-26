var fs = require("fs")
var path = require("path")

var Log = function(path) {
	this._fd = null
	this._path = path.resolve(path)
	var self = this
	this._opening = true
	fs.open(this._path, "a+", function(err, fd){
		self._fd = fd
		this._opening = false
	})
}

Log.fn = Log.prototype

Log.fn.clear = function() {
	//清空日志
	var self = this
	if( this._fd ){
		fs.truncate(this._fd, 0, function(){})	
	} else if( this._opening ){
		setTimeout(function(){
			self.clear()
		},100)
	}
}

Log.fn.read = function() {

}

Log.fn.listen = function() {
	fs.watch(this._path, function(event, filename){
	
	})
}

module.exports = Log