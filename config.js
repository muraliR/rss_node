var config = {
    development: {

        //mongodb connection settings

        database: {
            name:   'rss_dev',
            host:   'localhost',
            port:   '27017'
        },

        //server details

        server: {
            host: 'localhost',
            port: '3000'
        }
    },

    production: {

        //mongodb connection settings

        database: {
            name: 'rss_prod',
            host: 'localhost',
            port: '27017'
        },

        //server details

        server: {
            host:   'localhost',
            port:   '3001'
        }
    },

    test: {

        //mongodb connection settings

        database: {
            name: 'rss_test',
            host: 'localhost',
            port: '27017'
        },

        //server details

        server: {
            host:   'localhost',
            port:   '3002'
        }
    }
};

module.exports = config;
