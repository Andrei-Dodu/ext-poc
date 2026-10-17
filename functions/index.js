const functions = require("firebase-functions");
exports.probeFn = functions.https.onRequest((req, res) => res.send("probe"));
