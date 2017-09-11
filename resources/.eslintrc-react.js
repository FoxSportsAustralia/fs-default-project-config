module.exports = {
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "plugins": [
        "react",
        "jsx-a11y"
    ],
    "rules": {
        /**
         * REACT
         *
         * https://github.com/yannickcr/eslint-plugin-react
         */
        "react/display-name": "off",                                 // Prevent missing displayName in a React component definition
        "react/forbid-component-props": "off",                       // Forbid certain props on Components
        "react/forbid-prop-types": ["error", {"forbid": ["array"]}], // Forbid certain propTypes
        "react/no-children-prop": "off",                             // Prevent passing children as props
        "react/no-danger": "off",                                    // Prevent usage of dangerous JSX properties
        "react/no-danger-with-children": "error",                    // Prevent problem with children and props.dangerouslySetInnerHTML
        "react/no-deprecated": "error",                              // Prevent usage of deprecated methods
        "react/no-did-mount-set-state": "error",                     // Prevent usage of setState in componentDidMount
        "react/no-did-update-set-state": "error",                    // Prevent usage of setState in componentDidUpdate
        "react/no-direct-mutation-state": "error",                   // Prevent direct mutation of this.state
        "react/no-find-dom-node": "error",                           // Prevent usage of findDOMNode
        "react/no-is-mounted": "off",                                // Prevent usage of isMounted
        "react/no-multi-comp": "off",                                // Prevent multiple component definition per file
        "react/no-render-return-value": "off",                       // Prevent usage of the return value of React.render
        "react/no-set-state": "off",                                 // Prevent usage of setState
        "react/no-string-refs": "error",                             // Prevent using string references in ref attribute.
        "react/no-unescaped-entities": "off",                        // Prevent invalid characters from appearing in markup
        "react/no-unknown-property": "error",                        // Prevent usage of unknown DOM property (fixable)
        "react/no-unused-prop-types": "error",                       // Prevent definitions of unused prop types
        "react/prefer-es6-class": "off",                             // Enforce ES5 or ES6 class for React Components
        "react/prefer-stateless-function": "error",                  // Enforce stateless React Components to be written as a pure function
        "react/prop-types": "error",                                 // Prevent missing props validation in a React component definition
        "react/react-in-jsx-scope": "error",                         // Prevent missing React when using JSX
        "react/require-optimization": "off",                         // Enforce React components to have a shouldComponentUpdate method
        "react/require-render-return": "error",                      // Enforce ES5 or ES6 class for returning value in render function
        "react/self-closing-comp": "error",                          // Prevent extra closing tags for components without children (fixable)
        "react/sort-comp": "error",                                  // Enforce component methods order
        "react/sort-prop-types": "off",                              // Enforce propTypes declarations alphabetical sorting
        "react/style-prop-object": "error",                          // Enforce style prop value being an object
        "react/void-dom-elements-no-children": "error",              // Prevent void DOM elements (e.g. <img />, <br />) from receiving children (react/void-dom-elements-no-children)

        /**
         * REACT JSX
         *
         * https://github.com/yannickcr/eslint-plugin-react
         */
        "react/jsx-boolean-value": ["error", "always"],                               // Enforce boolean attributes notation in JSX (fixable)
        "react/jsx-closing-bracket-location": ["error", {"location": "after-props"}], // Validate closing bracket location in JSX (fixable)
        "react/jsx-curly-spacing": ["error", "never"],                                // Enforce or disallow spaces inside of curly braces in JSX attributes (fixable)
        "react/jsx-equals-spacing": "error",                                          // Enforce or disallow spaces around equal signs in JSX attributes (fixable)
        "react/jsx-filename-extension": "off",                                        // Restrict file extensions that may contain JSX
        "react/jsx-first-prop-new-line": ["error", "multiline"],                      // Enforce position of the first prop in JSX (fixable)
        "react/jsx-handler-names": "off",                                             // Enforce event handler naming conventions in JSX
        "react/jsx-indent": "error",                                                  // Validate JSX indentation
        "react/jsx-indent-props": "error",                                            // Validate props indentation in JSX (fixable)
        "react/jsx-key": "off",                                                       // Validate JSX has key prop when in array or iterator
        "react/jsx-max-props-per-line": ["error", {"maximum": 5}],                    // Limit maximum of props on a single line in JSX
        "react/jsx-no-bind": "off",                                                   // Prevent usage of .bind() and arrow functions in JSX props
        "react/jsx-no-comment-textnodes": "error",                                    // Prevent comments from being inserted as text nodes
        "react/jsx-no-duplicate-props": "error",                                      // Prevent duplicate props in JSX
        "react/jsx-no-literals": "off",                                               // Prevent usage of unwrapped JSX strings
        "react/jsx-no-target-blank": "off",                                           // Prevent usage of unsafe target='_blank'
        "react/jsx-no-undef": "error",                                                // Disallow undeclared variables in JSX
        "react/jsx-pascal-case": "error",                                             // Enforce PascalCase for user-defined JSX components
        "react/jsx-sort-props": "off",                                                // Enforce props alphabetical sorting
        "react/jsx-space-before-closing": "error",                                    // Validate spacing before closing bracket in JSX (fixable)
        "react/jsx-tag-spacing": "error",                                             // Validate whitespace in and around the JSX opening and closing brackets (fixable)
        "react/jsx-uses-react": "error",                                              // Prevent React to be incorrectly marked as unused
        "react/jsx-uses-vars": "error",                                               // Prevent variables used in JSX to be incorrectly marked as unused
        "react/jsx-wrap-multilines": "error",                                         // Prevent missing parentheses around multilines JSX (fixable)
        "react/jsx-no-target-blank": "error",                                         // Prevent usage of unsafe target='_blank'

        /**
         * JSX a11y
         *
         * https://github.com/evcohen/eslint-plugin-jsx-a11y
         */
        "jsx-a11y/accessible-emoji": "error",                                            // Enforce emojis are wrapped in and provide screenreader access.
        "jsx-a11y/alt-text": "error",                                                    // Enforce all elements that require alternative text have meaningful information to relay back to end user.
        "jsx-a11y/anchor-has-content": "error",                                          // Enforce all anchors to contain accessible content.
        "jsx-a11y/anchor-is-valid": "error",                                             // Enforce all anchors are valid, navigable elements.
        "jsx-a11y/aria-activedescendant-has-tabindex": "error",                          // Enforce elements with aria-activedescendant are tabbable.
        "jsx-a11y/aria-props": "error",                                                  // Enforce all aria-* props are valid.
        "jsx-a11y/aria-proptypes": "error",                                              // Enforce ARIA state and property values are valid.
        "jsx-a11y/aria-role": "error",                                                   // Enforce that elements with ARIA roles must use a valid, non-abstract ARIA role.
        "jsx-a11y/aria-unsupported-elements": "error",                                   // Enforce that elements that do not support ARIA roles, states, and properties do not have those attributes.
        "jsx-a11y/click-events-have-key-events": "error",                                // Enforce a clickable non-interactive element has at least one keyboard event listener.
        "jsx-a11y/heading-has-content": "error",                                         // Enforce heading (h1, h2, etc) elements contain accessible content.
        "jsx-a11y/html-has-lang": "error",                                               // Enforce <html> element has lang prop.
        "jsx-a11y/iframe-has-title": "error",                                            // Enforce iframe elements have a title attribute.
        "jsx-a11y/img-redundant-alt": "error",                                           // Enforce <img> alt prop does not contain the word "image", "picture", or "photo".
        "jsx-a11y/interactive-supports-focus": "error",                                  // Enforce that elements with interactive handlers like onClick must be focusable.
        "jsx-a11y/label-has-for": [ 2, { "required": { "some": [ "nesting", "id" ] } }], // Enforce that <label> elements have the htmlFor prop
        "jsx-a11y/lang": "error",                                                        // Enforce lang attribute has a valid value.
        "jsx-a11y/media-has-caption": "off",                                             // Enforces that <audio> and <video> elements must have a <track> for captions.
        "jsx-a11y/mouse-events-have-key-events": "error",                                // Enforce that onMouseOver/onMouseOut are accompanied by onFocus/onBlur for keyboard-only users.
        "jsx-a11y/no-access-key": "error",                                               // Enforce that the accessKey prop is not used on any element to avoid complications with keyboard commands used by a screenreader.
        "jsx-a11y/no-autofocus": "error",                                                // Enforce autoFocus prop is not used.
        "jsx-a11y/no-distracting-elements": "error",                                     // Enforce distracting elements are not used.
        "jsx-a11y/no-interactive-element-to-noninteractive-role": "error",               // Interactive elements should not be assigned non-interactive roles.
        "jsx-a11y/no-noninteractive-element-interactions": "error",                      // Non-interactive elements should not be assigned mouse or keyboard event listeners.
        "jsx-a11y/no-noninteractive-element-to-interactive-role": "error",               // Non-interactive elements should not be assigned interactive roles.
        "jsx-a11y/no-noninteractive-tabindex": "error",                                  // tabIndex should only be declared on interactive elements.
        "jsx-a11y/no-onchange": "error",                                                 // Enforce usage of onBlur over onChange on select menus for accessibility.
        "jsx-a11y/no-redundant-roles": "error",                                          // Enforce explicit role property is not the same as implicit/default role property on element.
        "jsx-a11y/no-static-element-interactions": "error",                              // Enforce that non-interactive, visible elements (such as <div>) that have click handlers use the role attribute.
        "jsx-a11y/role-has-required-aria-props": "error",                                // Enforce that elements with ARIA roles must have all required attributes for that role.
        "jsx-a11y/role-supports-aria-props": "error",                                    // Enforce that elements with explicit or implicit roles defined contain only aria-* properties supported by that role.
        "jsx-a11y/scope": "error",                                                       // Enforce scope prop is only used on <th> elements.
        "jsx-a11y/tabindex-no-positive": "error"                                         // Enforce tabIndex value is not greater than zero.
    }
};
