/**
 * Flatten nested arrays
 *
 * @param {Array|*} arr
 * @return {Array} flat array
 */

function flatten(arr) {
  if (!Array.isArray(arr)) return arr;
  var out = [];
  arr.forEach(function(item) {
    out = out.concat(flatten(item));
  });
  return out;
}

/**
 * Expose
 */

exports = module.exports = flatten;