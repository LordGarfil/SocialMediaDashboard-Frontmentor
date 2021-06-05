const toogle = document.querySelector("label[name=color-scheme-toogle] input");

function detectColorScheme() {
  const toogle = document.querySelector(
    "label[name=color-scheme-toogle] input"
  );
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    toogle.checked = true;
  } else {
    toogle.checked = false;
  }
}

function toogleSchemeColor(toogle) {
  if (toogle.checked) {
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
  }
}

toogle.addEventListener("change", function (e) {
  if (this.checked) {
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
  }
});

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    detectColorScheme();
  });
