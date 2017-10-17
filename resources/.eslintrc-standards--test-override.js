module.exports = {
    "rules": {
        "max-nested-callbacks":     "off",      // our tests are deep like our love
        "newline-per-chained-call": "off",      // keep our tests a bit more compact
        "no-invalid-this":          "off",      // the context of `this` inside mocha functions is fine. Go away.
        "no-magic-numbers":         "off",      // too fussy for test set up
        "no-unused-expressions":    "off",      // allows expect(true).to.be.true;
        "no-restricted-properties": ["error", { // disallow certain properties on certain objects
            "object": "describe",
            "property": "only"
        }, {
            "object": "context",
            "property": "only"
        }, {
            "object": "it",
            "property": "only"
        },
        {
            "object": "describe",
            "property": "skip"
        }, {
            "object": "context",
            "property": "skip"
        }, {
            "object": "it",
            "property": "skip"
        }],
        "object-curly-spacing": "off",       // ignore object spacing, again typically JSON has spaces. We do not. But it's okay!
        "quote-props":          "off",       // ignore quotes on props, fairly common for JSON responses in tests ok!

        "import/default":      "off",        // Its a test... don't need to export
        "import/no-commonjs":  "off",        // Dynamic imports valid in tests
        "import/no-namespace": "off"         // We need this for stubbing imports. Yes... that will break when we move off babel. Sorry future dev!
    }
};
