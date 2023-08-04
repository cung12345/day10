const button = document.getElementById("button-id");
const h1 = document.getElementById("h1-id");
const clear = document.getElementById("clear-id");
const body = document.getElementById("body");
const input = document.getElementById("input");
button.addEventListener("click", () => {
  const value = input.value;
  if (value === "") {
    alert("nhap day du vao");
  } else {
    const h2 = document.createElement("h1");
    h2.innerText = value;
    body.appendChild(h2);
    input.value = "";
  }
});
