// example of simple includes for js
var $ = require('jquery');
window.jQuery = $;
window.$ = $;
var slick = require('slick-carousel');

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  arrows: false,
  asNavFor: '.slider-nav'
});

$('.slider-nav').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  centerMode: true,
  focusOnSelect: true,
  variableWidth: true,
});

let $radios = $('input[type=radio][name=atm]');
let tFirst = $('.table__first');
let tSecond = $('.table__second');
let tThird= $('.table__third');
let tFourth= $('.table__fourth');
let tFifth = $('.table__fifth');
let tSixth = $('.table__sixth');
let tSeventh = $('.table__seventh');
let tEighth = $('.table__eighth');

$('.table__radio').on('click', 'input[type=radio]', function(e) {
    const $this = $(this);

    var $checked = $radios.filter(':checked');
    var $next = $radios.eq($radios.index($checked) + 1);
    if(!$next.length){
        $next = $radios.first();
    }

    if ($this.closest('td').index() == 1) {
        $('.skidka_table td').removeClass('table__red top bottom');
        tFirst.addClass('table__red');
    } else if ($this.closest('td').index() == 2) {
        $('.skidka_table td').removeClass('table__red top bottom');
        tSecond.addClass('table__red');
    } else if ($this.closest('td').index() == 3) {
        $('.skidka_table td').removeClass('table__red top bottom');
        tThird.addClass('table__red');
    } else if ($this.closest('td').index() == 4) {
        $('.skidka_table td').removeClass('table__red top bottom');
        tFourth.addClass('table__red');
    } else if ($this.closest('td').index() == 5) {
        $('.skidka_table td').removeClass('table__red top bottom');
        tFifth.addClass('table__red');
    } else if ($this.closest('td').index() == 6) {
        $('.skidka_table td').removeClass('table__red top bottom');
        tSixth.addClass('table__red');
    } else if ($this.closest('td').index() == 7) {
        $('.skidka_table td').removeClass('table__red top bottom');
        tSeventh.addClass('table__red');
    } else {
        $('.skidka_table td').removeClass('table__red top bottom');
        tEighth.addClass('table__red');
    }

    if ( $('tr:nth-child(2)').find('.table__red').length ) {
        $('tr:nth-child(2)').find('td.table__red').addClass('top');
    }
    if ( $('tr:last-child').find('.table__red').length ) {
        $('tr:last-child').find('td.table__red').addClass('bottom');
    }

});

