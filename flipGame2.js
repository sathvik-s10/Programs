var canWin = function(s) {
    if (s == null || s.length < 2) {
      return false;
    }
      
    for (var i = 0; i < s.length - 1; i++) {
      if (s.startsWith("++", i)) {
        var t = s.substring(0, i) + "--" + s.substring(i + 2);
        
        if (!canWin(t)) {
          return true;
        }
      }
    }
      
    return false;
  }
  canWin('+++++++++')