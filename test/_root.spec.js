"use strict";

var app = require("../server"); // without this cannot find mongoose model schema server
var async = require("async");
// var mongoose = require("mongoose");
// var User = mongoose.model("User");

// before(function(done) {
// 	async.parallel([
// 		function(cb) {
// 			User.collection.remove(cb);
// 		}
// 	], function(res) {
// 		done();
// 	})
// })
