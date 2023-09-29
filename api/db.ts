const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');

const Config = require('./config');

const db = initializeApp(Config.firebaseConfig);

module.exports = db; 


// const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
// const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');