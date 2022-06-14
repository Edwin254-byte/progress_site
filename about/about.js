// selecting Dom elements
const btnMission = document.querySelector(".btn__mission");
const btnVision = document.querySelector(".btn__vision");
const btnMotto = document.querySelector(".btn__motto");
const collapseMotto = document.querySelector(".collapse__motto");
const collapseMission = document.querySelector(".collapse__mission");
const collapseVision = document.querySelector(".collapse__vision");
const btns = document.querySelectorAll(".collapse__links");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    if (btn === btnMission) {
      collapseMission.classList.remove("hidden");
      collapseMission.style.backgroundColor = "#346800";
      collapseMission.style.color = "#fff";
      collapseVision.classList.add("hidden");
      collapseMotto.classList.add("hidden");
    } else if (btn === btnVision) {
      collapseVision.classList.remove("hidden");
      collapseMission.classList.add("hidden");
      collapseMotto.classList.add("hidden");
    } else if (btn === btnMotto) {
      collapseMotto.classList.remove("hidden");
      collapseVision.classList.add("hidden");
      collapseMission.classList.add("hidden");
    }
  });
});
