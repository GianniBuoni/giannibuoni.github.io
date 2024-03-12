var $grid = $('.grid').masonry({
  columnWidth: '.grid-sizer',
  itemSelector: '.grid-item',
  percentPosition: true
});

$(function(){
  $grid.imagesLoaded().progress( function() {
    $grid.masonry('layout');
  });
});