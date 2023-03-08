const logger = require ('../utils/logger');


/**
 * Prevents the app from hanging when an error occurs.
 * @returns {function}
 */
function preventCrash() {
    process.on('uncaughtException', (err, origin) => {
        logger(`Caught exception: ${err}\n` + `Exception origin: ${origin}`, 'error');
      });
    
    process.on('unhandledRejection', (reason, promise) => {
        logger('Unhandled Rejection at:' + {...promise} + '\nReason:' + reason, 'error');
    });
}
module.exports = preventCrash();