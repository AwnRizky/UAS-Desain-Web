var swiper = new Swiper(".myCate", {
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  slidesPerView: "auto",
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: ".bxs-chevron-right-circle",
    prevEl: ".bxs-chevron-left-circle",
  },
});

// categories 1

$(document).ready(function () {
  //hide all item
  $('.cat-wrap .cat-card').hide();

  //show items
  $('.cat-wrap').children('.cat-card:lt(4)').show();

  //load more
  $('.load-more').click(function (e) {
    e.preventDefault()
    $('.cat-wrap').children('.cat-card:hidden:lt(4)').slideDown();
  });
});

// Review 1

const myCarousel = document.getElementById('myCarousel')
myCarousel.addEventListener('slid.bs.carousel', function () {
  const activeItem = this.querySelector(".active");
  document.querySelector(".testi-img img").src = activeItem.getAttribute("data-img");
  document.querySelector(".testi-img .circle").style.backgroundColor = activeItem.getAttribute("data-color");
});

// categories 2

$(document).ready(function () {
  //hide all item
  $('.cat-wrap-2 .cat-card-2').hide();

  //show items
  $('.cat-wrap-2').children('.cat-card-2:lt(4)').show();

  //load more
  $('.load-more-2').click(function (e) {
    e.preventDefault()
    $('.cat-wrap-2').children('.cat-card-2:hidden:lt(4)').slideDown();
  });
});

// Review 2

const myCarousel2 = document.getElementById('myCarousel2')
myCarousel2.addEventListener('slid.bs.carousel', function () {
  const activeItem = this.querySelector(".active");
  document.querySelector(".testi-img2 img").src = activeItem.getAttribute("data-img");
  document.querySelector(".testi-img2 .circle").style.backgroundColor = activeItem.getAttribute("data-color");
});

//categories 3

$(document).ready(function () {
  //hide all item
  $('.cat-wrap-3 .cat-card-3').hide();

  //show items
  $('.cat-wrap-3').children('.cat-card-3:lt(4)').show();

  //load more
  $('.load-more-3').click(function (e) {
    e.preventDefault()
    $('.cat-wrap-3').children('.cat-card-3:hidden:lt(4)').slideDown();
  });
});

// Review 3

const myCarousel3 = document.getElementById('myCarousel3')
myCarousel3.addEventListener('slid.bs.carousel', function () {
  const activeItem = this.querySelector(".active");
  document.querySelector(".testi-img3 img").src = activeItem.getAttribute("data-img");
  document.querySelector(".testi-img3 .circle").style.backgroundColor = activeItem.getAttribute("data-color");
});

//categories 4

$(document).ready(function () {
  //hide all item
  $('.cat-wrap-4 .cat-card-4').hide();

  //show items
  $('.cat-wrap-4').children('.cat-card-4:lt(4)').show();

  //load more
  $('.load-more-4').click(function (e) {
    e.preventDefault()
    $('.cat-wrap-4').children('.cat-card-4:hidden:lt(4)').slideDown();
  });
});

// Review 4

const myCarousel4 = document.getElementById('myCarousel4')
myCarousel4.addEventListener('slid.bs.carousel', function () {
  const activeItem = this.querySelector(".active");
  document.querySelector(".testi-img4 img").src = activeItem.getAttribute("data-img");
  document.querySelector(".testi-img4 .circle").style.backgroundColor = activeItem.getAttribute("data-color");
})

//categories 5

$(document).ready(function () {
  //hide all item
  $('.cat-wrap-5 .cat-card-5').hide();

  //show items
  $('.cat-wrap-5').children('.cat-card-5:lt(4)').show();

  //load more
  $('.load-more-5').click(function (e) {
    e.preventDefault()
    $('.cat-wrap-5').children('.cat-card-5:hidden:lt(4)').slideDown();
  });
});

// Review 5

const myCarousel5 = document.getElementById('myCarousel5')
myCarousel5.addEventListener('slid.bs.carousel', function () {
  const activeItem = this.querySelector(".active");
  document.querySelector(".testi-img5 img").src = activeItem.getAttribute("data-img");
  document.querySelector(".testi-img5 .circle").style.backgroundColor = activeItem.getAttribute("data-color");
})

