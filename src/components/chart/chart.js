require('jquery-circle-progress');

// multiple colors
(function addColorFeature() {
  const _originalInitFill = $.circleProgress.defaults.initFill;

  $.circleProgress.defaults.initFill = function() {
    _originalInitFill.apply(this, arguments);

    if (this.fill.sectors) {
      const s = this.size;
      const r = s / 2;
      const sa = this.startAngle;

      const bg = $('<canvas>')[0];
      bg.width = s;
      bg.height = s;

      let lastValue = 0;
      const ctx = bg.getContext('2d');

      for (let i = 0; i < this.fill.sectors.length; i++) {
        const sector = this.fill.sectors[i];
        const currentColor = sector[0];
        const currentValue = sector[1];

        ctx.beginPath();
        ctx.moveTo(r, r);
        ctx.arc(
          r,
          r,
          r,
          sa + 2 * lastValue * Math.PI,
          sa + 2 * currentValue * Math.PI
        );
        ctx.moveTo(r, r);
        ctx.fillStyle = currentColor;
        ctx.fill();

        lastValue = currentValue;
      }

      this.arcFill = this.ctx.createPattern(bg, 'no-repeat');
    }
  };
})();

function percent(selector, opt = {}) {
  const def = {
    value: 0.89,
    startAngle: -Math.PI / 2,
    size: 120,
    thickness: 7,
    fill: '#E75637'
  };

  $(selector)
    .circleProgress(Object.assign(def, opt))
    .on('circle-animation-progress', function(e, progress, stepValue) {
      $(this)
        .find('.chart__text')
        .text(stepValue.toFixed(2).substr(2));
    });
}

function pie(selector, opt = {}) {
  const def = {
    value: 1,
    startAngle: -Math.PI / 2,
    size: 120,
    thickness: 22,
    fill: {
      sectors: [
        ['#747474', 0.3],
        ['#E75637', 0.5],
        ['#4EB7A8', 0.8],
        ['#E6E6E6', 1.0]
      ]
    }
  };

  $(selector).circleProgress(Object.assign(def, opt));
}

export { percent, pie };
