module.exports = {
    "extends": [
        "./.eslintrc-base.js"
    ],
    "plugins": [
        "filenames"
    ],
    "rules": {
        /**
         * Filename Rules
         *
         * https://github.com/selaux/eslint-plugin-filenames
         *
         * Not overly strict, but ensure you're always lower case, and kebab.
         */
        "filenames/match-regex": ["error", "^[a-z0-9_-]+$"]
    }
};
