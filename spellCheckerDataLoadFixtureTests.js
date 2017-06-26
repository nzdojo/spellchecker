// This is a fixture testing with data for load.  Similar fixture needing similar code.  TestCase Class per Fixture

"use strict";

var assert = require('assert'); 
var fs = require("fs");
var async = require('async');
var SpellChecker = require('./spellChecker');

describe("Spell Checker Tests, Words loaded from a file", function () {
    
    var words,
        spellChecker;
    
    //1. Module Setup
    
    // Shared Fixture, run once for all tests for an expensive read operation
    before(function () {
        // brute force load of file, simple.  Simple may be too much for the system.  Let's try.  It might mean some design changes somewhere if it fails
        var text = fs.readFileSync("./dict/wordlist.txt").toString();
        words = text.split("\n");
        spellChecker = new SpellChecker(words);
    });
    
    // 2. Module Exercise
    async.each(['xoana', 'superfamilies'], function (wordToCheck, asyncdone) {
        it('Brute force, check all words to see if and when it breaks. Checking ' + wordToCheck, function (done) {
            // 1. Setup
            
            // 2. Exercise
            var isSpeltCorrectly = spellChecker.check(wordToCheck);
            
            // 3. Verify
            assert(isSpeltCorrectly, wordToCheck + ' was not found in the spellChecker');
            
            // 4. Cleanup & Finish
            done();
        });
        asyncdone();
    });
    
    async.each(['xxxx', '!!dd', 'superfreak'], function (wordToCheck, asyncdone) {
        it('These words should not be found. Word ' + wordToCheck, function (done) {
            // 1. Setup
            
            // 2. Exercise
            var notFound = spellChecker.check(wordToCheck);
            
            // 3. Verify
            assert(!notFound, wordToCheck + ' was found in the spellChecker');
            
            // 4. Cleanup & Finish
            done();
        });
        asyncdone();
    });

});