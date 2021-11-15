
let rem = parseInt(window.getComputedStyle(document.querySelector('html')).fontSize);
console.log(rem);

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
    slidesPerView: 3,
    spaceBetween: 2.5 * rem,
    centeredSlides: true,
  pagination: {
        el: '.point__slider .swiper-pagination',
      type: 'fraction',
  },

  
  navigation: {
    nextEl: '.point__slider .swiper-button-next',
    prevEl: '.point__slider .swiper-button-prev',
    },
  
});

document.querySelectorAll('.pricing__radio').forEach(el => {
  el.addEventListener('change', switchPrice)
});

function switchPrice(e) {
    let pricingType = e.target.id.split('-')[1];
    const priceOutput = document.querySelectorAll('.pricing__plan-price');
    const pricesDiscount = document.querySelectorAll('.pricing__plan-sum-discount');
    if (pricingType === 'mounthly') {
        priceOutput[0].innerText = 10;
        priceOutput[1].innerText = 20;
        priceOutput[2].innerText = 40;
        pricesDiscount.forEach(el => el.style.display = 'none');
    }
    else {
        priceOutput[0].innerText = 9;
        priceOutput[1].innerText = 18;
        priceOutput[2].innerText = 35;
        pricesDiscount.forEach(el => el.removeAttribute('style'));
    }
};
// NOTE:faq items

const faqItems = document.querySelectorAll('.faq__item');

faqItems.forEach(el => {
    el.addEventListener('click', faqSlide);
});

function faqSlide(e) {
    const content = this.querySelector('.faq__item-content');
    e.preventDefault();
    if (!this.hasAttribute('open')) {
        faqItems.forEach(item => {
            item.querySelector('.faq__item-content').removeAttribute("style");
        setTimeout(() => {
            item.removeAttribute('open');
            this.setAttribute('open', '');
            this.scrollIntoView({
                blok: "center",
                behavior: 'smooth'
            });
        setTimeout(() => {
            content.style.height = content.scrollHeight + "px";
            content.style.marginTop = "2rem";
        }, 50);
        }, 240);
        });       
   } else {
        content.removeAttribute("style");
        setTimeout(() => {
            this.removeAttribute('open');
        }, 240);
}
}

document.querySelectorAll('.support__tab-btn').forEach(el => {
    el.addEventListener('click', showTabs)
});


function showTabs(e) {
    let tabNo = e.target.dataset.tab_select;
    let thisTab = document.querySelector(`.support__tab[data-tab="${tabNo}"]`);
    const tabs = document.querySelectorAll('.support__tab');
    tabs.forEach(el => {
        el.style.opacity = 0;
        setTimeout(() => {
            el.style.display = "none";
        }, 240);
    });
    setTimeout(() => {
        thisTab.style.display = "block";
        thisTab.style.opacity = 1;
    }, 240);
}
