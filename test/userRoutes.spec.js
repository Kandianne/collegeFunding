"use strict";

// var should = require("should"); //our modules that we npm installed should, supertest, and mocha
// var request = require("supertest");
// var app = require("../server");


// describe("Contact Routes", function() {
// 	describe("Contact form", function() {
// 		it("Should return a status code of 200", function(done) { //For you to know what you're testing
// 			request(app)
// 				.post("/api/contact-form") //make post call on this route
// 				.expect(200) //expect 200. If this suceeds you pass the test
// 				.end(done)
// 		})
// 		it("Should return a status of sent message", function(done) {
// 			var email = {
// 				contactEmail : "email@email",
// 				contactMessage : "this is a message",
// 				contactStudent : "contactStudent",
// 				contactParent : "contactParent"
// 			};
// 			request(app)
// 				.post("/api/contact-form")
// 				.expect(200)
// 				.end(done);
// 		})
// 	});
// 	describe("contact-form", function() {

// 	});
// })