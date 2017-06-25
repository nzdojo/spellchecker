var SpellChecker = (function () {
    
    function SpellChecker() {
    }
    
    SpellChecker.prototype.check = function (toCheck) {
        if (toCheck) {
            return ['nick'].indexOf(toCheck);
        }
        else {
            return true;
        }
    };
    
    return SpellChecker;
    
}());

module.exports = SpellChecker;