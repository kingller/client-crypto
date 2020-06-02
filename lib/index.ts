import Crypto from 'pandora-crypto-browserify';
import RSA from './rsa';

export default {
    RSA,
    AES: Crypto.AES,
    SHA256: Crypto.SHA256,
};
