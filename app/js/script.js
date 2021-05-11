"use strict"

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
                isMobile.Android()
                || isMobile.BlackBerry()
                || isMobile.iOS()
                || isMobile.Opera()
                || isMobile.Windows()
                );
    }
};

if (isMobile.any()) {
    document.body.classList.add('_touch');
} else {
    document.body.classList.add('_pc');
}

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}


// let date = new Date('May 11 2021 17:20:00');

// function counts() {
//     let now = new Date();
//     gap = date - now;

//     let days = Math.floor(gap / 1000 / 60 / 60 / 24);
//     let hours = Math.floor(gap / 1000 / 60 / 60 ) % 24;
//     let minutes = Math.floor(gap / 1000 / 60 ) % 60;
//     let seconds = Math.floor(gap / 1000 ) % 60;

//     if (gap < 0) {
//         days = days + 1;
//         hours = hours + 24;
//         minutes = minutes + 60;
//         seconds = seconds + 60;
//     }
//     document.getElementById('days').innerText = days;
//     document.getElementById('hours').innerText = hours;
//     document.getElementById('minutes').innerText = minutes;
//     document.getElementById('seconds').innerText = seconds;
// }
// counts();

// setInterval(counts, 1000);