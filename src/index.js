// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");
  // alert("Calculating subtotal, yey!");

  //... your code goes here
  const price = product.querySelector(".price span").textContent;
  const quantity = product.querySelector(".quantity input").value;
  const subtotalPricePlace = product.querySelector(".subtotal span");
  const subtotalPrice = price * quantity;
  subtotalPricePlace.textContent = subtotalPrice;
  return subtotalPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const multipleProducts = document.querySelectorAll(".product");

  // end of test
  // ITERATION 2
  //... your code goes here
  let total = 0;
  multipleProducts.forEach((product) => {
    const subtotalElement = updateSubtotal(product);
    total += subtotalElement;
  });
  // ITERATION 3
  //... your code goes here
  const totalPrice = document.querySelector("#total-value span");
  console.log((totalPrice.textContent = total));
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here

  target.parentNode.parentNode.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.querySelector("#calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here

  const removeBtn = document.querySelectorAll(".btn-remove");
  removeBtn.forEach((button) => {
    button.addEventListener("click", removeProduct);
  });
});
