function debounce(func, delay) {
  let inDebounce;
  return function newDebounce(...args) {
    const context = this;
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func.apply(context, args), delay);
    return inDebounce;
  };
}

function showRipple(e) {
  const target = e.currentTarget;
  const rippler = document.createElement('span');
  rippler.className = 'button__rippler';
  const size = target.offsetWidth;
  const pos = target.getBoundingClientRect();
  const x = e.pageX - pos.left - size / 2;
  const y = e.pageY - pos.top - size / 2 - window.scrollY;
  const style = `top: ${y}px; left: ${x}px; height: ${size}px; width: ${size}px;`;
  target.rippleContainer.appendChild(rippler);
  return rippler.setAttribute('style', style);
}

function cleanUp() {
  while (this.rippleContainer.firstChild) {
    this.rippleContainer.removeChild(this.rippleContainer.firstChild);
  }
}

export default function ripple() {
  const ripples = document.querySelectorAll('.button_ripple');

  ripples.forEach(element => {
    const rippleContainer = document.createElement('div');
    rippleContainer.className = 'button__ripple-container';
    element.addEventListener('mousedown', showRipple);
    element.addEventListener('mouseup', debounce(cleanUp, 2000));
    element.rippleContainer = rippleContainer;
    element.appendChild(rippleContainer);
  });
}
