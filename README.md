# client-crypto
Javascript Crypto Library

## Install

```bash
npm i -D client-crypto
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

Crypto.RSA.encrypt('encryptedKey', 'privateKey');
```

### AES
默认使用`gcm`模式。

### createKey 生成密钥

```javascript
import Crypto from 'client-crypto';

Crypto.AES.createKey();
```

### encrypt 加密

```javascript
import Crypto from 'client-crypto';

Crypto.AES.encrypt(data);
```

### decrypt 解密

```javascript
import Crypto from 'client-crypto';

Crypto.AES.decrypt('encrypted message');
```

### getKey 获取密钥

```javascript
import Crypto from 'client-crypto';

Crypto.AES.getKey();
```

### clearKey 清除密钥

```javascript
import Crypto from 'client-crypto';

Crypto.AES.clearKey();
```

## 服务端
Java：[AES代码示例](https://blog.csdn.net/catoop/article/details/96431206?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522158650148019725256734765%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=158650148019725256734765&biz_id=0&utm_source=distribute.pc_search_result.none-task-blog-soetl_so_first_rank_v2_rank_v25-12)
