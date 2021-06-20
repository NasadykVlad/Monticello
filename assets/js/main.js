"use strict";

const screenWidth = window.screen.width;
const screenHeight = window.screen.height;

if (screenWidth <= 768) {
    $(document).ready(function() {
        $('.slider-one').slick({
            dots: true,
            adaptiveHeight: true,
            arrows: false,
            autoplay: true,
            draggable: true,
            verticalSwiping: true,
            swipeToSlide: true,
            infinite: true,
            speed: 500,
            fade: true,
            autoplaySpeed: 6000,
            cssEase: 'linear',
            focusOnSelect: true
        });
        $('.slider-two').slick({
            dots: true,
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 4000
        });
    });
} else if (screenWidth >= 769 && screenWidth <= 900) {
    $(document).ready(function() {
        $('.slider-one').slick({
            dots: true,
            adaptiveHeight: true,
            arrows: false,
            autoplay: true,
            draggable: true,
            verticalSwiping: true,
            swipeToSlide: true,
            infinite: true,
            speed: 500,
            fade: true,
            autoplaySpeed: 6000,
            cssEase: 'linear',
            focusOnSelect: true
        });
        $('.slider-two').slick({
            dots: true,
            slidesToShow: 2,
            autoplay: true,
            autoplaySpeed: 4000
        });
    });
} else {
    $(document).ready(function() {
        $('.slider-one').slick({
            dots: true,
            adaptiveHeight: true,
            arrows: false,
            autoplay: true,
            draggable: true,
            verticalSwiping: true,
            swipeToSlide: true,
            infinite: true,
            speed: 500,
            fade: true,
            autoplaySpeed: 6000,
            cssEase: 'linear',
            focusOnSelect: true
        });
        $('.slider-two').slick({
            dots: true,
            slidesToShow: 3,
            autoplay: true,
            autoplaySpeed: 4000
        });
    });
}


function initMap() {
    let geo = {
        lat: 40.677963,
        lng: -73.896072
    }
    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: geo,

    });

    let marker = new google.maps.Marker({
        draggable: true,
        animation: google.maps.Animation.BOUNCE,
        position: { lat: 40.680136791022896, lng: -73.89948984732939 },
        map: map,
        icon: './assets/img/layers.png',
        title: '91 Nolan'
    });
}