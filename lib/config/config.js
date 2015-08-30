/**
 * JAWS App: Config
 */

// Require ENV variables
require('dotenv').config({
    path: process.cwd() + '/node_modules/jaws-lib/.env'
});


/**
 * Configurations
 */

module.exports = {

    // AWS
    aws: {
        admin_access_key: process.env.AWS_ADMIN_ACCESS_KEY,
        admin_secret_access_key: process.env.AWS_ADMIN_SECRET_ACCESS_KEY,
        aws_region: process.env.AWS_LAMBDA_REGIONS.split(',')[0]
    },

    // JSON Web Token
    jwt: {
        expires_in_seconds: 604800, // 1 week = 604800
        issuer: process.env.JWT_ISSUER,
        secret: process.env.JWT_SECRET
    }

};