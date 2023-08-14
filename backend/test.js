const crypto = require("crypto")

const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
    modulusLength: 4096,
    publicKeyEncoding: {
        type: "spki", // Key Encoding 방식 선택 type: 'pkcs1' | 'spki';
        format: "pem", // Key Format            type KeyFormat = 'pem' | 'der';
    },
    privateKeyEncoding: {
        type: "pkcs8", // Key Encoding 방식 type: 'sec1' | 'pkcs8';
        format: "pem",
        cipher: "aes-256-cbc", // 알고리즘
        passphrase: "coshell",
    },
})

console.log(publicKey, privateKey)
