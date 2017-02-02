module.exports = function() {
	var cron = require('cron');
	console.log("cron start every 30 sec");
	var cronJob = cron.job("*/30 * * * * *", function(){
		require('./feedparser')();
	});
	cronJob.start();
}
