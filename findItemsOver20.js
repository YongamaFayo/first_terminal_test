module.exports = function (items, threshold) {

    console.log(items)
    var total = []
    for (var i = 0; i < items.length; i++) {
        if (items[i].qty > 20) {
            total.push(items[i])
        }
    }
    return total


}


