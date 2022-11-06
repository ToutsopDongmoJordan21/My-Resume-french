angular
  .module("myApp", ["duScroll"])
  .controller("MyCtrl", function ($scope, $document) {
    $scope.toTheTop = function () {
      $document.scrollTop(0, 5000);
    };
    var about = angular.element(document.getElementById("about"));
    $scope.toSection2 = function () {
      $document.scrollTo(about, 0, 1000);
    };
  });


  // if (
  //   "IntersectionObserver" in window &&
  //   "IntersectionObserverEntry" in window &&
  //   "intersectionRatio" in window.IntersectionObserverEntry.prototype
  // ) {
  // let observer = new IntersectionObserver(entries => {
  //   if (entries[0].boundingClientRect.y < 0) {
  //     document.body.classList.add("animation");
  //   } else {
  //     document.body.classList.remove("animation");
  //   }
  // });
  // observer.observe(document.querySelector("#skills"));
  // }
//   element = $("#skills").offset().top;
//  $(window).scroll(function(){
//    y = $(window).scrollTop();
//    $('.animation').html(y);
//     if (y >= element){
//       document.body.classList.add("animation");
//     }else{
//       document.body.classList.remove("animation");
//     }
//  });
//  $(document).ready(function(){
//   $(window).scroll(function(){
//       var scroll = $(window).scrollTop();
//       if (scroll > 800) {
//         document.body.classList.add("animation");
//       }

//       else{
//         document.body.classList.remove("animation");
//       }
//   })
// });

// Reference: http://www.html5rocks.com/en/tutorials/speed/animations/

// let last_known_scroll_position = 500;
// let animate = false;


// window.addEventListener('scroll', function(e) {
//   last_known_scroll_position = window.scrollY;

//   if (!ticking) {
//     window.requestAnimationFrame(function() {
//       animate = false;
//     });

//     animate = true;
//   }
// });