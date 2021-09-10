let total = 0;
document.getElementById("total").innerText = `Total: $${total}`;

function updatePage() {
  document.getElementById("total").innerText = `Total: $${total}`;
}

const coke = document.getElementById("coke");
const sprite = document.getElementById("sprite");
const drP = document.getElementById("DrP");
const diet = document.getElementById("DC");
const clear = document.getElementById("clear");

coke.addEventListener("click", () => {
  total = total + 2;
  updatePage();
});

sprite.addEventListener("click", () => {
  total = total + 3;
  updatePage();
});

drP.addEventListener("click", () => {
  total = total + 4;
  updatePage();
});

diet.addEventListener("click", () => {
  total = total + 5;
  updatePage();
});

clear.addEventListener("click", () => {
  total = 0;
  updatePage();
});

//<button data-price="1.00">Lime Soda</button>
//event.target.getAttribute('data-price');

let totalValue = 0;
function updateTotal() {
  document.getElementById("totalValue").innerText = `Total: $${totalValue}`;
}

function makeMoney(e) {
  e.preventDefault();
  console.log(e);
  let money = document.getElementById("theMoney");
  let quantity = document.getElementById("quantity").value;
  let coins = document.getElementById("coins").value;
  console.log(coins);
  for (quantity; quantity > 0; quantity--) {
    newCoin = document.createElement("div");
    if (coins === "penny") {
      newCoin.innerText = "Penny"
      newCoin.className = "coin"
      totalValue += 0.01
    } else if (coins === "nickel") {
      newCoin.innerText = "Nickel"
      newCoin.className = "coin"
      totalValue += 0.05
    } else if (coins === "dime") {
      newCoin.innerText = "Dime"
      newCoin.className = "coin"
      totalValue += 0.10
    } else {
      newCoin.innerText = "Quarter"
      newCoin.className = "coin"
      totalValue += 0.25
    }
    money.appendChild(newCoin);
    updateTotal();
  }
}

document.getElementById("submit").addEventListener("click", makeMoney);

function deleteCoin(e) {
  if (e.target.classList.contains("coin")) {
    console.log(e.target);
    e.target.remove();
  }
}
document.getElementById("everything").addEventListener("click", deleteCoin);