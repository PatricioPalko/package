exports.intersperse = function (e, r) {
    return e.reduce(
        (e, n, t, s) => [...e, n, ...(t + 1 === s.length ? [] : [r])],
        []
    );
};
// # sourceMappingURL=index.js.map
