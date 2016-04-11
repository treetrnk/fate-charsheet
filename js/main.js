angular.module('fatecoreApp', [])
  .controller('fatecoreCon', function() {
    var fatecore = this;
    fatecore.pstress = [1,2];
    fatecore.mstress = [1,2];

    fatecore.plus = function(stress) {
      if ( fatecore[stress].length < 5 ) {
        fatecore[stress].push(fatecore[stress].length + 1);
      };
    };

    fatecore.minus = function(stress) {
      if (fatecore[stress].length > 0) {
        fatecore[stress].splice(-1,1);
      };
    };
  });