//categories 6

$(document).ready(function () {
  //hide all item
  $('.cat-wrap-6 .cat-card-6').hide();

  //show items
  $('.cat-wrap-6').children('.cat-card-6:lt(4)').show();

  //load more
  $('.load-more-6').click(function (e) {
    e.preventDefault()
    $('.cat-wrap-6').children('.cat-card-6:hidden:lt(4)').slideDown();
  });
});

// Review 6

const myCarousel6 = document.getElementById('myCarousel6')
myCarousel6.addEventListener('slid.bs.carousel', function () {
  const activeItem = this.querySelector(".active");
  document.querySelector(".testi-img6 img").src = activeItem.getAttribute("data-img");
  document.querySelector(".testi-img6 .circle").style.backgroundColor = activeItem.getAttribute("data-color");
})

//categories 7

$(document).ready(function () {
  //hide all item
  $('.cat-wrap-7 .cat-card-7').hide();

  //show items
  $('.cat-wrap-7').children('.cat-card-7:lt(4)').show();

  //load more
  $('.load-more-7').click(function (e) {
    e.preventDefault()
    $('.cat-wrap-7').children('.cat-card-7:hidden:lt(4)').slideDown();
  });
});

// // Review 7

const myCarousel7 = document.getElementById('myCarousel7')
myCarousel7.addEventListener('slid.bs.carousel', function () {
  const activeItem = this.querySelector(".active");
  document.querySelector(".testi-img7 img").src = activeItem.getAttribute("data-img");
  document.querySelector(".testi-img7 .circle").style.backgroundColor = activeItem.getAttribute("data-color");
})

//categories 8

$(document).ready(function () {
  //hide all item
  $('.cat-wrap-8 .cat-card-8').hide();

  //show items
  $('.cat-wrap-8').children('.cat-card-8:lt(4)').show();

  //load more
  $('.load-more-8').click(function (e) {
    e.preventDefault()
    $('.cat-wrap-8').children('.cat-card-8:hidden:lt(4)').slideDown();
  });
});

// // Review 8

const myCarousel8 = document.getElementById('myCarousel8')
myCarousel8.addEventListener('slid.bs.carousel', function () {
  const activeItem = this.querySelector(".active");
  document.querySelector(".testi-img8 img").src = activeItem.getAttribute("data-img");
  document.querySelector(".testi-img8 .circle").style.backgroundColor = activeItem.getAttribute("data-color");
})

//categories 9

$(document).ready(function () {
  //hide all item
  $('.cat-wrap-9 .cat-card-9').hide();

  //show items
  $('.cat-wrap-9').children('.cat-card-9:lt(4)').show();

  //load more
  $('.load-more-9').click(function (e) {
    e.preventDefault()
    $('.cat-wrap-9').children('.cat-card-9:hidden:lt(4)').slideDown();
  });
});

// // Review 9

const myCarousel9 = document.getElementById('myCarousel9')
myCarousel9.addEventListener('slid.bs.carousel', function () {
  const activeItem = this.querySelector(".active");
  document.querySelector(".testi-img9 img").src = activeItem.getAttribute("data-img");
  document.querySelector(".testi-img9 .circle").style.backgroundColor = activeItem.getAttribute("data-color");
})

//categories 10

$(document).ready(function () {
  //hide all item
  $('.cat-wrap-10 .cat-card-10').hide();

  //show items
  $('.cat-wrap-10').children('.cat-card-10:lt(4)').show();

  //load more
  $('.load-more-10').click(function (e) {
    e.preventDefault()
    $('.cat-wrap-10').children('.cat-card-10:hidden:lt(4)').slideDown();
  });
});

// // Review 10

const myCarousel10 = document.getElementById('myCarousel10')
myCarousel10.addEventListener('slid.bs.carousel', function () {
  const activeItem = this.querySelector(".active");
  document.querySelector(".testi-img10 img").src = activeItem.getAttribute("data-img");
  document.querySelector(".testi-img10 .circle").style.backgroundColor = activeItem.getAttribute("data-color");
})