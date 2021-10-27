const path = require( 'path' );
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const { CleanWebpackPlugin } = require( 'clean-webpack-plugin' );

// Patch the default WP config to prevent removing the "stale" assets.
defaultConfig.plugins[0] = new CleanWebpackPlugin( {
    cleanAfterEveryBuildPatterns: [ '!fonts/**', '!images/**' ],
    // Prevent it from deleting webpack assets during builds that have
    // multiple configurations returned in the webpack config.
    cleanStaleWebpackAssets: false,
} );

const configModern = {
    ...defaultConfig,
    entry: {
        modern: path.join( __dirname, 'js/src/modern.js' ),
    },
    output: {
        path: path.join( __dirname, 'js/dist/modern' ),
    },
};

const configLegacy = {
    ...defaultConfig,
    entry: {
        legacy: path.join( __dirname, 'js/src/legacy.js' ),
    },
    output: {
        path: path.join( __dirname, 'js/dist/legacy' ),
    },
}

module.exports = [ configLegacy, configModern ];
