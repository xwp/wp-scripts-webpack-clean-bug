const path = require( 'path' );
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );

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

module.exports = [ configModern, configLegacy ];
