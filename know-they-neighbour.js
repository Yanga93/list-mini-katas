module.exports = function(list) {

  for (var i = 0; i < list.length; i++) {

    var indx = list[i];

    var nextValue = list[i + 1];

    if (list[i] > list[i + 1]) {
      list[i + 1] = list[i];
      list[i] = nextValue;
    }

  }
  return list;
}
