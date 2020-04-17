declare const _default: {
    AES: import("pandora-aes").AES;
    RSA: {
        encrypt: (plaintext: string, publicKey: string) => string;
        decrypt: (message: string, privateKey: string) => string;
    };
};
export default _default;
