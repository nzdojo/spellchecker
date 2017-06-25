"use strict";

var assert = require('assert'); 

describe("Hash Strategy Tests", function () {
    
    //1. Module Setup
    
    // 2. Module Exercise

    it('Empty string hashes to zero', function (done) {
        // 1. Setup
        
        // 2. Exercise
        var hashedValue = hashStrategy.hash('');
        
        // 3. Verify
        assert(hashedValue === 0, 'An empty string hashes to zero');
        
        // 4. Cleanup & Finish
        done();
    });

});