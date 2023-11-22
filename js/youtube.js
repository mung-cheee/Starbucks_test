// Youtube IFrame API를 로드
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// !!주의!! onYouTubePlayerAPIReady 함수 이름은, Youtube IFrame Player API에서 사용하는 이름이기 때문에, 다르게 지정하면 동작하지 않음
function onYouTubeIframeAPIReady() {
  // 'player'는 html 코드 내 <div id="player">를 뜻 함. 
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8', //최초 재생할 유튜브 영상 ID
    playerVars: {
      autoplay: true, //자동 재생 유무
      loop: true, //반복 재생 유무
      playlist: 'An6LvWQuj_8' //반복 재생할 유튜브 영상 ID 목록
    },
    events: {
      //영상이 준비되었을 때 실행되는 매서드
      onReady: function (event) {
        event.target.mute() // 이벤트에.해당하는 타겟.음소거가 되어라
      }
    }
  });
}