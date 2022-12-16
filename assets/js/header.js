window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    document.getElementById("header-wave").style.height = "0px";
    document.getElementById("header-wave").style.paddingBottom = "75px";
    document.getElementsByTagName("header")[0].style.height = "50px";
  } else {
    document.getElementById("header-wave").style.height = "75px";
    document.getElementById("header-wave").style.paddingBottom = "0px";
    document.getElementsByTagName("header")[0].style.height = "110px";

  }
}   