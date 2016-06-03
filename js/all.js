
/* File: custom.js */
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
        autoWidth: false,
        currentPagerPosition:'middle',
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
/* File: main.js */
/* 
 _____   _           _         _                        _                  
|_   _| | |         | |       | |                      | |                 
  | |   | |__   __ _| |_ ___  | |_ ___  _ __ ___   __ _| |_ ___   ___  ___ 
  | |   | '_ \ / _` | __/ _ \ | __/ _ \| '_ ` _ \ / _` | __/ _ \ / _ \/ __|
 _| |_  | | | | (_| | ||  __/ | || (_) | | | | | | (_| | || (_) |  __/\__ \
 \___/  |_| |_|\__,_|\__\___|  \__\___/|_| |_| |_|\__,_|\__\___/ \___||___/

Oh nice, welcome to the js file of dreams.
Enjoy responsibly!
@ihatetomatoes

*/

$(window).load(function() {
	
	// setTimeout(function(){
		$('body').addClass('loaded');
		$('h1').css('color','#222222');
	// }, 3000);
	// adding a new comment
});