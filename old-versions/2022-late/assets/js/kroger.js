let current = 0;

function kroger() {
    current = (current + 1) % 4;
    document.getElementById("kroger").src = "assets/images/kroger_".concat(current.toString(), ".jpg");
    console.log("assets/images/kroger_".concat(current.toString(), ".jpg"));
  }