module.exports = function (regs, townString) {

    var list = regs.split(",")

    var results = []

    for (var i = 0; i < list.length; i++) {
        var trimmed = list[i].trim();
        if (trimmed.startsWith(townString)) {
            results.push(trimmed)
        }
    }
    return results.length
}






