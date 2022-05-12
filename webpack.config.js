const path = require('path');
const options = require('unplugin-vue-define-options/webpack');

module.exports = {
    plugins: [options()],
    resolve: {
        alias: {
            '@': path.resolve('resources/js'),
        },
    },
};
