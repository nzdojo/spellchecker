
var HashStrategy = (function () {
        
    function HashStrategy(words) {
    }
    
    HashStrategy.prototype.hash = function (toHash) {
        if (!toHash) 
            return 0;
    };
    
    return HashStrategy;
    
}());

module.exports = HashStrategy;