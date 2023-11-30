
//searchEl = 본 코드 내에서 css선택자 명이 .search라는 요소를 뜻한다  
const searchEl = document.querySelector('.search');
// document는 문서이며 자바스크립트에서 말하는 도큐먼트는 html을 뜻한다.
// 때문에 html 소스 최상단에 있는 DOCTYPE 또한 html을 뜻한다.

//searchEl에서 input인 요소를 찾아라  
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  // Logic..
  // .search라는 요소를 클릭하면 인풋요소에도 포커스 되는 동작이 실행 된다
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  // .search에 포커스가 되면, 클래스명에 focused가 추가가 실행 된다
  searchEl.classList.add('focused');

  // Attribute = html의 속성을. 지정한다
  // setAttribute (속성의 이름, 속성에 들어갈 실제 값인 문자데이터)
  searchInputEl.setAttribute('placeholder', '통합검색');
});

// 재클릭하여 포커스 제거 되도록하기
searchInputEl.addEventListener('blur', function () {
  // .search에 포커스가 지워지면, 클래스명에 focused가 지워지는 동작이 실행 된다
  searchEl.classList.remove('focused');

  searchInputEl.setAttribute('placeholder', '');
});



// Footer에 올해 년도가 자동으로 출력되도록 하는 함수
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();