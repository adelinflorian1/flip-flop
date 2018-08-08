var imgs = ["img/b1.jpg","img/b2.jpg","img/b3.jpg","img/j1.jpg","img/j2.jpg","img/j3.jpg","img/b1.jpg","img/b2.jpg","img/b3.jpg","img/j1.jpg","img/j2.jpg","img/j3.jpg","img/b1.jpg","img/b2.jpg","img/b3.jpg","img/j1.jpg","img/j2.jpg","img/j3.jpg","img/b1.jpg","img/b2.jpg","img/b3.jpg","img/j1.jpg","img/j2.jpg","img/j3.jpg","img/b1.jpg","img/b2.jpg","img/b3.jpg","img/j1.jpg","img/j2.jpg","img/j3.jpg","img/b1.jpg","img/b2.jpg","img/b3.jpg","img/j1.jpg","img/j2.jpg","img/j3.jpg"];
var myInterval;
var x=0;
$(document).on('click', ".cardFace", function (e) {
    $(e.target).parent().toggleClass('flipped');

    var $flippedCards = $('.flipped');

    if($flippedCards.length===2){
        if($flippedCards.eq(0).children(0).children(0).attr('src')!==$flippedCards.eq(1).children(0).children(0).attr('src')) {
            setTimeout(function () {
                $flippedCards.eq(0).toggleClass('flipped');
                $flippedCards.eq(1).toggleClass('flipped');
            }, 800);
        }else{
            x+=2;
            console.log(x);
            setTimeout(function () {
                $flippedCards.eq(0).toggleClass('flipped');
                $flippedCards.eq(1).toggleClass('flipped');
                $flippedCards.eq(0).hide();
                $flippedCards.eq(1).hide();
            }, 800);
        }

    }
    window.clearInterval(myInterval);
    if(x===36){
        setTimeout(function () {
            $('.congrats').show();
            $('.container').hide();
            window.clearInterval(intervalHandle);
            $('.btn2').show();
            $('.btn2').text('Play again!');
            clearTimeout(myTimeout);
        }, 800);

    }
});

function renderCards() {
    imgs = shuffle(imgs);
    $('.container').empty();
    for (var i = 0; i < 36; i++) {

        var card = $('<div/>', {
            class: 'card'
        });

        var face = $('<div/>', {
            class: 'cardFace cardFaceFront'
        });

        var img = $('<img />', {
            src: imgs[i],
            alt: 'MyAlt'
        });
        img.appendTo(face);

        face.appendTo(card);

        $('<div/>', {
            class: 'cardFace cardFaceBack'
        }).appendTo(card);

        card.appendTo('.container');
    }
}
$('.btn').click(function () {
    if($('.check').is(':checked')) {
        renderCards();
        $('.container').show();
        $('.text').hide();
        $('.timer').show();
        startCounting();
    }else{
        $('.mess').show();
    }
});

$('.btn2').click(function () {
    renderCards();
    $('.container').show();
    $('.timer').show();
    $('.btn2').hide();
    $('.congrats').hide();
    startCounting();

});

function showMsg(){
    var note = $('.timer');
    note.text("You loose mtf!!!");
    $('.btn2').show();
    $('.container').hide();
    window.clearInterval(intervalHandle);

}

var countDown;
var intervalHandle;
var myTimeout;
var timer = 100*1000;

function setCountdown(){
    var note = $('.timer');
    note.text(countDown);
    countDown--;
}

function startCounting(){
    window.clearInterval(intervalHandle);
    countDown=100;
    intervalHandle = setInterval(function(){setCountdown()},1000);
    myTimeout = setTimeout(function(){showMsg()},timer+2000);

}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
