# fs-default-project-config
Repo containing commons fox sports project configs

## Usage
### eslint
1. Install as a dev dependency in your repo.
2. Set up your `.eslintrc.js` file to extend `./node_modules/fs-default-project-config/resources/.eslintrc.js`

    For all rules (standards & react specific):

    ```
    module.exports = {
        "extends": [
            "./node_modules/fs-default-project-config/resources/.eslintrc.js"
        ]
    };
    ```

    Excluding react specific rules:

    ```
    module.exports = {
        "extends": [
            "./node_modules/fs-default-project-config/resources/.eslintrc-files.js"
            "./node_modules/fs-default-project-config/resources/.eslintrc-standards.js"
        ]
    };
    ```

### All Others
1. Copy desired contents from `./node_modules/fs-default-project-config/resources/`

## Dependencies
In addition to `eslint` itself, the following eslint plugin npm packages are required for these rules (if you exclude some rules you won't need all of these)

* `eslint-plugin-jsx-a11y`
* `eslint-plugin-react`
* `eslint-plugin-filenames`
