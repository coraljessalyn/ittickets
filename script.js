document.getElementById("addTicket").addEventListener("click", function () {
  const input = document.getElementById("ticketInput");
  const ticketText = input.value.trim();

  if (ticketText === "") return;

  const card = document.createElement("div");
  card.className = "ticket-card";
  card.innerHTML = `
    <span>${ticketText}</span>
    <button onclick="this.parentElement.remove()">Remove</button>
  `;

  document.getElementById("ticketContainer").appendChild(card);
  input.value = "";
});
