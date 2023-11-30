


// 방법1)
//const badgeEl = document.querySelector('header .badges');

//window.addEventListener('scroll', function () {
// window는 브라우저 창. 즉 프로그램이 출력되고 있는 브라우저 화면 자체를 뜻함
//  console.log('scroll!');
//});
// 그러나, 이 방법을 쓸 경우 데이터 출력 과부화로 화면 버벅임 현상 발생 할 수 있어서 아래 방법 사용하기.


const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    // 배지 숨기기
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    // to-top 버튼 보이기!
    gsap.to('#to-top', .2, {
      x: 0 // px단위      
    });
  } else {
    // 배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    // to-top 버튼 숨기기!
    gsap.to('#to-top', .2, {
      x: 100 // px단위      
    });
  }
}, 300));
//_.throttle(함수, 밀리세컨트 기준 시간). 300=3초

toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
    // 화면에 보이는 위치를 0.7초만에 전체 영역의 0px 위치로 이동할 수 있게한다
  });
});

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, // 0.7, 1.4, 2.1, 2.7
    //1번째 요소는 제로베이스드 때문에 그냥 0이 나올 수 있으니 순서에 1을 더한 것
    opacity: 1
  });
});


//new 자바스크립트 상의 생성자=클래스 개념
// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper', {
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백 (px단위)
  centeredSlides: true, // 1번째 슬라이드 이미지가 가운데에 보여지도록
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호가 추가 될 요소 선택자
    clickable: true // 사용자의 페이지 번호가 적용되는 요소를 직접 클릭하여 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev', // 이전 슬라이드 버튼
    nextEl: '.promotion .swiper-next' // 다음 슬라이드 버튼
  }
});

// AWARDS slide요소 Swipe js
new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  slidesPerView: 5, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 30, // 슬라이드 사이 여백 (px단위)
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});




const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
// let = 다른 값이 대입 될 수 있는 변환 함수
let isHidePromotion = false; //불린 데이터
// isHidePromotion의 기본값은 false

promotionToggleBtn.addEventListener('click', function () {
  // promotionToggleBtn 요소에 클릭이벤트가 발생할 시 실행되는 내용 
  isHidePromotion = !isHidePromotion;
  //변수요소 앞에 ! 붙일 시, 기존 요소의 내용과 반대되는 내용을 반환함 
  if (isHidePromotion) { //if = ture일 시 작동하는 것
    //숨김 처리!
    promotionEl.classList.add('hide');
  } else { //else = false일 시 작동하는 것
    //보임 처리!
    promotionEl.classList.remove('hide');
  }
});


// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

//.floating 요소
function floatingObject(selector, delay, size) {
  //gsap.to(요소, 시간, 옵션);
  gsap.to(
    selector, //선택자
    random(1.5, 2.5), //애니메이션 동작시간
    { // 애니메이션의 동작 옵션
      y: size, //y축을 의미
      repeat: -1, //repeat 값이 -1이면 무한반복 된다는 뜻
      yoyo: true,
      ease: Power1.easeInOut,
      delay: random(0, delay)
    });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 5, 15);
floatingObject('.floating3', 1.5, 20);
// 실행되는 함수('함수가 적용되는 요소', 지연시간, 움직이는 범위 y : px단위)




const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
      triggerHook: .8
      //뷰포트가 시작하는 부분이 0, 끝나는 부분이 1이라고 따졌을 때 
      //트리거가 감시되는 요소가 해당 수치에 걸리면 보여지는 것으로 판단하고,
      //이어지는 setClassToggle 메서드 내용이 실행 되도록 넘어감
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});
