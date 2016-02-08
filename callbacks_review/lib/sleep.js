function sleep(seconds, callback){
	var millseconds = seconds * 1000;
	setTimeout(callback, millseconds);
}

module.exports = sleep