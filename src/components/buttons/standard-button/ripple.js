export default function ripple() {
  let i;
  let len;
  let rippleContainer;

  function debounce(func, delay) {
    let inDebounce;
    inDebounce = undefined;
    return function ndebounce(...args) {
      const context = this;
      clearTimeout(inDebounce);
      inDebounce = setTimeout(() => func.apply(context, args), delay);
      return inDebounce;
    };
  }

  function showRipple(e) {
    const that = this;
    const rippler = document.createElement('span');
    const size = that.offsetWidth;
    const pos = that.getBoundingClientRect();
    const x = e.pageX - pos.left - (size / 2);
    const y = e.pageY - pos.top - (size / 2) - window.scrollY;
    const style = `top:${y}px; left: ${x}px; height: ${size}px; width: ${size}px;`;
    that.rippleContainer.appendChild(rippler);
    return rippler.setAttribute('style', style);
  }

  function cleanUp() {
    while (this.rippleContainer.firstChild) {
      this.rippleContainer.removeChild(this.rippleContainer.firstChild);
    }
  }

  const ripples = document.querySelectorAll('[ripple]');

  for (i = 0, len = ripples.length; i < len; i += 1) {
    const cur = ripples[i];
    rippleContainer = document.createElement('div');
    rippleContainer.className = 'ripple--container';
    cur.addEventListener('mousedown', showRipple);
    cur.addEventListener('mouseup', debounce(cleanUp, 2000));
    cur.rippleContainer = rippleContainer;
    cur.appendChild(rippleContainer);
  }
}
