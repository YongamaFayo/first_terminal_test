let assert = require("assert");

const isWeekday = require("../isWeekday");

describe('isWeekday', function () {

    it('should return false if day starts with "Sat"', function () {
        assert.equal(false, isWeekday('Sat'));
    });

    it('should return false if day starts with "Sun"', function () {
        assert.equal(false, isWeekday('Sun'));
    });

    it('should return true if day does not start with "Sat" or "Sun"', function () {
        assert.equal(true, isWeekday('Mon','Tue','Wed','Thur','Fri'));
    });

    it('should return true if day does not start with "Sat" or "Sun"', function () {
        assert.equal(true, isWeekday('Mon'));
    });

    it('should return true if day does not start with "Sat" or "Sun"', function () {
        assert.equal(true, isWeekday('Tue'));
    });

    it('should return true if day does not start with "Sat" or "Sun"', function () {
        assert.equal(true, isWeekday('Fri'));
    });

});