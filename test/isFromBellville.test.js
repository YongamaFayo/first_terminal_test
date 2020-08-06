let assert = require("assert");

const isFromBellville = require("../isFromBellville");

describe('isFromBellville', function () {

    it('should return true if registration starts with CY', function () {
        assert.equal(true, isFromBellville('CY 123'));
    });

    it('should return false if registration does not start with CY', function () {
        assert.equal(false, isFromBellville('CF 123'));
    });


});