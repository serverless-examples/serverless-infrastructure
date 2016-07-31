'use strict';


module.exports.hello = (event, context, cb) => cb(null,
  { message: 'Go Serverless v0.5! Your function executed successfully!', event }
);
