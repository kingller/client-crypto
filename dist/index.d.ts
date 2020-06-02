declare const _default: {
    RSA: {
        encrypt: (plaintext: string, publicKey: string) => string;
        decrypt: (message: string, privateKey: string) => string;
    };
    AES: import("pandora-aes-browserify").AES;
    SHA256: typeof import("pandora-crypto-browserify/dist/sha256").default;
};
export default _default;
