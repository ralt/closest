if (!Node.prototype.matchesSelector) {
    Node.prototype.matchesSelector = function(selector) {
        return this === document.querySelector(selector);
    };
}

function closest(selector, el) {
    if (el.parentNode.matchesSelector(selector)) {
        return el.parentNode;
    }
    else {
        // No TCO, but heh...
        return closest(selector, el.parentNode);
    }
}
