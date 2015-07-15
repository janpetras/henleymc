module.exports = {
    "siteName": "Henley Management Centre",
    "siteRoot": "",
    "logging": {
        "level": "info"
    },
    "db": {
        "type":"mongo",
        "servers": [
          "ds039251.mongolab.com:39251"
        ],
        "name": "henley_db",
        "authentication": {
            "un": "ian",
            "pw": "millenium20"
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