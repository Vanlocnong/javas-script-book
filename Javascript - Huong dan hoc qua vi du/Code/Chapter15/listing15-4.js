if (typeof document.styleSheets != "undefined") {
    var stylerules;
    if (typeof document.styleSheets[0].rules != "undefined") {
        stylerules = document.styleSheets[0].rules;
    } else {
        stylerules = document.styleSheets[0].cssRules;
    }
}
