const itemQtyValue = document.getElementById("itemQtyValue");
const increaseItemButton = document.getElementById("increaseItem");
const decreaseItemButton = document.getElementById("decreaseItem");
const add2CartBtn = document.getElementById("addCart");

let itemCount = 1;

increaseItemButton.addEventListener("click", function (event) {
  event.preventDefault();
  itemCount++;
  itemQtyValue.textContent = itemCount;
});

decreaseItemButton.addEventListener("click", function (event) {
  event.preventDefault();
  if (itemCount > 1) {
    itemCount--;
    itemQtyValue.textContent = itemCount;
  }
});

add2CartBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const itemSent2Cart = {
    data: itemData,
    quantity: itemCount,
  };
});
