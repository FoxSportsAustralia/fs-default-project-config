module.exports = {
    "plugins": [
        "import"
    ],
    "rules": {
        /**
         * Import Syntax Rules
         *
         * https://github.com/benmosher/eslint-plugin-import
         */

        /* IMPORT: Static analysis */
        "import/default": "error",                                         // Ensure a default export is present, given a default import
        "import/named": "off",                                             // Ensure named imports correspond to a named export in the remote file -- TODO: enable once all our code migrated to es6 modules
        "import/namespace": "error",                                       // Ensure imported namespaces contain dereferenced properties as they are dereferenced
        "import/no-absolute-path": "error",                                // Forbid import of modules using absolute paths calls with expressions
        "import/no-dynamic-require": "error",                              // Forbid require() calls with expressions
        "import/no-internal-modules": "off",                               // Prevent importing the submodules of other modules
        "import/no-restricted-paths": "error",                             // Restrict which files can be imported in a given folder
        "import/no-unresolved": "error",                                   // Ensure imports point to a file/module that can be resolved
        "import/no-webpack-loader-syntax": "error",                        // Forbid Webpack loader syntax in imports

        /* IMPORT: Helpful warnings */
        "import/export": "error",                                          // Report any invalid exports, i.e. re-export of the same name
        "import/no-deprecated": "error",                                   // Report imported names marked with @deprecated documentation tag
        "import/no-extraneous-dependencies": "error",                      // Forbid the use of extraneous packages
        "import/no-mutable-exports": "error",                              // Forbid the use of mutable exports with var or let. (
        "import/no-named-as-default": "error",                             // Report use of exported name as identifier of default export
        "import/no-named-as-default-member": "error",                      // Report use of exported name as property of default export

        /* IMPORT: Module systems */
        "import/no-amd": "error",                                          // Report AMD require and define calls
        "import/no-commonjs": "error",                                     // Report CommonJS require calls and module.exports or exports.*
        "import/no-nodejs-modules": ["error", {"allow": ["querystring"]}], // No Node.js builtin modules.
        "import/unambiguous": "error",                                     // Report potentially ambiguous parse goal (script vs. module)

        /* IMPORT: Style guide */
        "import/exports-last": "off",                                           // Ensure all exports appear after other statements
        "import/extensions": ["error", { "js": "never", "json": "always" }],    // Ensure consistent use of file extension within the import path
        "import/first": "error",                                                // Ensure all imports appear before other statements
        "import/max-dependencies": "off",                                       // Limit the maximum number of dependencies a module can have
        "import/newline-after-import": "error",                                 // Enforce a newline after import statements
        "import/no-anonymous-default-export": "off",                            // Forbid anonymous values as default exports
        "import/no-duplicates": "error",                                        // Report repeated import of the same module in multiple places
        "import/no-named-default": "error",                                     // Forbid named default exports
        "import/no-namespace": "error",                                         // Report namespace imports
        "import/no-unassigned-import": "error",                                 // Forbid unassigned imports
        "import/order": "error",                                                // Enforce a convention in module import order
        "import/prefer-default-export": "error"                                 // Prefer a default export if module exports a single name
    }
};
