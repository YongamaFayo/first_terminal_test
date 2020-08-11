let assert = require("assert");

const findItemsOver20 = require("../findItemsOver20");


describe('findItemsOver20', function () {

    it('should return items that have quantity of over 20', function () {

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
        assert.deepEqual(results, findItemsOver20(itemList, 20));

        
    });

});
