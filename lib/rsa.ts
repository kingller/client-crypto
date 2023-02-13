// @ts-ignore
import JSEncrypt from 'pandora-jsencrypt';

export default {
    /**
     * 加密
     * @param plaintext 明文
     * @param publicKey 公钥
     */
    encrypt: function(plaintext: string, publicKey: string): string | false {
        // 公钥
        const PUBLIC_KEY = publicKey;

        //使用公钥加密
        const encrypt = new JSEncrypt();
        encrypt.setPublicKey('-----BEGIN PUBLIC KEY-----' + PUBLIC_KEY + '-----END PUBLIC KEY-----');
        const encryptedStr = encrypt.encrypt(plaintext);
        return encryptedStr;
    },
    /**
     * 解密
     * @param message 密文
     * @param privateKey 私钥
     */
    decrypt: function(message: string, privateKey: string): string | false {
        //私钥
        const PRIVATE_KEY = privateKey;
        //使用私钥解密
        const decrypt = new JSEncrypt();
        decrypt.setPrivateKey('-----BEGIN RSA PRIVATE KEY-----' + PRIVATE_KEY + '-----END RSA PRIVATE KEY-----');
        const decryptedMsg = decrypt.decrypt(message);
        return decryptedMsg;
    },
};
