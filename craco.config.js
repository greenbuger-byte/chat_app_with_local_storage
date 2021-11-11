const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@qex': path.resolve(__dirname, 'src/'),
            '@utils': path.resolve(__dirname, 'src/utils'),
        },
    },
};
