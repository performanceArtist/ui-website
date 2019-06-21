function percent(selector, options = {}) {
  const defaults = {
    value: 0.89,
    startAngle: -Math.PI / 2,
    size: 120,
    thickness: 7,
    fill: '#E75637',
    emptyFill: '#f7ecdb'
  };

  $(selector)
    .circleProgress({ ...defaults, ...options })
    .on('circle-animation-progress', function update(
      event,
      progress,
      stepValue
    ) {
      const value = parseInt(stepValue.toFixed(2).slice(2), 10);
      $(this)
        .find('.chart__text')
        .text(value);
    });
}

export default percent;
