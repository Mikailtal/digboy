

$(document).ready(function() {
      // $("<div class='swiper-slide tranding-slide'></div>").appendTo(".swiper-wrapper");
//       var sli=$('.swiper-wrapper')
//       var slid=$('.swiper-slide tranding-slide')
// for(let i=0;i<7;i++){
//       sli.append(
//   $('<div/>')
//
//     .addClass("swiper-slide tranding-slide")
//
//
// );
// slid.append(
// $('<div/>')
//
// .addClass("tranding-slide-img")
//
// }
//
//
// console.log(sli[0]);
$(".swiper-button-prev ").click(function(){
  if($('.swiper-slide-active').find('.logodesigns').length !== 0){


  $(".social").text("Logo");

    $(".poster").text("designs");
    $(".socialwyt").text("Logo");

      $(".posterwyt").text("designs");

  }
  else {
    $(".social").text("Socialmedia");
    $(".poster").text(" posters");
    $(".socialwyt").text("Socialmedia");
    $(".posterwyt").text(" posters");
  }
})
$(".swiper-button-next ").click(function(){
  if($('.swiper-slide-active').find('.logodesigns').length !== 0){
  $(".social").text("Logo")
  $(".poster").text("designs")
  $(".socialwyt").text("Logo")
  $(".posterwyt").text("designs")
  }
  else {
    $(".social").text("Socialmedia")
    $(".poster").text(" posters")
    $(".socialwyt").text("Socialmedia")
    $(".posterwyt").text(" posters")
  }
})
// $("#tranding").on("swipe"(function(){
//   if($('.swiper-slide-active').find('.logodesigns').length !== 0){
//   $(".social").text("Logo")
//   $(".poster").text("designs")
//
//   }
//   else {
//     $(".social").text("Socialmedia")
//     $(".poster").text(" posters")
//   }
// }))
//
//
// $('.brand1').on("swipeleft",function(){
//   console.log("touch")
// });
//





  });







//
// <div class="swiper-slide tranding-slide">
//   <div class="tranding-slide-img">
//     <img src="portfolio\5.png" alt="Tranding">
//   </div>
//
// </div>

// var slideIndex = 1;
//
//
// showDivs(slideIndex);
//
// function plusDivs(n) {
//   showDivs(slideIndex += n);
// }
//
// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//
//   if (n > x.length) {slideIndex = 1}
//   if (n < 1)
//   {slideIndex = x.length;
//
//   }
//
//
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//
//   x[slideIndex-1].style.display = "block";
// console.log(slideIndex-1);
// }

//
// $(document).ready(function(){
// $(".b").click(function(){
//     $(this).toggleClass("b");
//     $(this).toggleClass("b-selected");
//  });
// });
//
// var elem = document.querySelector('.carousel');
// var flkty = new Flickity( elem, {
//   // options
//   cellalign: 'right',
//   pageDots: false,
//   groupCells: '20%',
//   selectedAttraction: 0.03,
//   friction: 0.15
// });
//
// var flkty = new Flickity( '.carousel', {
//   // options
// });







var TrandingSlider = new Swiper('.tranding-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});
