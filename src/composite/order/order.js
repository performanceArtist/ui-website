(function init() {
  const steps = document.querySelectorAll('.order__stage .stage ul li');

  if (!steps || steps.length !== 4) return;

  document.querySelector('.dropdown select').addEventListener('change', () => {
    steps[0].setAttribute('class', 'done');
    steps[1].setAttribute('class', 'current');
    document.querySelector('.order__options').style.visibility = 'initial';
  });

  document.querySelector('.order__crust').addEventListener('change', () => {
    steps[1].setAttribute('class', 'done');
    steps[2].setAttribute('class', 'current');
    document.querySelector('.order__address').style.visibility = 'initial';
  });

  const address = document.querySelector('.order__address input');

  address.addEventListener('input', event => {
    const isValid = /^[a-zA-Z0-9 ]{5,}$/.test(event.target.value);

    if (isValid) {
      steps[2].setAttribute('class', 'done');
      steps[3].setAttribute('class', 'done');
      document.querySelector('.order__submit').style.visibility = 'initial';
    } else {
      steps[2].setAttribute('class', 'current');
      steps[3].setAttribute('class', '');
      document.querySelector('.order__submit').style.visibility = 'hidden';
    }
  });
})();
