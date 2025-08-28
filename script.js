let counter = 0;
let coins = 100;
let copies = 2;

document.getElementById("heartCounter").innerText = counter;
document.getElementById("coinCounter").innerText = coins;
document.getElementById("copyCounter").innerText = copies;

const now = new Date();
const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

function increaseCounter() {
    counter++;
    document.getElementById("heartCounter").innerText = counter;
}

function copyService(button) {
    copies++;
    document.getElementById("copyCounter").innerText = copies + " copy";
    
    const card = button.closest(".grid-item");
    const serviceNumber = card.querySelector(".card_bottom2 h1").innerText;

    navigator.clipboard.writeText(serviceNumber)
    .then(() => {
        alert("Copied: " + serviceNumber);
    })
    .catch(err => {
        console.error("Failed to copy: ", err);
    });
}

function callService(button) {
  const card = button.closest(".grid-item");
  const serviceName = card.querySelector(".card_bottom h2").innerText;
  const serviceNumber = card.querySelector(".card_bottom2 h1").innerText;

  if (coins < 20) {
    alert("You have no coins left!");
    return;
  }

  coins -= 20;
  document.getElementById("coinCounter").innerText = coins;
  alert("Calling " + serviceName + " - " + serviceNumber);



const historyItem = document.createElement("div");
historyItem.classList.add("history_item");

historyItem.innerHTML = `
  <div class="history_line1">${serviceName} - ${time}</div>
  <div class="history_line2">${serviceNumber}</div>
`;

document.getElementById("historyList").appendChild(historyItem);


  document.getElementById("historyList").appendChild(historyItem);
}

function clearHistory() {
  document.getElementById("historyList").innerHTML = "";
}
