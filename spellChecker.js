var SpellChecker = (function () {
    
    function SpellChecker() {
    }
    
    SpellChecker.prototype.check = function (toCheck) {
        if (toCheck) {
            return ['nick'].indexOf(toCheck) > -1;
        }
        else {
            return true;
        }
    };
    
    return SpellChecker;
    
}());

module.exports = SpellChecker;