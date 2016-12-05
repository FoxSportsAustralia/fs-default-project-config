# fs-default-project-config
Repo containing commons fox sports project configs

## Usage
### eslint
1. Install as a dev dependency in your repo.
2. Set up your `.eslintrc.js` file to extend `./node_modules/fs-default-project-config/resources/.eslintrc.js`

    ```
    module.exports = {
        "extends": [
            "./node_modules/fs-default-project-config/resources/.eslintrc.js"
        ]
    };
    ```

### all others
1. Copy desired contents from `./node_modules/fs-default-project-config/resources/`
