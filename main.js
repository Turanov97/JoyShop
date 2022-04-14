/* preloder */

window.onload = function () {
  window.setTimeout(function () {
    const preLoader = document.querySelector("#preloader");
    preLoader.classList.add("preloader");
  }, 500);
};

/* select======== */
const getSelectTemplate = (classes, placeholder, content) => `
    <div class="${classes}">
      <span class="custom-select-trigger">${placeholder}</span>
      <div class="custom-options">
          ${content}
      </div>
    </div>
`;

const getOptionTemplate = (value, text) =>
  `<span class="custom-option" data-value="${value}">${text}</span> `;

document.querySelectorAll(".select-wrap").forEach((wrap) => {
  const select = wrap.querySelector(".custom-select");
  const classes = select.getAttribute("class");
  const additional = wrap.dataset.additional || "";
  console.log(additional);

  const options = select.querySelectorAll("option");
  let content = Array.from(options)
    .map((option) =>
      getOptionTemplate(option.getAttribute("value"), option.innerText)
    )
    .join(" ");
  let template = getSelectTemplate(
    classes,
    select.getAttribute("placeholder"),
    content
  );

  let select_wrapper = document.createElement("div");
  select.style.display = "none";
  select_wrapper.innerHTML = `<div class="custom-select-wrapper ${additional}">${template}</div>`;
  wrap.appendChild(select_wrapper);
});

const triggers = document.querySelectorAll(".custom-select-trigger");
triggers.forEach((t) =>
  t.addEventListener("click", (e) => {
    e.target.closest(".custom-select").classList.toggle("opened");
  })
);

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
    $("#mobile").toggleClass("active");
    $(".overlay").addClass("active");
  });

  $("#mobile__close").on("click", function () {
    $("#mobile").removeClass("active");
    $("#nav__toggle").removeClass("active");
    $(".overlay").removeClass("active");
  });

  $(".nav__inner-cloes").on("click", function () {
    $("#nav__inner").removeClass("active");
    $(".overlay").removeClass("active");
    $("#nav__toggle").removeClass("active");
  });
  $(".search__icon").on("click", function () {
    $(".search__inner").toggleClass("active");
  });

  $(".popular__item").on("click", function () {
    removeActiveClass("popular__add__click");
    removeActiveClass("popular__add");
    $(this).find(".popular__add__click").toggleClass("active");
    $(this).find(".popular__add").toggleClass("active");
  });

  $("#filter__action").on("click", function () {
    $(".filter__menu").addClass("active");
    $(".overlay").toggleClass("active");
  });
  $(".filter__cloes").on("click", function () {
    $(".filter__menu").removeClass("active");
    $(".overlay").removeClass("active");
  });

  /*  */
  // let fliterMenu = document.querySelector(".filter__menu");
  // document.addEventListener("click", (e) => {
  //   const click = e.composedPath().includes(fliterMenu);
  //   if (!click) {
  //     fliterMenu.style.display = 'none'
  //   }
  // });

  const overlay = document.querySelector(".overlay");

  document.addEventListener("click", (e) => {
    if (e.target == overlay) {
      $("#nav__toggle").removeClass("active");
      $("#nav__inner").removeClass("active");
      $("#mobile").removeClass("active");
      $(".overlay").removeClass("active");
      $(".filter__menu").removeClass("active");
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      $("#nav__toggle").removeClass("active");
      $("#nav__inner").removeClass("active");
      $(".overlay").removeClass("active");
      $(".search__inner").removeClass("active");
    }
  });

  /* clothe on click window */
  // let btnCategories = $('#filter__action')
  // let categories = $('.filter__menu')
  // let overlay = $('.overlay')

  // $(document).mouseup(function (e) {
  //   if (
  //     !btnCategories.is(e.target) &&
  //     btnCategories.has(e.target).length === 0 &&
  //     !categories.is(e.target) &&
  //     categories.has(e.target).length === 0
  //   ) {
  //     categories.fadeOut();
  //   }
  // });

  /*  */
  // $("#nav__box").on("click", function () {
  //   $(".nav__box__inner").toggleClass("active");
  // });

  const removeActiveClass = (query) => {
    $(`.${query}.active`).each(function () {
      // console.log($(this));
      setTimeout(() => {
        $(this).removeClass("active");
      }, 0);
    });
  };

  // $('.item').click(function(){
  //   if(!$(this).hasClass('active')){
  //   $(this).siblings().removeClass('active');
  //   $(this).addClass('active');
  //   }
  //   });

  // $('.cloth__text').on('click', function() {
  //   $('.cloth__title').html('Текстиль для гостиниц и спа центров'); // либо .text()
  // });
  $("#two").on("click", function () {
    let two = $("#two").html();
    $("#two").html($("#one").html());
    $("#one").html(two);
  });
});

