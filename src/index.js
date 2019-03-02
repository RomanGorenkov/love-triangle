/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var count = 0;
  for (var i = 0; i < preferences.length; i++) {
    var firstLove = preferences[i];
    var secondLove = preferences[firstLove - 1];
    var thirdLove = preferences[secondLove - 1];
  	if (i + 1 == thirdLove && secondLove > i && firstLove - 1 > i) {
  		count++;
  	}
  }
  return count;
};
