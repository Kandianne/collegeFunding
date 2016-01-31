var express = require('express');
var router = express.Router();
// var env = require('../env.js');
var nodemailer = require('nodemailer');
// var wellknown = require('nodemailer-wellknown');
// var config = wellknown('Godaddy');



//------------------------------------------HANDLING ERRORS FOR PASS----------------------------------------------
function moduleAvailable(name) {
	try {
		require.resolve(name);
		return true;
	} catch (e) {}
	return false;
}

if (moduleAvailable('../env.js')) {
	var env = require('../env.js');
} else {
	var env = {
		EMAIL_PASS: null,
		EMAIL: null
	};
}

var transporter = nodemailer.createTransport("SMTP", {
	host: 'smtpout.secureserver.net',
    port: 80,
	service: "Godaddy",
	auth: {
		user: process.env.EMAIL || env.EMAIL,
		pass: process.env.EMAIL_PASS || env.EMAIL_PASS
	}
}) ;

//------------------------------------------------------------------------------------------------------------------------
router.post('/', function(req, res){
	console.log(req.body);

	var data = req.body;

	var mailObject = {
		from: data.contactEmail,
		to: 'trevor@collegefundingremedies.com',
		subject: 'Hi Trevor - From ' + data.contactParent + " and " + data.contactStudent,
		html: data.contactMessage 
		+ "<br><br>FROM EMAIL ADDRESS: " + data.contactEmail 
		+ "<br/>STUDENT:" + data.contactStudent
		+ "<br/>PARENT:" + data.contactParent
	};

	transporter.sendMail(mailObject, function(err, info) {
		if(err) {console.log(err, "contactRoutes51")}
			else{console.log('Message sent: ' + info)};
	});
	res.send(data);
})

module.exports = router;