# client-crypto
Javascript Crypto Library for browser

## Install

```bash
npm install client-crypto
``` 

## Usage

流程：  
1. 服务端使用非对称加密`RSA`生成公钥私钥，并将公钥发送给客户端。
2. 客户端生成对称加密（这里使用`AES`）密钥，使用服务端发送的`RSA`公钥加密该密钥，并将其发送给服务端。
3. 服务端使用`RSA`私钥解密，得到该密钥。  
此时，服务端、客户端同时拥有该密钥，使用`AES`加密解密消息体。


### RSA

#### 加密
```javascript
import Crypto from 'client-crypto';

Crypto.RSA.encrypt('secretKey', 'publicKey');
```

#### 解密
```javascript
import Crypto from 'client-crypto';

Crypto.RSA.decrypt('encryptedKey', 'privateKey');
```

#### OAEP 加密

使用 OAEP 填充模式结合 SHA-256 哈希算法

```typescript
import Crypto from 'client-crypto';

Crypto.RSA.encryptOAEP('secretKey', 'publicKey');
```

#### OAEP 解密

下面是用 nodejs 进行解密的示例

```typescript
import crypto from 'crypto';

/** RSA 解密 */
export function privateDecrypt(privateKey: crypto.KeyLike, encryptedText: string) {
    const encryptedBuffer = Buffer.from(encryptedText, 'base64');
    const msgBuffer = msgBuffer = crypto.privateDecrypt(
        { key: privateKey, padding: crypto.constants.RSA_PKCS1_OAEP_PADDING, oaepHash: 'sha256' },
        encryptedBuffer
    );

    return String.fromCharCode.apply(null, msgBuffer);
}
```


### AES
默认使用`gcm`模式。

#### createKey 生成密钥

```javascript
import Crypto from 'client-crypto';

Crypto.AES.createKey();
```

使用该方法生成密钥后，会缓存该密钥，使用加密（encrypt）或解密（decrypt）方法时也可不提供密钥。

#### encrypt 加密

```javascript
import Crypto from 'client-crypto';

Crypto.AES.encrypt(data, '密钥');
```

该方法会先执行JSON.stringify(data)，将数据转为json格式的字符串，然后使用AES加密。

#### decrypt 解密

```javascript
import Crypto from 'client-crypto';

Crypto.AES.decrypt('encrypted message', '密钥');
```

该方法会使用AES解密，再执行JSON.parse，获取数据。

#### getKey 获取密钥

```javascript
import Crypto from 'client-crypto';

Crypto.AES.getKey();
```

#### setKey 设置密钥

```javascript
import Crypto from 'client-crypto';

Crypto.AES.setKey('密钥');
```

#### clearKey 清除密钥

```javascript
import Crypto from 'client-crypto';

Crypto.AES.clearKey();
```


### SHA256

```javascript
import Crypto from 'client-crypto';

Crypto.SHA256('message');
```


## 使用说明
[前端加解密](https://www.jianshu.com/p/8f4830594de3)
