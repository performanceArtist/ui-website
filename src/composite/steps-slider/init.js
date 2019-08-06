import StepsSlider from './steps-slider';

document
  .querySelectorAll('.steps-slider__slider')
  .forEach(element => new StepsSlider(element));
