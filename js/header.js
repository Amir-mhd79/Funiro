// open and close the canvas
function header() {
  let bars = document.querySelector("div.canvasBtn");
  let offcanvas = document.querySelector("div.offcanvas");
  let backClose = document.querySelector("div.leftBlurCanvas");
  bars.addEventListener("click", () => {
    if (bars.firstElementChild.classList.contains("fa-bars")) {
      bars.firstElementChild.classList.remove("fa-bars");
      bars.firstElementChild.classList.add("fa-close");
      offcanvas.classList.add("show");
      backClose.classList.add("show");
    } else {
      bars.firstElementChild.classList.remove("fa-close");
      bars.firstElementChild.classList.add("fa-bars");
      offcanvas.classList.remove("show");
      backClose.classList.remove("show");
    }
  });
  backClose.addEventListener("click", () => {
    offcanvas.classList.remove("show");
    backClose.classList.remove("show");
    bars.firstElementChild.classList.remove("fa-close");
    bars.firstElementChild.classList.add("fa-bars");
  });
}
export default header;
