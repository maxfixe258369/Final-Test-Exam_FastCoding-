$( document ).ready(function() {
  $(".list").click(function(){
    if ($('.show-list').css('display') == 'none'){
      $(".show-list").css("display", "block")
    }
    else {
      $(".show-list").css("display", "none")
    }
  });

  $(".cart").click(function(){
    if ($('.show-cart').css('display') == 'none'){
      $(".show-cart").css("display", "block")
    }
    else {
      $(".show-cart").css("display", "none")
    }
  });
});

function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}



