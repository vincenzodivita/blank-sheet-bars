// Add Sheet Title script
const addTitle = document.getElementById("add-title");
const inputTitle = document.getElementById("input-title");
const sheetTitle = document.querySelector("h1");

addTitle.addEventListener("click", function () {
    sheetTitle.innerHTML = inputTitle.value;
})