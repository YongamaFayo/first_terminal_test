let assert = require("assert");

const yearsAgo = require("../yearsAgo");

describe('yearsAgo', function () {

    it('should take a year and return how many years ago that was', function () {
        assert.equal(2016, yearsAgo('4'));
    });

    // it('should return false if registration does not start with CY', function () {
    //     assert.equal(false, yearsAgo('CF 123'));
    // });


});