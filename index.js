function intersperse(arr, item) {
  const result = arr.reduce(
    (accumulator, currentValue, index, array) => [
      ...accumulator,
      currentValue,

      ...(index + 1 === array.length ? [] : [item]),
    ],

    []
  );
  return result;
}

export { intersperse };
