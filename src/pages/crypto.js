require("dotenv").config();
const CryptoJS = require("crypto-js");

const secretKey = process.env.SECRET_KEY;
  
//Encrypting the Username and Password
// function encryptCredentials(text)

// {
// return CryptoJS.AES.encrypt(text, secretKey).toString();
// } Removing encryption as we are using encrypted values in .env file

//Decrypting the Username and Password
function decryptCredentials(cipherText) {
  if (!secretKey) throw new Error("SECRET_KEY missing");

  const bytes = CryptoJS.AES.decrypt(cipherText, secretKey);
  const plain = bytes.toString(CryptoJS.enc.Utf8);

  if (!plain) throw new Error("Decryption failed — wrong key or corrupted ciphertext.");

  return plain;
}


module.exports = {/*encryptCredentials,*/ decryptCredentials};