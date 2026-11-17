
var btn = document.getElementById("themeBtn");

btn.onclick = function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    btn.innerText = "Light Mode";
  } else {
    btn.innerText = "Dark Mode";
  }
};


var search = document.getElementById("search");
var cards = document.querySelectorAll("#allCards .card");
var notFound = document.getElementById("notFound");

search.onkeyup = function () {
  var word = search.value.toLowerCase();
  var count = 0;

  for (var i = 0; i < cards.length; i++) {
    var text = cards[i].innerText.toLowerCase();

    if (text.includes(word)) {
      cards[i].style.display = "block";
      count++;
    } else {
      cards[i].style.display = "none";
    }
  }

  if (count == 0) {
    notFound.style.display = "block";
  } else {
    notFound.style.display = "none";
  }
};