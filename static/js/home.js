$(function() {
  /* NOTE: hard-refresh the browser once you've updated this */
  $(".typed").typed({
    strings: [
      "user arjun<br/>" +
      "><span class='caret'>$</span> jobs: Systems Administrator and Undergaduate ML Researcher<br/> ^100" +
      "><span class='caret'>$</span> skills: java, python, linux, tensorflow, keras, AI/ML libraries <br/> ^100" +
      "><span class='caret'>$</span> hobbies: reading, video games, board games<br/> ^300"
    ],
    showCursor: true,
    cursorChar: '_',
    autoInsertCss: true,
    typeSpeed: 0.001,
    startDelay: 50,
    loop: false,
    showCursor: false,
    onStart: $('.message form').hide(),
    onStop: $('.message form').show(),
    onTypingResumed: $('.message form').hide(),
    onTypingPaused: $('.message form').show(),
    onComplete: $('.message form').show(),
    onStringTyped: function(pos, self) {$('.message form').show();},
  });
  $('.message form').hide()
});
