const path = require('path');
const webpack = require('webpack');
const fs = require('fs');
const minimist = require ('minimist');

const nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });

const argv = minimist(process.argv.slice(2));
const profile = argv['profile'];
let replacements = [];
let distPath = '';
if (profile === 'prod-de') {
    replacements = [
        {search: 'DIST_PROFILE', replace: 'myshp/de/'},
        {search: 'DIST_SERVER_PROFILE', replace: 'myshp-server/de/'}
    ];
    distPath = 'dist/frontendserver-de/';
} else if (profile === 'beta-de') {
    replacements = [
        {search: 'DIST_PROFILE', replace: 'myshpbeta/de/'},
        {search: 'DIST_SERVER_PROFILE', replace: 'myshpbeta-server/de/'}
    ];
    distPath = 'dist/frontendserver-beta-de/';
} else if (profile === 'dev-de') {
    replacements = [
        {search: 'DIST_PROFILE', replace: 'myshpdev/de/'},
        {search: 'DIST_SERVER_PROFILE', replace: 'myshpdev-server/de/'}
    ];
    distPath = 'dist/frontendserver-dev-de/';
} else {
    console.error("unknown profile:", profile);
    process.exit(2);
}

module.exports = {
    entry: {  frontendserverAngular: './src/frontendserver/frontendserverAngular.ts' },
    resolve: { extensions: ['.js', '.ts', '.json'] },
    mode: 'production',
    target: 'node',
    // this makes sure we include node_modules and other 3rd party libraries
    externals: {
        include: /(node_modules|main\..*\.js)/,
        exclude: /(.*redis.*)/
    },
     // nodeModules,
    output: {
        path: path.join(__dirname, distPath),
        filename: 'frontendserverAngular.js'
    },
    module: {
        rules: [
            { test: /\.ts$/, loader: 'ts-loader' },
            { test: /\.ts$/, loader: 'string-replace-loader', query: { multiple: replacements} }
        ]
    },
    plugins: [
        // Temporary Fix for issue: https://github.com/angular/angular/issues/11580
        // for "WARNING Critical dependency: the request of a dependency is an expression"
        new webpack.ContextReplacementPlugin(
            /(.+)?angular(\\|\/)core(.+)?/,
            path.join(__dirname, 'src'), // location of your src
            {} // a map of your routes
        ),
        new webpack.ContextReplacementPlugin(
            /(.+)?express(\\|\/)(.+)?/,
            path.join(__dirname, 'src'),
            {}
        ),
        new webpack.IgnorePlugin(/hiredis/)
    ]
};
