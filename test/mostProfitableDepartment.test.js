let assert = require("assert");

const mostProfitableDepartment = require ("../mostProfitableDepartment")

describe('mostProfitableDepartment', function () {

    it('should be able to return outdoor as the most profitable department', function () {
        assert.equal('', mostProfitableDepartment('outdoor'));
    });
})