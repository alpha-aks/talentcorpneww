const testSlide = ()=>{
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        grabCursor:true,
        loop:true
    });
}
testSlide()


const barAnim = () => {
    let bar = document.querySelector('.bar')
    let inrBar = document.querySelector('.inr-bar')
    let circle = document.querySelector('.circle')
    let dot = document.querySelector('.dot')
    let rating = document.querySelector('.rating')
    let inrBarTwo = document.querySelector('.inr-bar-two')

    bar.addEventListener('mouseenter', () => {
        bar.style.backgroundColor = "#fff"
        inrBar.style.backgroundColor = "#111"
        circle.style.backgroundColor = "#fff"
        dot.style.border = "2px solid #111"
        rating.style.color = "#fff"
        inrBarTwo.style.color = "#111"
    })
    bar.addEventListener('mouseleave', () => {
        bar.style.backgroundColor = "transparent"
        inrBar.style.backgroundColor = "#fff"
        circle.style.backgroundColor = "#111"
        dot.style.border = "2px solid #fff"
        rating.style.color = "#111"
        inrBarTwo.style.color = "#fff"
    })
}
barAnim()

function cursorAnim() {
    var cursor = document.querySelector("#cursor");
    var main = document.querySelector('main');

    function updateCursorPosition(e) {
        var posX = e.clientX + window.scrollX;
        var posY = e.clientY + window.scrollY;

        cursor.style.left = posX + 'px';
        cursor.style.top = posY + 'px';
    }

    main.addEventListener('mousemove', updateCursorPosition);

    window.addEventListener('scroll', updateCursorPosition);
}
cursorAnim();

gsap.fromTo(
    ".loading-page",
    { opacity: 1 },
    {
      opacity: 0,
      display: "none",
      duration: 1.5,
      delay: 3.5,
    }
  );
  
  gsap.fromTo(
    ".logo-name",
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 2,
      delay: 0.5,
    }
  );