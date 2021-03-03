"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
var pandora_jsencrypt_1 = __importDefault(require("pandora-jsencrypt"));
exports.default = {
    /**
     * 加密
     * @param plaintext 明文
     * @param publicKey 公钥
     */
    encrypt: function (plaintext, publicKey) {
        // 公钥
        var PUBLIC_KEY = publicKey;
        //使用公钥加密
        var encrypt = new pandora_jsencrypt_1.default();
        encrypt.setPublicKey('-----BEGIN PUBLIC KEY-----' + PUBLIC_KEY + '-----END PUBLIC KEY-----');
        var encryptedStr = encrypt.encrypt(plaintext);
        return encryptedStr;
    },
    /**
     * 解密
     * @param message 密文
     * @param privateKey 私钥
     */
    decrypt: function (message, privateKey) {
        //私钥
        var PRIVATE_KEY = privateKey;
        //使用私钥解密
        var decrypt = new pandora_jsencrypt_1.default();
        decrypt.setPrivateKey('-----BEGIN RSA PRIVATE KEY-----' + PRIVATE_KEY + '-----END RSA PRIVATE KEY-----');
        var decryptedMsg = decrypt.decrypt(message);
        return decryptedMsg;
    },
};
