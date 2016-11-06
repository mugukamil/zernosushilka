// example of simple includes for js
const $ = require('jquery');
window.jQuery = $;
window.$ = $;
const slick = require('slick-carousel'); // eslint-disable-line no-unused-vars
const lightbox = require('lightbox2');
const mask = require('jquery-inputmask'); // eslint-disable-line no-unused-vars

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    asNavFor: '.slider-nav'
});

$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    centerMode: true,
    focusOnSelect: true,
    variableWidth: true,
});

let $radios = $('input[type=radio][name=atm]');
let tFirst = $('.table__first');
let tSecond = $('.table__second');
let tThird = $('.table__third');
let tFourth = $('.table__fourth');
let tFifth = $('.table__fifth');
let tSixth = $('.table__sixth');
let tSeventh = $('.table__seventh');
let tEighth = $('.table__eighth');

$('.table__radio').on('click', 'input[type=radio]', function() {
    const $this = $(this);

    var $checked = $radios.filter(':checked');
    var $next = $radios.eq($radios.index($checked) + 1);

    if (!$next.length) {
        $next = $radios.first();
    }

    if ($this.closest('td').index() === 1) {
        $('.skidka_table td').removeClass('table__red top bottom');
        tFirst.addClass('table__red');
        $('.js-value').text('АТМ-10');
    } else if ($this.closest('td').index() === 2) {
        $('.skidka_table td').removeClass('table__red top bottom');
        tSecond.addClass('table__red');
        tSecond.closest('.tr-top').addClass('.top-red');
        $('.js-value').text('АТМ-15');
    } else if ($this.closest('td').index() === 3) {
        $('.skidka_table td').removeClass('table__red top bottom');
        tThird.addClass('table__red');
        $('.js-value').text('АТМ-20');
    } else if ($this.closest('td').index() === 4) {
        $('.skidka_table td').removeClass('table__red top bottom');
        tFourth.addClass('table__red');
        $('.js-value').text('АТМ-25');
    } else if ($this.closest('td').index() === 5) {
        $('.skidka_table td').removeClass('table__red top bottom');
        tFifth.addClass('table__red');
        $('.js-value').text('АТМ-34');
    } else if ($this.closest('td').index() === 6) {
        $('.skidka_table td').removeClass('table__red top bottom');
        tSixth.addClass('table__red');
        $('.js-value').text('АТМ-45');
    } else if ($this.closest('td').index() === 7) {
        $('.skidka_table td').removeClass('table__red top bottom');
        tSeventh.addClass('table__red');
        $('.js-value').text('АТМ-60');
    } else {
        $('.skidka_table td').removeClass('table__red top bottom');
        tEighth.addClass('table__red');
        $('.js-value').text('АТМ-75');
    }

    if ( $('tr:nth-child(1)').find('.table__red').length ) {
        $('tr:nth-child(1)').find('td.table__red').addClass('top');
        $('.table-top').css('margin-bottom', '-3px');
        $('.table-bottom').css('margin-top', '-3px');
    }

    if ( $('tr:last-child').find('.table__red').length ) {
        $('tr:last-child').find('td.table__red').addClass('bottom');
    }

});


lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'albumLabel': ''
});

$('.js-form').on('click', function(e) {
    $('.js-popup').addClass('is-active');
    $('.overlay').removeClass('is-active');
    // $('.js-popup').find('.js-value').text('АТМ-25');
    if ( $(e.target).data('form') === 'cat' ) {
        $('.js-popup').find('.js-value').text('АТМ-25');
    }

    return false;
});

$('.overlay').on('click', function() {
    $(this).removeClass('is-active');
    $('.js-popup').removeClass('is-active');
    $('.js-popup1').removeClass('is-active');
    $('.js-popup2').removeClass('is-active');
    $('.js-popup3').removeClass('is-active');

    return false;
});

$('.js-form1').on('click', function() {
    $('.js-popup1').addClass('is-active');
    $('.overlay').removeClass('is-active');

    return false;
});

$('.js-form2').on('click', function() {
    $('.js-popup2').addClass('is-active');
    $('.overlay').removeClass('is-active');

    return false;
});

$('.js-form3').on('click', function() {
    $('.js-popup3').addClass('is-active');
    $('.overlay').removeClass('is-active');

    return false;
});

$('.js-close').on('click', () => {
    $('.overlay').removeClass('is-active');
    $('.js-popup1').removeClass('is-active');
    $('.js-popup2').removeClass('is-active');
    $('.js-popup3').removeClass('is-active');
    $('.js-popup').removeClass('is-active');
});

$('input[type=tel]').mask('+7 (999) 999-99-99');
