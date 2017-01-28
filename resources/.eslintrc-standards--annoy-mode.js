module.exports = {
    "rules": {
        "no-magic-numbers": ["error", {                          // disallow magic numbers
            "ignore": [0, 1, -1],
            "ignoreArrayIndexes": true
        }]
    }
};
