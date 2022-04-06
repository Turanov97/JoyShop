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
  $(".nav__inner-cloes").on("click", function () {
    $("#nav__inner").toggleClass("active");
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

  $("#nav__box").on("click", function () {
    $(".nav__box__inner").toggleClass("active");
  });

  const removeActiveClass = (query) => {
    $(`.${query}.active`).each(function () {
      console.log($(this));
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
var swiper = new Swiper(".mySwiper", {
  
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".mySwiper1", {
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
    1130: {
      slidesPerView: 3,
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
    nextEl: ".my__slide__next",
    prevEl: ".my__slide__prev",
  },
});

var swiper = new Swiper(".mySwiper2", {
  // slidesPerView: 2.3,
  spaceBetween: 20,
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
    836: {
      slidesPerView: 2.5,
      spaceBetween: 30,
    },
  },
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
    nextEl: ".slide__prev",
    prevEl: ".slide__next",
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

function close1() {
  // document.getElementById("demo").innerHTML = "You wrote: " + val;
  var x = document.getElementById("closeid");
  if (x.style.display == "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
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


/* pogination */

// selecting required element
const element = document.querySelector(".pagination ul");
let totalPages = 20;
let page = 10;

//calling function with passing parameters and adding inside element which is ul tag
element.innerHTML = createPagination(totalPages, page);
function createPagination(totalPages, page) {
  let liTag = "";
  let active;
  let beforePage = page - 1;
  let afterPage = page + 1;
  if (page > 1) {
    //show the next button if the page value is greater than 1
    liTag += `<li class="btn prev" onclick="createPagination(totalPages, ${
      page - 1
    })"><span><i class="fas fa-angle-left"></i> Prev</span></li>`;
  }

  if (page > 2) {
    //if page value is less than 2 then add 1 after the previous button
    liTag += `<li class="first numb" onclick="createPagination(totalPages, 1)"><span>1</span></li>`;
    if (page > 3) {
      //if page value is greater than 3 then add this (...) after the first li or page
      liTag += `<li class="dots"><span>...</span></li>`;
    }
  }

  // how many pages or li show before the current li
  if (page == totalPages) {
    beforePage = beforePage - 2;
  } else if (page == totalPages - 1) {
    beforePage = beforePage - 1;
  }
  // how many pages or li show after the current li
  if (page == 1) {
    afterPage = afterPage + 2;
  } else if (page == 2) {
    afterPage = afterPage + 1;
  }

  for (var plength = beforePage; plength <= afterPage; plength++) {
    if (plength > totalPages) {
      //if plength is greater than totalPage length then continue
      continue;
    }
    if (plength == 0) {
      //if plength is 0 than add +1 in plength value
      plength = plength + 1;
    }
    if (page == plength) {
      //if page is equal to plength than assign active string in the active variable
      active = "active";
    } else {
      //else leave empty to the active variable
      active = "";
    }
    liTag += `<li class="numb ${active}" onclick="createPagination(totalPages, ${plength})"><span>${plength}</span></li>`;
  }

  if (page < totalPages - 1) {
    //if page value is less than totalPage value by -1 then show the last li or page
    if (page < totalPages - 2) {
      //if page value is less than totalPage value by -2 then add this (...) before the last li or page
      liTag += `<li class="dots"><span>...</span></li>`;
    }
    liTag += `<li class="last numb" onclick="createPagination(totalPages, ${totalPages})"><span>${totalPages}</span></li>`;
  }

  if (page < totalPages) {
    //show the next button if the page value is less than totalPage(20)
    liTag += `<li class="btn next" onclick="createPagination(totalPages, ${
      page + 1
    })"><span>Next <i class="fas fa-angle-right"></i></span></li>`;
  }
  element.innerHTML = liTag; //add li tag inside ul tag
  return liTag; //reurn the li tag
}
