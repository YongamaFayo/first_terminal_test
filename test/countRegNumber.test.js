let assert = require("assert");

const countRegNumber = require("../countRegNumber");

describe('countRegNumber', function () {

    it('should be able to count the number of registrations', function () {

        assert.equal(3, countRegNumber('CA 182736,CY 523519,CJ 812328'));
    });

    it('should return true if the number of registrations exceed 3', function () {

        assert.equal( true, countRegNumber('CA 182736,CY 523519,CJ 812328,CA 5823'));
    });

    

    

});