module.exports = function() {

	var FeedParser = require('feedparser');
	var request = require('request');
	const scrapeIt = require("scrape-it");
	var Article = require('./model/article').Article;

	var req = request('http://feeds.feedburner.com/ndtvnews-latest?format=xml')
	var feedparser = new FeedParser([false]);

	req.on('error', function (error) {
		console.log(error);
	});

	req.on('response', function (res) {
		var stream = this;

		if (res.statusCode !== 200) {
			this.emit('error', new Error('Bad status code'));
		}
		else {
			stream.pipe(feedparser);
		}
	});

	feedparser.on('error', function (error) {
		console.log(error);
	});

	feedparser.on('readable', function () {
		var stream = this;
		var meta = this.meta;
		var item;

		while (item = stream.read()) {
			var link = item.link;

			scrapeIt(item.link, {
				title: ".ins_headline h1",
				auid: {
					selector: "iframe#ndtvSocialCommentForm",
					attr: "src",
					convert: function(value) {
						if (value) {
							return value.split('identifier=story-news-')[1].split('&enableComments')[0];
						}
						return '';
					}
				},
				description: ".ins_mainimg_caption",
				contentText: ".ins_storybody",
				publishedAt: {
					selector: "span[itemprop=dateModified]",
					attr: "content"
				},
				author: "span[itemprop=author]",
				mainImage: {
					selector: "img[id=story_image_main]",
					attr: "src"
				}
			}).then(article => {
				console.log(article);
				if (article.auid){
					Article.create(article, function(err, result) {
				        if (!err) {
				            console.log(result);
				        } else {
				            console.log(err);
				        }
				    });
				}
			});
		}
	});
}
