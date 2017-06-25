
var HashStrategy = (function () {
        
    function HashStrategy(words) {
    }
    
    HashStrategy.prototype.hashIndices = function (toHash) {
        if (!toHash) 
            return [0, 0, 0];
    };
    
    return HashStrategy;
    
}());

module.exports = HashStrategy;