const items = document.querySelectorAll(".cloth__text");
const content = document.querySelector("#cloth__content");

items.forEach((texts) =>
  texts.addEventListener("click", (e) => {
    let temp = content.innerText;
    content.innerText = e.target.innerText;
    e.target.innerText = temp;
  })
);

// let search = document.querySelector('.search__inner')
// window.onclick = function(event) {
//   if (event.target == modal) {
//       modal.style.display = "none";
//   }
// }

/* swiper slider */
new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

new Swiper(".mySwiper1", {
  slidesPerView: 4,
  spaceBetween: 20,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  breakpoints: {
    1400: {
      slidesPerView: 4,
      // spaceBetween: 40,
    },
    1200: {
      slidesPerView: 3.3,
      spaceBetween: 20,
    },
    1000: {
      slidesPerView: 2.8,
      spaceBetween: 20,
    },
    836: {
      slidesPerView: 2.4,
      spaceBetween: 20,
    },
    320: {
      slidesPerView: 1,
      // spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: ".my__slide__prev_popular",
    prevEl: ".my__slide__next_popular",
  },
});

new Swiper(".mySwiper2", {
  // slidesPerView: 2.2,
  // spaceBetween: 20,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  breakpoints: {
    1400: {
      slidesPerView: 2.3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 1.9,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 1.6,
      spaceBetween: 30,
    },
  },
  navigation: {
    nextEl: ".my__slide__prev_clothes",
    prevEl: ".my__slide__next_clothes",
  },
});

new Swiper(".mySwiper3", {
  slidesPerView: 3,
  // spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  breakpoints: {
    1400: {
      slidesPerView: 3,
      // spaceBetween: 40,
    },
    1200: {
      slidesPerView: 2.5,
      // spaceBetween: 20,
    },
    1100: {
      slidesPerView: 2,
      // spaceBetween: 20,
    },
    900: {
      slidesPerView: 1.8,
      // spaceBetween: 20,
    },
    836: {
      slidesPerView: 1.5,
      // spaceBetween: 20,
    },
    320: {
      slidesPerView: 1.2,
      // spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: ".my__slide__prev_reviews",
    prevEl: ".my__slide__next_reviews",
  },
});

/* accordion  */

let collapsibleHeaders = document.querySelectorAll(".collapsible__header");

Array.from(collapsibleHeaders).forEach((header) => {
  header.addEventListener("click", () => {
    header.parentElement.classList.toggle("collapsible--open");
  });
});

/*search */

function triggercross(val) {
  var val = document.getElementById("search");
  var x = document.getElementById("closeid");
  x.style.display = "block";
}

// function close1() {
//   // document.getElementById("demo").innerHTML = "You wrote: " + val;
//   var x = document.getElementById("closeid");
//   if (x.style.display == "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }

/* Tabs */

$(document).ready(function () {
  var pTabItem = $(".prodNav .ptItem");
  $(pTabItem).click(function () {
    // Tab nav active functionality
    $(pTabItem).removeClass("active");
    $(this).addClass("active");

    // Tab container active functionality
    var tabid = $(this).attr("id");
    $(".prodMain").removeClass("active");
    $("#" + tabid + "C").addClass("active");

    return false;
  });
});
