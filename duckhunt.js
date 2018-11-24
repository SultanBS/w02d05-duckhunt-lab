
$(document).ready(function () {

  var $body = $('body');

  function createDuck() {

    var $duck = $('<div/>').addClass('duck');

    $duck.css({
      'top': Math.floor(Math.random() * window.innerHeight) + 'px',
      'left': Math.floor(Math.random() * window.innerWidth) + 'px'
    })

    $body.append($duck);
     setInterval(function () {
      $duck.toggleClass('flap');

    }, 250);

    var moveF = setInterval(function () {
      var leftDuck = Math.floor(Math.random() * window.innerWidth);
      var toptDuck = Math.floor(Math.random() * window.innerHeight);

      $duck.animate({
        'left': `${leftDuck}px`,
        'top': `${toptDuck}px`
      })
    }, 2000)

    $duck.click(function () {
      if ($duck.click) {
        $duck.addClass('shot');
        clearInterval(moveF);
        $duck.stop(true, false);
        setTimeout(function () {
          $duck.remove();
          checkWinner();
        }, 1000)
      }
    })

    return $duck;
  }

  for (var i = 0; i < 5; i++) {
    var timeM = Math.floor(Math.random() * 2000);
    setTimeout(createDuck, timeM);
  }

  function checkWinner() {
    if ($body.children().length == 0) {
      alert("Congrats, you've hunt all the ducks!");
    }
  }
})









