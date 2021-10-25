//NOTE: top bar show/hide function

function topBarHide() {
    let prevScrollPos = window.pageYOffset;
    window.addEventListener(
        "scroll", () => {
            let currentScollPos = window.pageYOffset;
            const topBar = document.querySelector(".topbar");
            if (prevScrollPos > currentScollPos || prevScrollPos <= 0) {
                topBar.removeAttribute("style");
             }
            else {
                topBar.style.transform = "translateY(-100%)";
            }
            
            prevScrollPos = currentScollPos;
  }  
 )
};
topBarHide();
//!NOTE: top bar show/hide function

AOS.init();


const yogaSlider = new Swiper('.yoga__slider .swiper', {
    autoplay: {
        delay:5000
    },
    speed:1000,
   pagination: {
          el: ".yoga__slider .swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".yoga__slider .swiper-button-next",
          prevEl: ".yoga__slider .swiper-button-prev",
        },
});


const pointSlider = new Swiper('.point__slider .swiper', {

  pagination: {
        el: '.point__slider .swiper-pagination',
      type: 'fraction',
  },

  
  navigation: {
    nextEl: '.point__slider .swiper-button-next',
    prevEl: '.point__slider .swiper-button-prev',
    },
  
});