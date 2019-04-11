require('jquery-circle-progress');

//multiple colors
(function() {
    var _originalInitFill = $.circleProgress.defaults.initFill;
    
    $.circleProgress.defaults.initFill = function() {
        _originalInitFill.apply(this, arguments);
        
        if (this.fill.sectors) {
            var s = this.size,
                r = s / 2,
                sa = this.startAngle;
            
            var bg = $('<canvas>')[0];
            bg.width = s;
            bg.height = s;
            
            var lastValue = 0,
                ctx = bg.getContext('2d');
            
            for (var i = 0; i < this.fill.sectors.length; i++) {
                var sector = this.fill.sectors[i],
                    currentColor = sector[0],
                    currentValue = sector[1];
  
                ctx.beginPath();
                ctx.moveTo(r, r);
                ctx.arc(r, r, r, sa + 2 * lastValue * Math.PI, sa + 2 * currentValue * Math.PI);
                 ctx.moveTo(r, r);
                ctx.fillStyle = currentColor;
                ctx.fill();
  
                lastValue = currentValue;
            }
  
            this.arcFill = this.ctx.createPattern(bg, 'no-repeat');
        }
    };
})();