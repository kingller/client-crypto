标签：
<font color=green>新增</font>
<font color=orange>修改</font>
<font color=blue>增强</font>
<font color=red>修复</font>
<font color=red><strong>删除</strong></font>


# 1.5.1
1. Fixed `sha256` cannot be used in Worker

# 1.5.0
1. <font color=green>新增</font> `RSA.encryptOAEP` 支持使用 `OAEP` 填充模式结合 `SHA-256` 哈希算法的 `RSA` 加密


# 1.4.0
1. <font color=blue>增强</font> `SHA256` 支持传入参数类型 `ArrayBuffer`


# 1.3.1
1. <font color=red>修复</font> `pandora-jsencrypt` Can't resolve './JSEncrypt'


# 1.3.0
1. <font color=red><strong>删除</strong></font> `RSA` 签名方式 `md2`, `md5`, `sha1`


# 1.2.5
1. <font color=red><strong>删除</strong></font> `YUI`版本说明


# 1.2.4
1. <font color=red>修复</font> 编译时警告`Module not found: Error: Can't resolve 'null'`


# 1.2.3
1. <font color=red>修复</font> `README.md`文档说明不正确


# 1.2.2
1. <font color=red>修复</font> 使用`pandora-crypto-browserify`精确版本号，防止引用包自动升级出现问题


# 1.2.1
1. <font color=red>修复</font> 引用该包后，打包时把node crypto module也打包进了文件中


# 1.2.0
1. <font color=green>新增</font> SHA256算法


# 1.1.0
1. <font color=orange>修改</font> 将AES算法放入发布包`pandora-aes`给前端和Node端使用，这里改为引用`pandora-aes`
