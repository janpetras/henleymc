module.exports = {
    "siteName": "Henley Management Centre",
    "siteRoot": "http://www.henleymc.com/",
    "logging": {
        "level": "info"
    },
    "db": {
        "type":"mongo",
        "servers": [
          "ds027693-a1.mongolab.com:27693"
        ],
        "name": "henleymc_db",
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