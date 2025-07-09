document.getElementById("addTicket").addEventListener("click", function () {
  const input = document.getElementById("ticketInput");
  const ticketText = input.value.trim();

  if (ticketText !== "") {
    const ticketCard = document.createElement("div");
    ticketCard.className = "ticket-card";

    ticketCard.innerHTML = `
      <p>${ticketText}</p>
      <div class="ticket-actions">
        <button class="edit-button">✏️ Edit</button>
        <button class="resolve-button">✅ Resolve</button>
      </div>
    `;

    document.getElementById("ticketContainer").appendChild(ticketCard);
    input.value = "";

    // Optional: Add edit functionality
    ticketCard.querySelector(".edit-button").addEventListener("click", () => {
      const newText = prompt("Edit ticket:", ticketText);
      if (newText !== null && newText.trim() !== "") {
        ticketCard.querySelector("p").textContent = newText.trim();
      }
    });

    // Optional: Remove on resolve
    ticketCard.querySelector(".resolve-button").addEventListener("click", () => {
      ticketCard.remove();
    });
  }
});
