(function addColorFeature() {
  const originalInitFill = $.circleProgress.defaults.initFill;

  $.circleProgress.defaults.initFill = function init(...args) {
    originalInitFill.apply(this, args);

    if (this.fill.sectors) {
      const { size, startAngle } = this;
      const radius = size / 2;

      const canvas = $('<canvas>')[0];
      canvas.width = size;
      canvas.height = size;

      const context = canvas.getContext('2d');

      let lastValue = 0;

      for (let i = 0; i < this.fill.sectors.length; i += 1) {
        const sector = this.fill.sectors[i];
        const currentColor = sector[0];
        const currentValue = sector[1];

        context.beginPath();
        context.moveTo(radius, radius);
        context.arc(
          radius,
          radius,
          radius,
          startAngle + 2 * lastValue * Math.PI,
          startAngle + 2 * currentValue * Math.PI
        );
        context.moveTo(radius, radius);
        context.fillStyle = currentColor;
        context.fill();

        lastValue = currentValue;
      }

      this.arcFill = this.ctx.createPattern(canvas, 'no-repeat');
    }
  };
})();
