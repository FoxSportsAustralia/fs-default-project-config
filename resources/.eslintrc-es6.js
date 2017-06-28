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
        "es6": true
    },
    "rules": {
        /**
         * ECMASCRIPT 6
         *
         * These rules relate to ES6, also known as ES2015
         */
        /**
         * ECMASCRIPT 2015
         *
         * These rules relate to ES2015, also known as ES6
         */
        "arrow-body-style": ["error", "as-needed"],   //  require braces around arrow function bodies
        "arrow-parens": "error",                      //  require parentheses around arrow function arguments
        "arrow-spacing": "error",                     //  enforce consistent spacing before and after the arrow in arrow functions
        "constructor-super": "error",                 //  require super() calls in constructors
        "generator-star-spacing": "error",            //  enforce consistent spacing around * operators in generator functions
        "no-class-assign": "error",                   //  disallow reassigning class members
        "no-confusing-arrow": "off",                  //  disallow arrow functions where they could be confused with comparisons
        "no-const-assign": "error",                   //  disallow reassigning const variables
        "no-dupe-class-members": "error",             //  disallow duplicate class members
        "no-duplicate-imports": "error",              //  disallow duplicate module imports
        "no-new-symbol": "error",                     //  disallow new operators with the Symbol object
        "no-restricted-imports": ["error", "lodash"], //  disallow specified modules when loaded by import
        "no-this-before-super": "error",              //  disallow this/super before calling super() in constructors
        "no-useless-computed-key": "error",           //  disallow unnecessary computed property keys in object literals
        "no-useless-constructor": "error",            //  disallow unnecessary constructors
        "no-useless-rename": "error",                 //  disallow renaming import, export, and destructured assignments to the same name
        "no-var": "error",                            //  require let or const instead of var
        "object-shorthand": "error",                  //  require or disallow method and property shorthand syntax for object literals
        "prefer-arrow-callback": "off",               //  require arrow functions as callbacks
        "prefer-const": "error",                      //  require const declarations for variables that are never reassigned after declared
        "prefer-destructuring": ["error", {           //  prefer destructuring from arrays and objects
          "array": true,
          "object": true
        }, {
          "enforceForRenamedProperties": false
        }],
        "prefer-numeric-literals": "off",             //  disallow parseInt() in favor of binary, octal, and hexadecimal literals
        "prefer-rest-params": "off",                  //  require rest parameters instead of arguments
        "prefer-spread": "error",                     //  require spread operators instead of .apply()
        "prefer-template": "off",                     //  require template literals instead of string concatenation
        "require-yield": "off",                       //  require generator functions to contain yield
        "rest-spread-spacing": "error",               //  enforce spacing between rest and spread operators and their expressions
        "sort-imports": "off",                        //  enforce sorted import declarations within modules
        "symbol-description": "off",                  //  require symbol descriptions
        "template-curly-spacing": "error",            //  require or disallow spacing around embedded expressions of template strings
        "yield-star-spacing": "off"                   //  require or disallow spacing around the * in yield* expressions
    }
};
