module.exports = function(app, express) {

    var baseRouter = express.Router();
    var rootPath = express.Router();
    app.use("/", rootPath);
    app.use('/api/v1', baseRouter);

    var articles = require('./controllers/articles');

    rootPath.route('/')
    	.get(articles.welcome);
    baseRouter.route('/')
        .get(articles.welcome);
    baseRouter.route('/articles')
        .get(articles.all);
    baseRouter.route('/articles/:id')
        .get(articles.get);
    baseRouter.route('/search')
        .get(articles.search);
}