const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.runAtMidnight = functions.pubsub
.schedule('0 0 * * *')
	.timeZone('Europe/Berlin')
	.onRun((context) => {
		console.log('Hello World run')
	}
)