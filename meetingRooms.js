 var canAttendMeetings = function(intervals) {
    if(intervals.length == 0 || intervals.length == 1) return true;
      intervals.sort((a, b) => a[0]-b[0])
    
        for(var i = 1; i<intervals.length; i++) {
           if(intervals[i][0] >= intervals[i-1][0] && intervals[i][0] < intervals[i-1][1])
               return false;
        }
    
        return true;
    };
    console.log(canAttendMeetings([[0,30], [5,10], [15, 20]]))