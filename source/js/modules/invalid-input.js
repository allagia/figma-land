var invalidClassName = 'invalid';
var inputs = document.querySelectorAll('input');

inputs.forEach(function (input) {
  input.addEventListener('invalid', function () {
    input.classList.add(invalidClassName);
  });

  input.addEventListener('input', function () {
    if (input.validity.valid) {
      input.classList.remove(invalidClassName);
    }
  });
});
