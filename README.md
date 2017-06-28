# fs-default-project-config
Repo containing commons fox sports project configs

## Usage

### eslint

#### Installing
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

If using eslint/compat, ensure that you copy `.browserslistrc` to your project root, or set up a [browserslist config](https://github.com/ai/browserslist#config-file)

```
    "browserslist": [
        "last 2 versions",
        "Safari >= 8",
        "Explorer >= 11"
    ],
```

#### Updating Rules
As eslint is constantly having rules added or tweaked, pay attention to the relevant eslint or plugin version defined in `package.json`
to determine which ruleset is being applied.

If you want to update the rules, look at eslint's / the plugin's changelog since the last release and ensure all new rules have a definition, deprecated rules are removed etc.

Remember any rules capable of breaking a CI build should be SEMVER versioned a breaking change. That means adding a new rule or even making a current rule stricter.

### sass-lint
1. Install as a dev dependency in your repo.
2. Set up your `.sass-lint.yml` file to extend `./node_modules/fs-default-project-config/resources/.sass-lint.yml`

    ```
    options:
        config-file: ./node_modules/fs-default-project-config/resources/.sass-lint.yml
    ```

### All Others
1. Copy desired contents from `./node_modules/fs-default-project-config/resources/`

## Dependencies
In addition to `eslint` itself, the following eslint plugin npm packages are required for these rules (if you exclude some rules you won't need all of these)

* `eslint-plugin-jsx-a11y`
* `eslint-plugin-react`
* `eslint-plugin-filenames`
