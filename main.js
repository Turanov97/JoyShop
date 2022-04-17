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

  /* phone menu */

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

  $(".fa-times").on("click", function () {
    $(".search__inner").removeClass("active");
  });

  /* popular btn action */

  $(".popular__item").on("click", function (e) {
    const [popularBtn] = $(this).find(".popular__add");
    if (popularBtn === e.target) {
      removeActiveClass("popular__add__click");
      removeActiveClass("popular__add");
      $(this).find(".popular__add__click").toggleClass("active");
      $(this).find(".popular__add").toggleClass("active");
    }
    // else {
    //   removeActiveClass("popular__add__click");
    //   removeActiveClass("popular__add");
    // }
  });

  $(".popular__item").on("mouseleave", function (e) {
    removeActiveClass("popular__add__click");
    removeActiveClass("popular__add");
  });

  /* filter ==== menu */

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

  const removeActiveClass = (query) => {
    $(`.${query}.active`).each(function () {
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

// Получить модальный
const modal = document.getElementById("myModal");

// Получить кнопку, которая открывает модальный
const btn = document.getElementById("modalAction");

// Получить элемент <span>, который закрывает модальный
const span = document.getElementsByClassName("close")[0];

// Когда пользователь нажимает на кнопку, откройте модальный
btn.onclick = function (e) {
  const [popularBtn] = $(this).find(".popular__add");
  const [popularClick] = $(this).find(".popular__add__click");
  const [popularBtns] = $(this).find(".popular__add__btns");
  const [popularRemove] = $(this).find(".popular__add__btn");
  const [popularAdd] = $(this).find(".popular__add__btn--add");
  const [popularShop] = $(this).find(".popular__img_shop");
  const [popularImg] = $(this).find(".popular__add__img");
  const [popularIcon] = $(this).find(".popular__img_arrow");
  const [popularText] = $(this).find(".popular__add__text");
  const actions = [
    popularBtn,
    popularRemove,
    popularClick,
    popularImg,
    popularIcon,
    popularText,
    popularAdd,
    popularShop,
    popularBtns,
  ];

  if (!actions.includes(e.target)) {
    modal.style.display = "block";
    $("body").css("overflow", "hidden");
  }
};

// Когда пользователь нажимает на <span> (x), закройте модальное окно
span.onclick = function () {
  modal.style.display = "none";
  document.body.style.overflow = "scroll";
};

// Когда пользователь щелкает в любом месте за пределами модального, закройте его
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.style.overflow = "scroll";
  }
};

$(".close_action_modal").on("click", function () {
  $(".overlay").removeClass("active");
  $(".modal").css("display", "none");
  $("body").css("overflow", "scroll");
});

/* search focus */
