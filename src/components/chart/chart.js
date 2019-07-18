export default function makeChart(element, options = {}) {
  const $element = $(element);
  const data = $element.data();
  $element
    .circleProgress({ ...data, ...options })
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

document.querySelectorAll('.chart').forEach(makeChart);
