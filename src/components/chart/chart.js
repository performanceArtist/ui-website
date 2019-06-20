function percent(selector, opt = {}) {
  const def = {
    value: 0.89,
    startAngle: -Math.PI / 2,
    size: 120,
    thickness: 7,
    fill: '#E75637',
    emptyFill: '#f7ecdb'
  };

  $(selector)
    .circleProgress({ ...def, ...opt })
    .on('circle-animation-progress', function update(e, progress, stepValue) {
      const value = parseInt(stepValue.toFixed(2).slice(2), 10);
      $(this)
        .find('.chart__text')
        .text(value);
    });
}

export default percent;
