function standard(selector) {
  const event = new Event('input', {
    bubbles: true,
    cancelable: true
  });

  document.querySelectorAll(selector).forEach(el => {
    const bubble = el.querySelector('.bubble');
    const width = el.offsetWidth;
    const offset = 0.25;
    const input = el.querySelector('input');

    input.addEventListener('input', function() {
      const perc = (this.value - this.min) / (this.max - this.min);
      const npos = width * perc - this.value * offset;

      bubble.innerHTML = this.value;
      bubble.style.left = `${npos - 5}px`;
    });

    input.dispatchEvent(event);
  });
}

function withSteps(selector, opt = {}) {
  const def = {
    value: 50,
    min: 0,
    max: 100,
    step: 25,
    orientation: 'horizontal',
    range: 'min',
    animate: true
  };

  $(selector)
    .slider(Object.assign(def, opt))
    .each(function() {
      const opt = $(this).data().uiSlider.options;
      const vals = opt.max - opt.min;

      for (let i = 0; i <= vals; i += opt.step) {
        const el = $(`<label>${i}</label>`).css('left', `${(i / vals) * 100}%`);
        $(selector).append(el);
      }
    });
}

export { standard, withSteps };
