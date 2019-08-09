import StepsSlider from './steps-slider';

document
  .querySelectorAll('.js-steps-slider__slider')
  .forEach(element => new StepsSlider(element));
