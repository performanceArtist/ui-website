export default function ripple() {
  let cleanUp;
  let i;
  let len;
  let ripple;
  let rippleContainer;
  let ripples;
  let showRipple;

  const debounce = function de(func, delay) {
    let inDebounce;
    inDebounce = undefined;
    return function () {
      let args; let
        context;
      context = this;
      args = arguments;
      clearTimeout(inDebounce);
      return inDebounce = setTimeout(() => func.apply(context, args), delay);
    };
  };

  showRipple = function (e) {
    let pos; let ripple; let rippler; let size; let style; let x; let
      y;
    ripple = this;
    rippler = document.createElement('span');
    size = ripple.offsetWidth;
    pos = ripple.getBoundingClientRect();
    x = e.pageX - pos.left - (size / 2);
    y = e.pageY - pos.top - (size / 2);
    // console.log(x, y, e.pageY, pos.top, document.body.scrollTop);
    y = 0;
    style = `top:${y}px; left: ${x}px; height: ${size}px; width: ${size}px;`;
    ripple.rippleContainer.appendChild(rippler);
    return rippler.setAttribute('style', style);
  };

  cleanUp = function () {
    while (this.rippleContainer.firstChild) {
      this.rippleContainer.removeChild(this.rippleContainer.firstChild);
    }
  };

  ripples = document.querySelectorAll('[ripple]');

  for (i = 0, len = ripples.length; i < len; i++) {
    ripple = ripples[i];
    rippleContainer = document.createElement('div');
    rippleContainer.className = 'ripple--container';
    ripple.addEventListener('mousedown', showRipple);
    ripple.addEventListener('mouseup', debounce(cleanUp, 2000));
    ripple.rippleContainer = rippleContainer;
    ripple.appendChild(rippleContainer);
  }
}
