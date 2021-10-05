var selects = document.querySelectorAll('.select');

selects.forEach(function (select) {

  var defaultSelect = function () {
    // var element = document.querySelector('.select');
    var choices = new Choices(select, {
      searchEnabled: false,
      itemSelectText: '',
    });
  };

  defaultSelect();
});

