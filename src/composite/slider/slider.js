(function standard(selector) {
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
})('.slider');

class WithSteps {
  constructor($element) {
    this.data = $element.data();
    this.$element = $element.slider(this.data);
    this.addSteps();
  }

  addSteps() {
    const { max, min, step } = this.data;
    const length = max - min;

    for (let i = 0; i <= length; i += step) {
      const label = $(`<label>${i + min}</label>`).css(
        'left',
        `${(i / length) * 100}%`
      );
      this.$element.append(label);
    }
  }
}

document.querySelectorAll('.steps-slider').forEach(element => {
  new WithSteps($(element));
});
