// import noUiSlider from '../vendor/nouislider.js';

// запуск ползунка для фильтра Розничная цена
var slider = document.getElementById('slider');
var sliderTwoHandles = document.getElementById('slider-two-handels');
var slider2 = document.getElementById('slider-2');
var slider3 = document.getElementById('slider-3');
var slider4 = document.getElementById('slider-4');

if (slider) {
  noUiSlider.create(slider, {
    start: [50],
    connect: 'lower',
    range: {
      'min': [1],
      'max': [100],
    },
  });
}


if (sliderTwoHandles) {
  noUiSlider.create(sliderTwoHandles, {
    start: [15, 34],
    connect: true,
    range: {
      'min': [1],
      'max': [100],
    },
  });
}



if (slider3) {
  noUiSlider.create(slider3, {
    start: [15, 34],
    connect: true,
    tooltips: [true, true],
    format: wNumb({
      decimals: 0,
    }),
    range: {
      'min': [1],
      'max': [100],
    },
  });
}



if (slider2) {
  noUiSlider.create(slider2, {
    start: [50],
    connect: 'lower',
    tooltips: [true],
    format: wNumb({
      decimals: 0,
    }),
    range: {
      'min': [1],
      'max': [100],
    },
  });
}


if (slider4) {
  noUiSlider.create(slider4, {
    start: [15, 34],
    connect: true,
    tooltips: [true, true],
    format: wNumb({
      decimals: 0,
    }),
    range: {
      'min': [1],
      'max': [100],
    },
  });
}
