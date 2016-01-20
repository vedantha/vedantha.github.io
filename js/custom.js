// $('#lightSlider, #lightSlider1, #lightSlider2, #lightSlider3, #lightSlider4').lightSlider({
//     gallery: true,
//     item: 1,
//     loop:true,
//     slideMargin: 0,
//     thumbItem: 9,
//     pager: true,
//     currentPagerPosition: 'middle'
// });
$('#lightSlider, #lightSlider1, #lightSlider2, #lightSlider3, #lightSlider4').lightSlider({
     gallery:true,
        item:1,
        loop:true,
        thumbItem:9,
        slideMargin:0,
        enableDrag: false,
        currentPagerPosition:'left',
        onSliderLoad: function(el) {
            el.lightGallery({
                selector: '#lightSlider .lslide, #lightSlider1 .lslide, #lightSlider2 .lslide, #lightSlider3 .lslide, #lightSlider4 .lslide'
            });
        }
});

$('#lightSlider-p31, #lightSlider-p32').lightSlider({
     gallery:true,
        item:1,
        loop:true,
        thumbItem:9,
        slideMargin:0,
        enableDrag: false,
        currentPagerPosition:'left',
        onSliderLoad: function(el) {
            el.lightGallery({
                selector: '#lightSlider-p31 .lslide, #lightSlider-p32 .lslide'
            });
        }
});

var h_height = $(window).height() - 20;
// $('header').height(h_height);