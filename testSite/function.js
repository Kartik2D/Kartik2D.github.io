function mason() {
  var grid = document.querySelector('.grid');
  var msnry = new Masonry( grid, {
    itemSelector: '.grid-item',
    columnWidth: ".grid-size",
    percentPosition: true,
  });
  var msnry = new Masonry( '.grid', {
  });
}

var modal = document.getElementById(modelId);

function modalOn(modelId) {
  modal = document.getElementById(modelId);
  var modalBg = document.getElementById('modalBack');
  modal.style.display = "block";
  modal.className += " animated bounceIn"
  modalBg.style.display = "block";
  console.log(modal);
}
function modalOff() {
  var modalBg = document.getElementById('modalBack');
  modal.style.display = "none";
  modalBg.style.display = "none";
}
