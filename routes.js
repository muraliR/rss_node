module.exports = function(app, express) {

    var baseRouter = express.Router();
    app.use('/api/v1', baseRouter);

    var articles = require('./controllers/articles');

    baseRouter.route('/articles')
        .get(articles.all);
    baseRouter.route('/articles/:id')
        .get(articles.get);
    baseRouter.route('/search')
        .get(articles.search);
}