var cardNamee = document.querySelector(".name");
var cardNum = document.querySelector(".cardnum");
var cardCvv = document.querySelector(".cvv");
var cardMonth = document.querySelector(".month");
var cardYearr = document.querySelector(".year");
var nameerr = document.querySelector(".nameerr");
var numerr = document.querySelector(".numerr");
var cvverr = document.querySelector(".cvverr");
var submiterr = document.querySelector(".submiterr");
var dateerr = document.querySelector(".dateerr");

function checkname() {
  var cardName = document.getElementById("cardnamei").value;
  cardNamee.innerHTML = cardName;
  if (cardName.length == 0) {
    nameerr.innerHTML = "name is required";
    return false;
  }
  if (!cardName.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameerr.innerHTML = "enter full name";
    return false;
  }
  nameerr.innerHTML = "";
  return true;
}
function checknumber() {
  var cardNumber = document.getElementById("cardnumi").value;
  var cardNumfr = cardNumber.replace(/(.{4})/g, "$1 ");
  cardNum.innerHTML = cardNumfr;
  if (cardNumber.length == 0) {
    numerr.innerHTML = "card number is required";
    return false;
  }
  if (!cardNumber.match(/^[0-9]{16}/)) {
    numerr.innerHTML = "invalid card number";
    return false;
  }
  if (cardNumber.length != 16) {
    numerr.innerHTML = "invalid card number";
    return false;
  }

  numerr.innerHTML = "";
  return true;
}
function checkcvv() {
  var cardCv = document.getElementById("cardcvvi").value;
  cardCvv.innerHTML = cardCv;
  if (cardCv.length == 0) {
    cvverr.innerHTML = "CVV is required";
    return false;
  }

  if (!cardCv.match(/^[0-9]{3}/)) {
    cvverr.innerHTML = "invalid cvv";
    return false;
  }
  if (cardCv.length != 3) {
    cvverr.innerHTML = "invalid cvv";
    return false;
  }
  cvverr.innerHTML = "";
  return true;
}
function checkdate() {
  var cardMon = document.getElementById("cardmoni").value;
  var cardYear = document.getElementById("cardyri").value;
  var cardsYear = 20 + cardYear;
  var cardYearNum = parseInt(cardsYear);
  cardMonth.innerHTML = cardMon;
  cardYearr.innerHTML = cardYear;
  if (cardMon >= 1 && cardMon <= 9) {
    cardMon = "0" + cardMon;
  }
  cardMonth.innerHTML = cardMon;
  if (cardMon < 1 || cardMon > 12) {
    dateerr.innerHTML = "invalid input";
    return false;
  }
  var todayYear = new Date().getFullYear();
  var todayMonth = new Date().getMonth();
  console.log(todayMonth);
  if (todayYear > cardYearNum) {
    dateerr.innerHTML = "invalid year";
    return false;
  }
  if (todayYear === cardYearNum) {
    if (todayMonth > cardMon - 1 || todayMonth === cardMon - 1) {
      dateerr.innerHTML = "invalid input";
      return false;
    }
  }
  dateerr.innerHTML = "";
  return true;
}
function checkForm(e) {
  if (!checkname() || !checknumber() || !checkcvv()) {
    submiterr.innerHTML = "Please fix errors";
    return false;
  }
  submiterr.innerHTML = "";
  event.preventDefault();
  document.querySelector(".form").classList.add("remove");
  document.querySelector(".completed").classList.remove("remove");
  document.querySelector(".completed").classList.add("add");
  return true;
}
