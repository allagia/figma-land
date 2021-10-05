var tabs = document.querySelectorAll('.tabs__item--general');
var tabsIcon = document.querySelectorAll('.tabs__item--icon');
var tabsSize = document.querySelectorAll('.tabs__item--size');
var tabsNav = document.querySelectorAll('.tabs-nav');


var addActiveClass = function (array) {
  if (array) {
    var removeActiveClass = function () {
      array.forEach(function (tab) {
        tab.classList.remove('active');
      });
    };

    array.forEach(function (tab) {
      tab.addEventListener('click', function (evt) {
        evt.preventDefault();
        removeActiveClass(array);
        tab.classList.add('active');
      });
    });
  }

};

tabsNav.forEach(function (item) {
  var tabsItem = item.querySelectorAll('.tab');
  addActiveClass(tabsItem);
});


addActiveClass(tabs);
addActiveClass(tabsIcon);
addActiveClass(tabsSize);

