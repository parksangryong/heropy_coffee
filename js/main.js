const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
const badgeEl = document.querySelector('header .badges');
const fadeEls = document.querySelectorAll('.visual .fade-in');
const promotionEl = document.querySelector('section.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');

searchEl.addEventListener('click', function(){
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});

window.addEventListener('scroll', function(){
    if(this.window.scrollY > 500){
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        });
    }else{
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        });
    }
});

fadeEls.forEach(function(fadeEl, index){
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .7,
        opacity: 1
    });
});

const swiper_n = new Swiper('.notice .swiper', {
    direction: 'vertical',  //수직슬라이드
    autoplay: true,
    loop: true
});

const swiper_p = new Swiper('.promotion .swiper', {
    autoplay: true,
    loop: true,
    slidesPerView: 3,   //한번에 보여줄 개수
    spaceBetween: 10,   // 슬라이드 사이 여백
    centeredSlides: true, // 1번 슬라운드가 가운데
    pagination: {   //페이지 번호 사용
        el: '.promotion .swiper-pagination',    //번호 요소
        clickable: true     // 사용자 제어 여부
    },
    navigation: {
        prevEl: 'promotion .swiper-button-prev',
        prevEl: 'promotion .swiper-button-next'
    }
});

promotionToggleBtn.addEventListener('click', function(){
    if(promotionEl.classList.contains('hide')){
        promotionEl.classList.remove('hide');
    }else{
        promotionEl.classList.add('hide');
    }
});

gsap.to('.floating1', 1.5, {
    delay: 1,
    y: 15,
    repeat: -1,
    yoyo: true,
    case: Power1.easeInOut
});
gsap.to('.floating2', 2, {
    delay: .5,
    y: 15,
    repeat: -1,
    yoyo: true,
    case: Power1.easeInOut
});
gsap.to('.floating3', 2.5, {
    delay: 1.5,
    y: 20,
    repeat: -1,
    yoyo: true,
    case: Power1.easeInOut
});


/**
 * 요소가 화면에 보여짐 여부에 따른 요소 관리
 */
// 관리할 요소들 검색!
const spyEls = document.querySelectorAll('section.scroll-spy');
// 요소들 반복 처리!
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({ // 감시할 장면(Scene)을 추가
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 // 화면의 80% 지점에서 보여짐 여부 감시
    })
    .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()); // 컨트롤러에 장면을 할당(필수!)
});


/**
 * 올해가 몇 년도인지 계산
 */
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
