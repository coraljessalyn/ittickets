document.getElementById("addTicket").addEventListener("click", function () {
  const input = document.getElementById("ticketInput");
  const ticketText = input.value.trim();

  if (ticketText === "") return;

  const ticketCard = document.createElement("div");
  ticketCard.className = "ticket-card";

  const ticketContent = document.createElement("p");
  ticketContent.textContent = ticketText;

  const removeButton = document.createElement("button");
  removeButton.className = "remove-button";
  removeButton.textContent = "Remove";
  removeButton.onclick = function () {
    ticketCard.remove();
  };

  ticketCard.appendChild(ticketContent);
  ticketCard.appendChild(removeButton);

  document.getElementById("ticketContainer").appendChild(ticketCard);
  input.value = "";
});
