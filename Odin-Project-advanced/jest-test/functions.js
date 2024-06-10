function sum(a, b) {
  return a + b;
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = { sum, capitalize };
