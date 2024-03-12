let $grid = $('.grid').masonry({
    columnWidth: '.grid-sizer',
    itemSelector: '.grid-item',
    percentPosition: true
  })

let msnry = $grid.data('masonry');

//$grid.imagesLoaded( function() {
//   $grid.removeClass('are-images-unloaded');
//    $grid.masonry( 'option', { itemSelector: '.grid-item' });
//    let $items = $grid.find('.grid-item');
//    $grid.masonry( 'appended', $items );
//  });