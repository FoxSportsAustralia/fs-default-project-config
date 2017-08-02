module.exports = {
    "rules": {
        /**
         * POSSIBLE ERRORS
         *
         * These rules relate to possible syntax or logic errors in JavaScript code:
         */
        "for-direction": "off",                                                  // enforce “for” loop update clause moving the counter in the right direction
        "no-await-in-loop": "off",                                               // disallow await inside of loops
        "no-compare-neg-zero": "error",                                          // disallow comparing against -0
        "no-cond-assign": "error",                                               // disallow assignment operators in conditional expressions
        "no-console": ["error", { allow: ["warn", "error"] }],                   // disallow the use of console
        "no-constant-condition": "error",                                        // disallow constant expressions in conditions
        "no-control-regex": "off",                                               // disallow control characters in regular expressions
        "no-debugger": "error",                                                  // disallow the use of debugger
        "no-dupe-args": "error",                                                 // disallow duplicate arguments in function definitions
        "no-dupe-keys": "error",                                                 // disallow duplicate keys in object literals
        "no-duplicate-case": "error",                                            // disallow duplicate case labels
        "no-empty": "error",                                                     // disallow empty block statements
        "no-empty-character-class": "off",                                       // disallow empty character classes in regular expressions
        "no-ex-assign": "off",                                                   // disallow reassigning exceptions in catch clauses
        "no-extra-boolean-cast": "error",                                        // disallow unnecessary boolean casts
        "no-extra-parens": "off",                                                // disallow unnecessary parentheses
        "no-extra-semi": "error",                                                // disallow unnecessary semicolons
        "no-func-assign": "off",                                                 // disallow reassigning function declarations
        "no-inner-declarations": "off",                                          // disallow variable or function declarations in nested blocks
        "no-invalid-regexp": "error",                                            // disallow invalid regular expression strings in RegExp constructors
        "no-irregular-whitespace": "error",                                      // disallow irregular whitespace outside of strings and comments
        "no-obj-calls": "error",                                                 // disallow calling global object properties as functions
        "no-prototype-builtins": "off",                                          // disallow calling some Object.prototype methods directly on objects
        "no-regex-spaces": "error",                                              // disallow multiple spaces in regular expressions
        "no-sparse-arrays": "error",                                             // disallow sparse arrays
        "no-template-curly-in-string": "off",                                    // disallow template literal placeholder syntax in regular strings
        "no-unexpected-multiline": "error",                                      // disallow confusing multiline expressions
        "no-unreachable": "error",                                               // disallow unreachable code after return, throw, continue, and break statements
        "no-unsafe-finally": "off",                                              // disallow control flow statements in finally blocks
        "no-unsafe-negation": "error",                                           // disallow negating the left operand of relational operators
        "use-isnan": "error",                                                    // require calls to isNaN() when checking for NaN
        "valid-jsdoc": "error",                                                  // enforce valid JSDoc comments
        "valid-typeof": "error",                                                 // enforce comparing typeof expressions against valid strings

        /**
         * BEST PRACTICES
         *
         * These rules relate to better ways of doing things to help you avoid problems:
         */
        "accessor-pairs": "off",                                 // enforce getter and setter pairs in objects
        "array-callback-return": "error",                        // enforce return statements in callbacks of array methods
        "block-scoped-var": "error",                             // enforce the use of variables within the scope they are defined
        "class-methods-use-this": "off",                         // enforce that class methods utilize this
        "complexity": "off",                                     // enforce a maximum cyclomatic complexity allowed in a program
        "consistent-return": "off",                              // require return statements to either always or never specify values
        "curly": "error",                                        // enforce consistent brace style for all control statements
        "default-case": "error",                                 // require default cases in switch statements
        "dot-location": ["error", "property"],                   // enforce consistent newlines before and after dots
        "dot-notation": "error",                                 // enforce dot notation whenever possible
        "eqeqeq": ["error", "smart"],                            // require the use of === and !==
        "guard-for-in": "off",                                   // require for-in loops to include an if statement
        "no-alert": "error",                                     // disallow the use of alert, confirm, and prompt
        "no-caller": "error",                                    // disallow the use of arguments.caller or arguments.callee
        "no-case-declarations": "error",                         // disallow lexical declarations in case clauses
        "no-div-regex": "off",                                   // disallow division operators explicitly at the beginning of regular expressions
        "no-else-return": "off",                                 // disallow else blocks after return statements in if statements
        "no-empty-function": "error",                            // disallow empty functions
        "no-empty-pattern": "error",                             // disallow empty destructuring patterns
        "no-eq-null": "error",                                   // disallow null comparisons without type-checking operators
        "no-eval": "error",                                      // disallow the use of eval()
        "no-extend-native": "error",                             // disallow extending native types
        "no-extra-bind": "error",                                // disallow unnecessary calls to .bind()
        "no-extra-label": "off",                                 // disallow unnecessary labels
        "no-fallthrough": "off",                                 // disallow fallthrough of case statements
        "no-floating-decimal": "error",                          // disallow leading or trailing decimal points in numeric literals
        "no-global-assign": "off",                               // disallow assignments to native objects or read-only global variables
        "no-implicit-coercion": ["error", { "allow": ["!!"] } ], // disallow shorthand type conversions
        "no-implicit-globals": "off",                            // disallow variable and function declarations in the global scope
        "no-implied-eval": "error",                              // disallow the use of eval()-like methods
        "no-invalid-this": "error",                              // disallow this keywords outside of classes or class-like objects
        "no-iterator": "off",                                    // disallow the use of the __iterator__ property
        "no-labels": "error",                                    // disallow labeled statements
        "no-lone-blocks": "error",                               // disallow unnecessary nested blocks
        "no-loop-func": "off",                                   // disallow function declarations and expressions inside loop statements
        "no-magic-numbers": "off",                               // disallow magic numbers (No we won't do that, that's cruel and unserving to anyone but Sean. Cause he's mean. A MONSTER)
        "no-multi-spaces": "off",                                // disallow multiple spaces
        "no-multi-str": "error",                                 // disallow multiline strings
        "no-new": "off",                                         // disallow new For Side Effects
        "no-new-func": "error",                                  // disallow new operators with the Function object
        "no-new-wrappers": "off",                                // disallow new operators with the String, Number, and Boolean objects
        "no-octal": "error",                                     // disallow octal literals
        "no-octal-escape": "off",                                // disallow octal escape sequences in string literals
        "no-param-reassign": "error",                            // disallow reassigning function parameters
        "no-proto": "error",                                     // disallow the use of the __proto__ property
        "no-redeclare": "error",                                 // disallow variable redeclaration
        "no-restricted-properties": "off",                       // disallow certain properties on certain objects
        "no-return-assign": "error",                             // disallow assignment operators in return statements
        "no-return-await": "off",                                // disallow unnecessary return await
        "no-script-url": "off",                                  // disallow javascript: urls
        "no-self-assign": "error",                               // disallow assignments where both sides are exactly the same
        "no-self-compare": "error",                              // disallow comparisons where both sides are exactly the same
        "no-sequences": "error",                                 // disallow comma operators
        "no-throw-literal": "off",                               // disallow throwing literals as exceptions
        "no-unmodified-loop-condition": "off",                   // disallow unmodified loop conditions
        "no-unused-expressions": "error",                        // disallow unused expressions
        "no-unused-labels": "off",                               // disallow unused labels
        "no-useless-call": "error",                              // disallow unnecessary calls to .call() and .apply()
        "no-useless-concat": "error",                            // disallow unnecessary concatenation of literals or template literals
        "no-useless-escape": "off",                              // disallow unnecessary escape characters
        "no-useless-return": "off",                              // disallow redundant return statements
        "no-void": "off",                                        // disallow void operators
        "no-warning-comments": "warn",                           // disallow specified warning terms in comments
        "no-with": "error",                                      // disallow with statements
        "prefer-promise-reject-errors": "off",                   // require using Error objects as Promise rejection reasons
        "radix": "off",                                          // enforce the consistent use of the radix argument when using parseInt()
        "require-await": "off",                                  // disallow async functions which have no await expression
        "vars-on-top": "error",                                  // require var declarations be placed at the top of their containing scope
        "wrap-iife": "off",                                      // require parentheses around immediate function invocations
        "yoda": "error",                                         // require or disallow “Yoda” conditions

        /**
         * STRICT MODE
         *
         * These rules relate to strict mode directives
         */
        "strict": "off", // require or disallow strict mode directives

        /**
         * VARIABLES
         *
         * These rules relate to variable declarations
         */
        "init-declarations": "off",                              // require or disallow initialization in variable declarations
        "no-catch-shadow": "off",                                // disallow Shadowing of Variables Inside of catch
        "no-delete-var": "error",                                // disallow deleting variables
        "no-label-var": "off",                                   // disallow labels that share a name with a variable
        "no-restricted-globals": "off",                          // disallow specified global variables
        "no-shadow": "off",                                      // disallow variable declarations from shadowing variables declared in the outer scope
        "no-shadow-restricted-names": "error",                   // disallow identifiers from shadowing restricted names
        "no-undef": "error",                                     // disallow the use of undeclared variables unless mentioned in /*global */ comments
        "no-undef-init": "error",                                // disallow initializing variables to undefined
        "no-undefined": "off",                                   // disallow the use of undefined as an identifier
        "no-unused-vars": "error",                               // disallow unused variables
        "no-use-before-define": ["error", {"functions": false}], // disallow the use of variables before they are defined

        /**
         * STYLISTIC ISSUES
         *
         * These rules relate to style guidelines, and are therefore quite subjective
         */
        "array-bracket-newline": "off",                                                           // enforce line breaks after opening and before closing array brackets
        "array-bracket-spacing": "error",                                                         // enforce consistent spacing inside array brackets
        "array-element-newline": "off",                                                           // enforce line breaks between array elements
        "block-spacing": "error",                                                                 // enforce consistent spacing inside single-line blocks
        "brace-style": ["error", "1tbs", {"allowSingleLine": true}],                              // enforce consistent brace style for blocks
        "camelcase": ["error", {properties: "never"}],                                            // enforce camelcase naming convention
        "capitalized-comments": "off",                                                            // enforce or disallow capitalization of the first letter of a comment
        "comma-dangle": "error",                                                                  // require or disallow trailing commas
        "comma-spacing": "error",                                                                 // enforce consistent spacing before and after commas
        "comma-style": "error",                                                                   // enforce consistent comma style
        "computed-property-spacing": "error",                                                     // enforce consistent spacing inside computed property brackets
        "consistent-this": ["error", "self"],                                                     // enforce consistent naming when capturing the current execution context
        "eol-last": "error",                                                                      // require or disallow newline at the end of files
        "func-call-spacing": "error",                                                             // require or disallow spacing between function identifiers and their invocations
        "func-name-matching": "off",                                                              // require function names to match the name of the variable or property to which they are assigned
        "func-names": "off",                                                                      // require or disallow named function expressions
        "func-style": "off",                                                                      // enforce the consistent use of either function declarations or expressions
        "id-blacklist": "off",                                                                    // disallow specified identifiers
        "id-length": "off",                                                                       // enforce minimum and maximum identifier lengths
        "id-match": "off",                                                                        // require identifiers to match a specified regular expression
        "indent": ["error", 4, {"SwitchCase": 1}],                                                // enforce consistent indentation
        "jsx-quotes": "error",                                                                    // enforce the consistent use of either double or single quotes in JSX attributes
        "key-spacing": ["error", {                                                                // enforce consistent spacing between keys and values in object literal properties
            "singleLine": {
                "afterColon": true,
                "beforeColon": false,
                "mode": "strict"
            },
            "multiLine": {
                "afterColon": true,
                "beforeColon": false,
                "mode": "minimum"
            }
        }],
        "keyword-spacing": "error",                                                               //  enforce consistent spacing before and after keywords
        "line-comment-position": "off",                                                           //  enforce position of line comments
        "linebreak-style": ["error", "unix"],                                                     //  enforce consistent linebreak style
        "lines-around-comment": ["error", {"beforeBlockComment": true, "allowBlockStart": true}], //  require empty lines around comments
        "max-depth": ["error", 3],                                                                //  enforce a maximum depth that blocks can be nested
        "max-len": ["error", {                                                                    //  enforce a maximum line length
            "code": 140,
            "ignoreComments": true,
            "ignoreUrls": true,
            "ignoreTemplateLiterals": true
        }],
        "max-lines": "off",                                                                       //  enforce a maximum number of lines per file
        "max-nested-callbacks": ["error", 3],                                                     //  enforce a maximum depth that callbacks can be nested
        "max-params": ["error", 5],                                                               //  enforce a maximum number of parameters in function definitions
        "max-statements": "off",                                                                  //  enforce a maximum number of statements allowed in function blocks
        "max-statements-per-line": ["error", {"max": 1}],                                         //  enforce a maximum number of statements allowed per line
        "multiline-ternary": ["error", "never"],                                                  //  enforce newlines between operands of ternary expressions
        "new-cap": "off",                                                                         //  require constructor names to begin with a capital letter
        "new-parens": "error",                                                                    //  require parentheses when invoking a constructor with no arguments
        "newline-per-chained-call": ["error", {"ignoreChainWithDepth": 2}],                       //  require a newline after each call in a method chain
        "no-array-constructor": "error",                                                          //  disallow Array constructors
        "no-bitwise": "error",                                                                    //  disallow bitwise operators
        "no-continue": "off",                                                                     //  disallow continue statements
        "no-inline-comments": "off",                                                              //  disallow inline comments after code
        "no-lonely-if": "error",                                                                  //  disallow if statements as the only statement in else blocks
        "no-mixed-operators": "error",                                                            //  disallow mixed binary operators
        "no-mixed-spaces-and-tabs": "error",                                                      //  disallow mixed spaces and tabs for indentation
        "no-multi-assign": "off",                                                                 //  disallow Use of Chained Assignment Expressions
        "no-multiple-empty-lines": ["error", {"max": 1}],                                         //  disallow multiple empty lines
        "no-negated-condition": "error",                                                          //  disallow negated conditions
        "no-nested-ternary": "error",                                                             //  disallow nested ternary expressions
        "no-new-object": "off",                                                                   //  disallow Object constructors
        "no-plusplus": "off",                                                                     //  disallow the unary operators ++ and --
        "no-restricted-syntax": "off",                                                            //  disallow specified syntax
        "no-tabs": "off",                                                                         //  disallow all tabs
        "no-ternary": "off",                                                                      //  disallow ternary operators
        "no-trailing-spaces": "error",                                                            //  disallow trailing whitespace at the end of lines
        "no-underscore-dangle": "off",                                                            //  disallow dangling underscores in identifiers
        "no-unneeded-ternary": "error",                                                           //  disallow ternary operators when simpler alternatives exist
        "no-whitespace-before-property": "error",                                                 //  disallow whitespace before properties
        "nonblock-statement-body-position": "off",                                                //  nonblock-statement-body-position
        "object-curly-newline": "off",                                                            //  enforce consistent line breaks inside braces
        "object-curly-spacing": "error",                                                          //  enforce consistent spacing inside braces
        "object-property-newline": "off",                                                         //  enforce placing object properties on separate lines
        "one-var": "off",                                                                         //  enforce variables to be declared either together or separately in functions
        "one-var-declaration-per-line": "off",                                                    //  require or disallow newlines around variable declarations
        "operator-assignment": "off",                                                             //  require or disallow assignment operator shorthand where possible
        "operator-linebreak": ["error", "after"],                                                 //  enforce consistent linebreak style for operators
        "padded-blocks": ["error", "never"],                                                      //  require or disallow padding within blocks
        "padding-line-between-statements": ["error",                                              //  require or disallow padding lines between statements
            { blankLine: "always", prev: "*", next: "return" },
            { blankLine: "any", prev: "directive", next: "directive" },
            { blankLine: "always", prev: ["const", "let", "var"], next: "*"},
            { blankLine: "any", prev: ["const", "let", "var"], next: ["const", "let", "var"]},
            { blankLine: "always", prev: ["import"], next: "*"},
            { blankLine: "any", prev: ["import"], next: ["import"]}
        ],
        "quote-props": ["error", "consistent-as-needed"],                                         //  require quotes around object literal property names
        "quotes": ["error", "single"],                                                            //  enforce the consistent use of either backticks, double, or single quotes
        "require-jsdoc": "off",                                                                   //  require JSDoc comments
        "semi": "error",                                                                          //  require or disallow semicolons instead of ASI
        "semi-spacing": "error",                                                                  //  enforce consistent spacing before and after semicolons
        "semi-style": "error",                                                                    //  enforce location of semicolons
        "sort-keys": "off",                                                                       //  require object keys to be sorted
        "sort-vars": "off",                                                                       //  require variables within the same declaration block to be sorted
        "space-before-blocks": "error",                                                           //  enforce consistent spacing before blocks
        "space-before-function-paren": ["error", {                                                //  enforce consistent spacing before function definition opening parenthesis
            "anonymous": "always",
            "named": "never",
            "asyncArrow": "ignore"
        }],
        "space-in-parens": "error",                                                               //  enforce consistent spacing inside parentheses
        "space-infix-ops": "error",                                                               //  require spacing around infix operators
        "space-unary-ops": "error",                                                               //  enforce consistent spacing before or after unary operators
        "spaced-comment": "error",                                                                //  enforce consistent spacing after the SLASHSLASH or /* in a comment
        "switch-colon-spacing": "error",                                                          //  enforce spacing around colons of switch statements
        "template-tag-spacing": "error",                                                          //  require or disallow spacing between template tags and their literals
        "unicode-bom": "error",                                                                   //  require or disallow the Unicode Byte Order Mark (BOM)
        "wrap-regex": "off"                                                                       //  require parenthesis around regex literals
    }
};
