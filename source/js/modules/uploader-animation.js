// анимация (изменение длинны загрузки) происходит после изменений процента загрузки в разметке

// анимация круговой загрузки
var percentageEntity = document.querySelector('.percentage');
var textEntity = document.querySelector('.circle');

var percentage = percentageEntity.textContent;

var x = parseInt(percentage.replace(/[^\d]/g, ''));

var attribute = textEntity.getAttribute('stroke-dasharray');

var attributeValue = attribute.substring(0, 2);

if (x !== attributeValue) {
  textEntity.setAttribute('stroke-dasharray', x + ', 100');
}


// анимация прямой загрузки
var percent = document.querySelector('.uploader__percent');

var level = document.querySelector('.uploader__level');

level.style.width = percent.textContent + '%';
