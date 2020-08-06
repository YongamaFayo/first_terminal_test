module.exports = function (reg,loc) {



    if (reg.startsWith(loc) || reg.endsWith(loc)) {
        return true
    }
    else {
        return false
    }
}
