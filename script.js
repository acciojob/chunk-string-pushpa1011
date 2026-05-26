function stringChop(str, size) {
  // Convert size to number
  size = Number(size);

  // Edge cases
  if (!str) return [];
  if (!size || size <= 0) return [];

  let result = [];

  for (let i = 0; i < str.length; i += size) {
    result.push(str.substring(i, i + size));
  }

  return result;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
