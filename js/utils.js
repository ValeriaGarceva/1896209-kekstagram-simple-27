function getRandomIntInclusive (a, b) {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function testCommentLength (string, length) {
  return string.length <= length;
}

export { getRandomIntInclusive, testCommentLength};
