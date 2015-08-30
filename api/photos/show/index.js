/**
 * API: Users: Show
 */

// Dependencies
var MiddlewareIncoming = require('jaws-lib').middleware.Incoming;

// Function
exports.handler = function(event, context) {
	return context.succeed("Everything dandy!");
    // Process Incoming Request
//    MiddlewareIncoming.process(event, context, function(event, context) {

        /**
         * Return
         */

 //       return context.succeed(event.req.user);

   // });
};
