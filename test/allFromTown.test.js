let assert = require("assert");

const allFromTown = require("../allFromTown");

describe('allFromTown', function () {

    it('It should return all the registration numbers for the town', function () {
        assert.equal(4, allFromTown('CL 123,CY 122,CY 123,CL 155,CY 2112,CA 123,CY 125', "CY"))
    });




})