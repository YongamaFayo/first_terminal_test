let assert = require("assert");

const findItemsOver = require("../findItemsOver")


describe('findItemsOver', function () {

    it('should return items that have quantity of over threshold', function () {

        var itemList = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ];

        var results = [
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
        ];
        assert.deepEqual(results, findItemsOver(itemList, 25));
    });

}); 