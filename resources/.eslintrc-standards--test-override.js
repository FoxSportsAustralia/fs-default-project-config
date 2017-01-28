module.exports = {
    "rules": {
        "max-nested-callbacks":     "off",     // our tests are deep like our love
        "newline-per-chained-call": "off",     // keep our tests a bit more compact
        "no-invalid-this":          "off",     // the context of `this` inside mocha functions is fine. Go away.
        "no-magic-numbers":         "off",     // too fussy for test set up
        "no-unused-expressions":    "off",     // allows expect(true).to.be.true;
        "quote-props":              "off",     // ignore quotes on props, fairly common for JSON responses in tests ok!
        "object-curly-spacing":     "off"      // ignore object spacing, again typically JSON has spaces. We do not. But it's okay!
    }
};
