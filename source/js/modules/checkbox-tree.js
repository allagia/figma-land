var tableWithCheckbox = document.querySelector('.table--with-checkbox');
var mainInput = tableWithCheckbox.querySelector('input[name^=all');

function checkAll(obj) {
  var nodes = tableWithCheckbox.querySelectorAll('input[name^=name');

  for (var i = 0; i < nodes.length; i++) {
    nodes[i].onclick = function () {
      var allChecked = tableWithCheckbox.querySelectorAll('input[name^=name]:checked').length;
      mainInput.checked = allChecked === nodes.length;
      mainInput.indeterminate = allChecked > 0 && allChecked < nodes.length;
    };
  }

  [].forEach.call(nodes, function (elem) {
    elem.checked = obj.checked;
  });

}

mainInput.addEventListener('change', function () {
  checkAll(mainInput);
});
