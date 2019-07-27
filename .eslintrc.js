module.exports = {
    "env": {
        "browser": true,
        "jasmine":true,
        "protractor": true,
        "es6": true,
        "commonjs": true,
        "node": true,
    },
    "extends": "airbnb-base",
    rules:{
        "linebreak-style": 0,
        "no-plusplus": [2, { allowForLoopAfterthoughts: true }],
        "global-require": 0,
        "class-methods-use-this": [1],
    }
};
