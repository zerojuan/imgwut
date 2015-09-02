/**
 * API: Users: Show
 */

// Dependencies
var MiddlewareIncoming = require('jaws-lib').middleware.Incoming;
var S3 = require('jaws-lib').models.AWS.S3;

// Function
exports.handler = function(event, context) {

  // Process Incoming Request


  // MiddlewareIncoming.process(event, context, function(event, context) {
      var params = {Bucket: 'imgwut', Key: 'images'};
      S3.getSignedUrl('putObject', params, function(err, url){
        return context.succeed(url);
      });
  // });
};
