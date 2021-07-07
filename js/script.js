function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

$(document).ready(function () {
  $(window).scroll(function () {
    const scrollTop = $(window).scrollTop();
    if (scrollTop == 200) {
      $(".options-choose-class").addClass("fly");
      $("html").animate(
        {
          scrollTop: $(".section-choose-class").offset().top
        },
        500
      );
    }

    else if (scrollTop == 1436) {
      $(".stats-content").addClass("show");
      $("html").animate(
        {
          scrollTop: $(".section-our-stats").offset().top
        },
        500
      );
    }

    else if (scrollTop == 2565 || scrollTop == 2621 || scrollTop == 2709 ) {
      $("html").animate(
        {
          scrollTop: $(".section-best-instructor").offset().top
        },
        500
      );
    }

    else if (scrollTop == 4069 ||scrollTop == 4182) {
      $("html").animate(
        {
          scrollTop: $(".section-new-experience").offset().top
        },
        500
      );
    }

    else if (scrollTop == 4804 || scrollTop == 5289) {
      $("html").animate(
        {
          scrollTop: $(".section-pricing").offset().top
        },
        500
      );
    }

    else if (scrollTop > 1536) {
      $(".stats-content").addClass("show");
    }

    else if (scrollTop > 300) {
      $(".options-choose-class").addClass("fly");
    }

    
  });
  
})





