function debounce(func, delay) {
  let inDebounce;
  return function newDebounce(...args) {
    const context = this;
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func.apply(context, args), delay);
    return inDebounce;
  };
}

function showRipple(event) {
  const target = event.currentTarget;
  const rippler = document.createElement('span');
  rippler.className = 'button__rippler';
  const size = target.offsetWidth;
  const pos = target.getBoundingClientRect();
  const x = event.pageX - pos.left - size / 2;
  const y = event.pageY - pos.top - size / 2 - window.scrollY;
  const style = `top: ${y}px; left: ${x}px; height: ${size}px; width: ${size}px;`;
  target.rippleContainer.appendChild(rippler);
  return rippler.setAttribute('style', style);
}

function cleanUp() {
  while (this.rippleContainer.firstChild) {
    this.rippleContainer.removeChild(this.rippleContainer.firstChild);
  }
}

document.querySelectorAll('.button_ripple').forEach(element => {
  const rippleContainer = document.createElement('div');
  rippleContainer.className = 'button__ripple-container';
  element.addEventListener('mousedown', showRipple);
  element.addEventListener('mouseup', debounce(cleanUp, 2000));
  element.rippleContainer = rippleContainer;
  element.appendChild(rippleContainer);
});
