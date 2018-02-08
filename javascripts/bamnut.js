$(document).ready(function() {
    $('#start').click(function() {
        var test = getRandomInt(1, 3);
        var stage1 = 'border-radius: 50%; width: 50px; height: 50px;';
        var stage2 = 'border-radius: 50%; width: 50px; height: 50px;background-color:gray;';

        alert('xem ket qua');

        if (getRandomInt(1, 3) === 1) {
            $('#item1').attr('style', stage1);
        } else {
            $('#item1').attr('style', stage2);
        }

        if (getRandomInt(1, 3) === 1) {
            $('#item2').attr('style', stage1);
        } else {
            $('#item2').attr('style', stage2);
        }

        if (getRandomInt(1, 3) === 1) {
            $('#item3').attr('style', stage1);
        } else {
            $('#item3').attr('style', stage2);
        }

        if (getRandomInt(1, 3) === 1) {
            $('#item4').attr('style', stage1);
        } else {
            $('#item4').attr('style', stage2);
        }

        console.log('xong phim');
    });
});


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
