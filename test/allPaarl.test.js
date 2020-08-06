let assert = require("assert");

const allPaarl = require("../allPaarl");

describe('allPaarl', function () {

    it('should return true if registration start with CJ', function () {
        assert.equal([], allPaarl(", "));
    });

    it('should return false if registration does not start with CJ', function () {
        assert.equal(false, allPaarl('CF 123'));
    });


});