module.exports = function(list) {
  var firstItem = list[0];
  list[0] = list[1];
  list[1] = firstItem;
  return list;
}
