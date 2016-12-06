module.exports = {
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "impliedStrict": true,
            "classes": true
        }
    },
    "env": {
        "browser": true,
        "mocha": true,
        "node": true,
        "es6": true
    },
    "globals": {
        "after": true,
        "afterEach": true,
        "before": true,
        "beforeEach": true,
        "describe": true,
        "it": true,
        "sinon": true,
        "require": true
    }
};
