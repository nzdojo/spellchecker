"use strict";

var assert = require('assert'); 
var SpellChecker = require('./spellChecker');

describe("Spell Checker Tests", function () {
    
    var words,
        spellChecker;
    
    //1. Module Setup
    
    before(function () {
        // Words is a Shared Fixture for all tests, needed only once
        words = ["nick"]; 
    });
    
    // Fresh Fixture per test.  
    beforeEach(function () {
        spellChecker = new SpellChecker(words);
    });
    
    // 2. Module Exercise

    it('An empty string is a string that is spelt correctly (in our world)', function (done) {
        // 1. Setup
        var spellChecker = new SpellChecker(words);
        
        // 2. Exercise
        var isSpeltCorrectly = spellChecker.check('');
        
        // 3. Verify
        assert(isSpeltCorrectly, 'An empty string is in fact spelt correctly');
        
        // 4. Cleanup & Finish
        done();
    });
    
    it('A null is spelt correctly (in our world)', function (done) {
        // 1. Setup
        var spellChecker = new SpellChecker(words);
        
        // 2. Exercise
        var isSpeltCorrectly = spellChecker.check(null);
        
        // 3. Verify
        assert(isSpeltCorrectly, 'A null is in fact spelt correctly');
        
        // 4. Cleanup & Finish
        done();
    });
    
    it('A word is spelt correctly', function (done) {
        // 1. Setup
        var spellChecker = new SpellChecker(words);
        
        // 2. Exercise
        var isSpeltCorrectly = spellChecker.check('nick');
        
        // 3. Verify
        assert(isSpeltCorrectly, 'The word is correct');
        
        // 4. Cleanup & Finish
        done();
    });   
    
    it('A word is spelt incorrectly', function (done) {
        // 1. Setup
        var spellChecker = new SpellChecker(words);
        
        // 2. Exercise
        var isNotSpeltCorrectly = spellChecker.check('@@@@');
        
        // 3. Verify
        assert(!isNotSpeltCorrectly, 'The word is incorrect, yet it was returned as correct');
        
        // 4. Cleanup & Finish
        done();
    });  

});