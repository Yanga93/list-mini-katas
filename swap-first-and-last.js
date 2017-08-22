module.exports = function(list) {
  var firstItem = list[0];
  list[0] = list[list.length -1];
  list[list.length -1] = firstItem;
  return list;
}
