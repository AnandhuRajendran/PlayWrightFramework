// scripts/encrypt.js
const CryptoJS = require("crypto-js");

const secretKey = "extra123";  // MUST match .env

const unamePlain = "medicheckslegeruser1620@agentforce.com";
const passwordPlain = "Summer@2020";

console.log("UNAME =", CryptoJS.AES.encrypt(unamePlain, secretKey).toString());
console.log("PASSWORD =", CryptoJS.AES.encrypt(passwordPlain, secretKey).toString());
