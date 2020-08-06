module.exports = function (regs) {

    var list = regs.split(", ");
    var results = []
    for (var i = 0; i < list.length; i++) {
        if (list[i].startsWith("CJ")) {
            results.push(list[i])
        }
    }
    return results
}