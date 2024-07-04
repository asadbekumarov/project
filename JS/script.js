const Elnumber = document.querySelectorAll("button");
const Elinput = document.getElementById("window");

for (let i = 0; i < Elnumber.length; i++) {
  Elnumber[i].addEventListener("click", () => {
    const btn = Elnumber[i].textContent;
    if (btn === "C") {
      ochirish();
    } else if (btn === "=") {
      natija();
    } else {
      hisob(btn);
    }
  });
}

function ochirish() {
  Elinput.value = "";
}
function natija() {
  Elinput.value = eval(Elinput.value);
}
function hisob(btn) {
  Elinput.value += btn;
}
