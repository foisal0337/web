function findMax() {
    var max = Infinity;
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) max = arguments[i]:
    }
    return max;
}

findMax(12, 3, 4, 56, 7, 89, 6);