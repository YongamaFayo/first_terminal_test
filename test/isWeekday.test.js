let assert = require("assert");

const isWeekday = require("../isWeekday");

describe('isWeekday', function () {

    it('should return false if day starts with "Sat" or "Sun"', function () {
        assert.equal(false, isWeekday('Sat','Sun'));
    });

    it('should return true if day does not start with "Sat" or "Sun"', function () {
        assert.equal(true, isWeekday('Mon','Tue','Wed','Thur','Fri'));
    });

});