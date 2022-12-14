window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    document.getElementById("header-wave").style.height = "0";
    document.getElementById("header-wave").style.marginBottom = "75px";
  } else {
    document.getElementById("header-wave").style.height = "75px";
    document.getElementById("header-wave").style.marginBottom = "0";

  }
}   