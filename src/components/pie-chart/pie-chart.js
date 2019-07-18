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

export default function makePieChart(element, options) {
  const $element = $(element);
  const data = $element.data();
  $element.circleProgress({ ...data, ...options });
}

document.querySelectorAll('.pie-chart').forEach(makePieChart);
