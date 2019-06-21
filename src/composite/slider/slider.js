function standard(selector) {
  const event = new Event('input', {
    bubbles: true,
    cancelable: true
  });

  document.querySelectorAll(selector).forEach(slider => {
    const bubble = slider.querySelector('.bubble');
    const width = slider.offsetWidth;
    const offset = 0.25;
    const input = slider.querySelector('input');

    input.addEventListener('input', function handleInput() {
      const perc = (this.value - this.min) / (this.max - this.min);
      const npos = width * perc - this.value * offset;

      bubble.innerHTML = this.value;
      bubble.style.left = `${npos - 5}px`;
    });

    input.dispatchEvent(event);
  });
}

function withSteps(selector, options = {}) {
  const defaults = {
    value: 50,
    min: 0,
    max: 100,
    step: 25,
    orientation: 'horizontal',
    range: 'min',
    animate: true
  };

  $(selector)
    .slider({ ...defaults, ...options })
    .each(function addSteps() {
      const { options } = $(this).data().uiSlider;
      const values = options.max - options.min;

      for (let i = 0; i <= values; i += options.step) {
        const element = $(`<label>${i}</label>`).css(
          'left',
          `${(i / values) * 100}%`
        );
        $(selector).append(element);
      }
    });
}

export { standard, withSteps };
