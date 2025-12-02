const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const countSpan = document.getElementById("count");

let count = 1;

minus.addEventListener("click", () => {
  if (count > 1) {
    count--;
    countSpan.textContent = count;
  }
});

plus.addEventListener("click", () => {
  count++;
  countSpan.textContent = count;
});
