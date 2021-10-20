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

AOS.init();
