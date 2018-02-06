var time = 60 * 0.05;
var display = $('#time');
var min = 1;
var max = 7;
var config = {
  1: 'Ga',
  2: 'Huou',
  3: 'Cua',
  4: 'Ca',
  5: 'Tom',
  6: 'Bau',
};
var interval = 0;

$('#set-wait-time').click(function() {
  if (interval) {
    $('#result').text('');
    clearInterval(interval);
  }

  var minutes = parseInt($('input[name="minutes"]').val());
  var seconds = parseInt($('input[name="seconds"]').val());

  if (!Number.isInteger(minutes) || !Number.isInteger(seconds) || minutes > 59 || seconds > 59) {
    alert('Nhap so tu 00 den 59.');

    return false;
  } else {
    time = minutes * 60 + seconds;

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.text(minutes + ":" + seconds);

    alert('Dat gio thanh cong');
  }
});

$('#start').click(function() {
  $(this).attr('disabled', true);
  startTimer(time, display);
});

$('#stop').click(function() {
  if (interval) {
    $('#result').text('');
    clearInterval(interval);
  }
  $('.btn').attr('disabled', false);
});

function getResult() {
  var result = [getRandomInt(min, max), getRandomInt(min, max), getRandomInt(min, max)];
  var tmp;
  var text = 'Result: ';

  for (var i = min; i < max; i++) {
    tmp = count(i, result);
    if (tmp > 0) {
      text += tmp + ' ' + config[i] + ', ';
    }
  }

  text = text.slice(0, -2);

  return text;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function count(value, array) {
  var c = 0;

  for(var i in array) {
    if(array[i] == value) {
      c++;
    }
  }

  return c;
}

function startTimer(duration, display) {
  var timer = duration, minutes, seconds, text;

  interval = setInterval(function () {
    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    if (text == 'Loading..') {
      text = 'Loading...';
    } else {
      text = 'Loading..';
    }

    if (--timer < -1) {
      clearInterval(interval);
      alert('Finish');
      $('#result').text(getResult());
      $('#start').attr('disabled', false);
    } else {
      display.text(minutes + ":" + seconds);
      $('#result').text(text);
    }
  }, 1000);
}
