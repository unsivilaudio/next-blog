const {
    PHASE_DEVELOPMENT_SERVER,
    PHASE_PRODUCTION_BUILD,
    PHASE_EXPORT,
} = require('next/constants');

module.exports = (phase, { defaultConfig }) => {
    let MONGO_URI = 'mongodb://localhost:27017/';
    let MONGO_DBNAME = 'bloggr_dev';

    switch (phase) {
        case PHASE_EXPORT:
            MONGO_DBNAME = 'bloggr';
            break;
        case PHASE_PRODUCTION_BUILD:
        case PHASE_DEVELOPMENT_SERVER:
        default:
            break;
    }

    return {
        reactStrictMode: true,
        env: {
            MONGO_URI,
            MONGO_DBNAME,
        },
        webpack(config) {
            config.module.rules.push({
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                use: ['@svgr/webpack'],
            });

            return config;
        },
    };
};
