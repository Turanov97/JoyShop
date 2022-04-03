/* select======== */
document.querySelectorAll(".select-wrap").forEach(function (wrap) {
   let select = wrap.querySelector(".custom-select");
   let classes = select.getAttribute("class"),
     id = select.getAttribute("id"),
     name = select.getAttribute("name");
   let template = '<div class="' + classes + '">';
   template +=
     '<span class="custom-select-trigger">' +
     select.getAttribute("placeholder") +
     "</span>";
   template += '<div class="custom-options">';
   select.querySelectorAll("option").forEach(function (option) {
     template +=
       '<span class="custom-option' +
       '"data-value="' +
       option.getAttribute("value") +
       '">' +
       option.innerText +
       "</span>";
   });
   template += "</div></div>";
   let select_wrapper = document.createElement("div");
   select.style.display = "none";
   select_wrapper.innerHTML = `<div class="custom-select-wrapper">${template}</div>`;
   wrap.appendChild(select_wrapper);
 });
 
 document
   .querySelector(".custom-select-trigger")
   .addEventListener("click", function () {
     document
       .querySelector(".custom-select-trigger")
       .closest(".custom-select")
       .classList.toggle("opened");
   });
 document.querySelectorAll(".custom-option").forEach((option) => {
   option.addEventListener("click", function () {
     option.closest(".select-wrap").querySelector("select").value =
       option.getAttribute("data-value");
     option.closest(".custom-select").classList.remove("opened");
     option
       .closest(".custom-select")
       .querySelector(".custom-select-trigger").innerText = option.innerText;
   });
 });


 $(function () {
   /* menu nav bar */
  $("#nav__toggle").on("click", function () {
    $(this).toggleClass("active");
    $("#nav__inner").toggleClass("active");
  });
});


/* swiper slider */
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


var swiper = new Swiper(".mySwiper1", {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".my__slide__next",
    prevEl: ".my__slide__prev",
  },
});

var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 2.3,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".slide__prev",
    prevEl: ".slide__next",
  },
});

var swiper = new Swiper(".mySwiper3", {
  slidesPerView: 3,
  // spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".slide__prev",
    prevEl: ".slide__next",
  },
});


/* accordion  */

let collapsibleHeaders = document.getElementsByClassName('collapsible__header');

Array.from(collapsibleHeaders).forEach(header => {
    header.addEventListener('click', () => {
        header.parentElement.classList.toggle('collapsible--open');
    });
});