$('.pkg-show').one('click', function () {
  $.getJSON('../packages.json').then(function(pkg) {
    $(".pkg-count").html(pkg.length)
    for (let i = 0; i < pkg.length; i++) {
      var pkgItem = `<li class="list-group-item">
      <i class="fas fa-cube"></i> ` + pkg[i].name + ` &bull;
      <span class="text-muted">` + pkg[i].version + `</span><br>
      ` + pkg[i].description + `
      </li>`;
      $('.pkg-list').append(pkgItem)
      $('.pkg-list').fadeIn()
    }
  });
});
