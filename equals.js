module.exports = {
  same: function(a, b) {
    var v;
    if ((a != null) && (b != null)) {
      v = a === b;
    } else {
      v = false;
    }
    return v;
  },
  different: function(a, b) {
    var v;
    if ((a != null) && (b != null)) {
      v = a !== b;
    } else {
      v = false;
    }
    return v;
  },
  notnull: function(i) {
    return i != null;
  }
};
