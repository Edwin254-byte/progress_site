/* function reveal() {
  var reveals = document.querySelector(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
 */

//reveal effect
const container = document.getElementById("card-container");
const cards = document.querySelectorAll(".card");
const observeCard = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("card--hidden");
  observer.unobserve(entry.target);
};
const cardObserver = new IntersectionObserver(observeCard, {
  root: null,
  threshold: 0.2,
});
cards.forEach((card) => {
  cardObserver.observe(card);
});

/* //alternating effect
const cardIntros = document.querySelectorAll(".card__intro");
const cardContents = document.querySelectorAll(".card__content");
console.log(cardContents);
console.log(cardIntros);
cardIntros.forEach((el, i) => {
  if (i % 2 == 1) {
    el.innerHTML = "";
  }
}); */
