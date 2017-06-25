var SpellChecker = (function () {
    
    function SpellChecker() {
    }
    
    SpellChecker.prototype.check = function (toCheck) {
        return toCheck === '1';
    };
    
    return SpellChecker;
    
}());

module.exports = SpellChecker;