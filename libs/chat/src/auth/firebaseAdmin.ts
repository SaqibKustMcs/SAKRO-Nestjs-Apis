var admin = require("firebase-admin");
//var serviceAccount = require("../auth/serviceAccountKey.json");

const defaultApp = admin.initializeApp({
    credential: admin.credential.cert({
        "type": "service_account",
        "project_id": "chat-notification-a338e",
        "private_key_id": "995b7528867d7cc2d322f3bfc892975d7ccf9724",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCaGvABGbh6+G3y\n9bhU+gRzi2KuOGMt8/vZ+dtpNDF3vXompWUkkSh/WQ0X24yBtEsN3m6KY+uwnWrC\nnRYarkJ07EtbI8yFkKrrf6UCo4kt8fs5gyvImA8feAp01tNXrsrgv72Od7GQQwgd\n5p1t2CDsPweQmx9qn++doW2Hl5y47Dsl6CbP9Kt7JL+E1QD98HtwjOrL/4d/Waim\nnHpWQSC3IO8hxrDtgI/vwrYEpNaUOUOrDfSqAvHVBRZMNKuybw3Q4bL9owX5Rxgj\nuLuouX4FTpmYe2Y/P2pjvVZn+xYWdHh4z/KtXfZv0bnc2j/th96jEm5GYUYhAyZ4\nZE4ENoMNAgMBAAECggEAR8apJ5IPwzLHnySEnQuwHBL9PNElnKcplC6UW61EJxW4\n+ZwKflwfxSS4fPa0vEq5tHV3/fwpMCM5sPhSbc3hRS0zsfj8Du/BNBvJQu/hemVd\nEj3+nBj63jjegen3GL1gYAreYqdsLBmUg7zAcYN7Xh3DS758hQCGLeCcr81VYSlp\nFgblXY08d0NhtuILUUulRoE1YPhy4PEatwIYtewYWGmMIi2BCHU0DrOztjH8Ce9z\n7msBTgvMiASb/aLt1UB94vImIIfQwZTO01LH5yflpwzNLT8/3ZBwxlzmFcglAjLS\nio49Oav0lfwEiOqkso3xKDycSvLmfv2kgst6EC+BPwKBgQDLWYXJOlqzsIDt43qc\ngLgPjhhoXggQdLBi438FaqT0bg8jiutCFxnyG1mkJ4k7aga09lJ7oQwg01Fu/tsC\nvE0Oen9K7jaBpVGN9qYioP+k/LywTDRU048s8EbrlwwNQNau19VQCi1rTDvn6vjl\nqcTwHHjRqbI5RSSyiz32BPnMAwKBgQDCAWFGtLT13NT7X3X1PJSGDMMRmPZp6tit\nUw/WzSr9/aHKWbEXRbDBP2F0k3qzdSU2DAjFbMYAPw20qPz9yYrK1lGw8HCPo2fm\n0qm+yrbgVaTo1QPcOJ1yYIHU/YYfbfZYU1DYFjDY84ysmoTHeHQ2XFD0Cv8oBBPu\nPzsGy6qvrwKBgEstpKV5enD2LyRDtl/HwsSVbvae1PJogZF9s8cn3yYyzkwAnutH\nKSN18xUaPMUHdMVQT7w/FQHJvlB/zi5buU1CAm+MVABoQxdt+YvR49F2UrgG5E38\nDPG7Pyz4Ic+Aih4H02gM6y/A9mDOYQhfVFzE2fIBf89mfaO4kMa0njlLAoGAQtwq\n5C0++ESk+gTKKDw6i4A2cggfVB1lk0Y+/S40FNimO5Bxoa2Y3uCy+3QgI1zJ+Dhp\nhXCZRFh2pr5egjBFLuZxvOMAR+Bu3HPZoDFImUOq07sl221/hX2RARBmespwzbvY\n7r+nEf3Ni2atP/lZQ6rJE3H+wZG2NLOB6jOinW0CgYA6SVnKjQaaCjg7d28eAnSR\n+1iChcA8CLtcn7J+njYAZQg0eVsXTEBSk9WkW1k2ImLau+oHLaMBotfvjaEDYydt\njhYM+sAmdaS+0XCtXdf6cUa8217jyomf40dS+8fpKvfKCeeNMx2tN+4N1P5NXeHR\n2/HGnASy0cWX6yQcrCdcHA==\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-zc7n4@chat-notification-a338e.iam.gserviceaccount.com",
        "client_id": "104395492228038049799",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-zc7n4%40chat-notification-a338e.iam.gserviceaccount.com",
        "universe_domain": "googleapis.com"
    }),
    databaseURL: "https://fir-auth-bd895.firebaseio.com"
});

export {
    defaultApp
}
