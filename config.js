module.exports = {
    "siteName": "Henley Management Centre",
    "siteRoot": "/",
    "logging": {
        "level": "info"
    },
    "db": {
        "type":"mongo",
        "servers": [
          "ds031902.mongolab.com:31902"
        ],
        "name": "henley",
        "authentication": {
            "un": "ian",
            "pw": "millenium"
        },
        "writeConcern": 1
    },
    "cache": {
        "fake": true,
        "host": "localhost",
        "port": 6379
    },
    "settings": {
        "use_memory": false,
        "use_cache": false
    },
    "templates": {
        "use_memory": true,
        "use_cache": false
    },
    "plugins": {
        "caching": {
            "use_memory": false,
            "use_cache": false
        }
    },
    "registry": {
        "type": "mongo"
    },
    "session": {
        "storage": "mongo"
    },
    "media": {
        "provider": "mongo",
        "max_upload_size": 6 * 1024 * 1024
    },
    "cluster": {
        "workers": 1,
        "self_managed": true
    }
};
